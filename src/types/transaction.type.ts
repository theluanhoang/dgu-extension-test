export interface ITransactionModel {
    _id: string;
    userId: string;
    cash: number;
    cassoTransactionId: number;
    bankTransactionId: string;
}

export interface IRequestSaveTransaction {
    userId: string;
    cash: number;
    cassoTransactionId: number;
    bankTransactionId: string;
}
