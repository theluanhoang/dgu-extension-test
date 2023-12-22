import { BAD_REQUEST, UNPROCESSABLE_ENTITY } from "@/core";
import { TransactionModel } from "@/models";
import { IRequestSaveTransaction } from "@/types";
import { ClientSession } from "mongoose";

class TransactionsService {
    saveTransaction = async (transactionData: IRequestSaveTransaction) => {
        const currentTransaction = await TransactionModel.findOne({
            cassoTransactionId: transactionData.cassoTransactionId,
            bankTransactionId: transactionData.bankTransactionId,
        });

        if (currentTransaction) throw new BAD_REQUEST("Transaction is exists");

        const savedTransaction = await TransactionModel.create(transactionData);

        if (!savedTransaction) throw new UNPROCESSABLE_ENTITY("Failed to create the transaction record.");

        return { result: savedTransaction };
    };
}

export default new TransactionsService();
