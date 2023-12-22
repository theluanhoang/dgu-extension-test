import { ITransactionModel } from "@/types";
import { Schema, model } from "mongoose";

const COLLECTION_NAME = "Transactions";
const DOCUMENT_NAME = "Transaction";

const transactionSchema: Schema = new Schema<ITransactionModel>(
    {
        userId: {
            type: String,
            required: true,
        },
        cash: {
            type: Number,
            default: 0,
        },
        cassoTransactionId: {
            type: Number,
            required: true,
        },
        bankTransactionId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
        versionKey: false,
    },
);

export const TransactionModel = model<ITransactionModel>(DOCUMENT_NAME, transactionSchema);
