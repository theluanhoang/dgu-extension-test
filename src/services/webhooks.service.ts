import { BAD_REQUEST, UNPROCESSABLE_ENTITY } from "@/core";
import { transactionValidation } from "@/helpers";
import { TransactionModel, UsageModel } from "@/models";
import TransactionService from "@/services/transaction.service";
import { IRequestTransaction, IResponseTransaction, IUsageModel } from "@/types";
import SocketService from "./socket.service";
import { MIN_AMOUNT_PAYMENT, VALID_TRANSFER_SYNTAX } from "@/utils";

class WebhooksService {
    handleBankTransfer = async (transactions: IRequestTransaction[]) => {
        // NOTE: Need to optimize performance
        const updatedUsageArray: (IUsageModel | null)[] = await Promise.all(
            transactions.map(async (transaction) => {
                const match = transaction.description.match(VALID_TRANSFER_SYNTAX);
                const userId = match ? match[1] : null;
                const currentTransaction = await TransactionModel.findOne({
                    cassoTransactionId: transaction.id,
                });

                const responseTransaction: IResponseTransaction = {
                    result: false,
                    amount: transaction.amount,
                };

                if (!userId || currentTransaction) return null;

                if (transaction.amount < MIN_AMOUNT_PAYMENT) {
                    await SocketService.handleNotificationPaymentStatus(userId, responseTransaction);
                    return null;
                }

                try {
                    const updatedUsage = await UsageModel.findOneAndUpdate(
                        { userId },
                        { $inc: { cash: transaction.amount } },
                        { upsert: true, new: true },
                    );

                    if (!updatedUsage) throw new UNPROCESSABLE_ENTITY("Failed to update or create Usage record");

                    const { error, value } = transactionValidation({
                        cassoTransactionId: transaction.id,
                        bankTransactionId: transaction.tid,
                        cash: transaction.amount,
                        userId,
                    });

                    if (error) throw new BAD_REQUEST(error.details[0].message, 99);

                    await TransactionService.saveTransaction(value);

                    responseTransaction.result = true;
                    await SocketService.handleNotificationPaymentStatus(userId, responseTransaction);

                    return updatedUsage;
                } catch (error) {
                    responseTransaction.result = false;
                    await SocketService.handleNotificationPaymentStatus(userId, responseTransaction);

                    return null;
                }
            }),
        );

        const updatedUsage = updatedUsageArray.filter((usage) => usage !== null);
        return { result: updatedUsage };
    };
}

export default new WebhooksService();
