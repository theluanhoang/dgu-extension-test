export interface IUsageModel {
    _id: string;
    userId: string;
    cash: number;
    apiKeys: Array<{
        timestamp: string;
        apiKey: string;
        device: string;
    }>;
}

export interface IRequestDeleteApiKey {
    userId: string;
    timestamp: number;
}

export interface IRequestCreateApiKey {
    userId: string;
    device: string;
}

export interface IRequestGetApiKey {
    userId: string;
    device?: string;
}
