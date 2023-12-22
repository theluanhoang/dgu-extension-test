import { IUsageModel } from "@/types";
import { DEFAULT_CASH } from "@/utils";
import { Schema, model } from "mongoose";

const COLLECTION_NAME = "Usages";
const DOCUMENT_NAME = "Usage";

const usageSchema: Schema = new Schema<IUsageModel>(
    {
        userId: {
            type: String,
            required: true,
            require: true,
            unique: true,
        },
        cash: {
            type: Number,
            default: DEFAULT_CASH,
            min: 0,
        },
        apiKeys: [
            {
                timestamp: {
                    type: String,
                    required: true,
                },
                apiKey: {
                    type: String,
                    required: true,
                },
                device: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
        collection: COLLECTION_NAME,
        versionKey: false,
    },
);

export const UsageModel = model<IUsageModel>(DOCUMENT_NAME, usageSchema);
