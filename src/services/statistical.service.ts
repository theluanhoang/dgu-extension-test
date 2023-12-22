import { handleTimeStatistical } from "@/utils";
import { UsageModel, TransactionModel } from "@/models";

class StatisticalService {
    async statistical(timeStatistical: string) {
        const { startDate, endDate } = handleTimeStatistical(timeStatistical);

        const [revenueResult, totalUserResult] = await Promise.all([
            this.calculateTotalRevenue(startDate, endDate),
            this.calculateTotalUsers(startDate, endDate),
        ]);

        return {
            revenue: revenueResult[0]?.totalCash ?? 0,
            totalUser: totalUserResult[0]?.userCount ?? 0,
        };
    }

    calculateTotalRevenue(startDate: Date, endDate: Date) {
        return TransactionModel.aggregate([
            { $match: { createdAt: { $gte: startDate, $lte: endDate } } },
            { $group: { _id: null, totalCash: { $sum: "$cash" } } },
        ]);
    }

    calculateTotalUsers(startDate: Date, endDate: Date) {
        return UsageModel.aggregate([
            { $match: { createdAt: { $gte: startDate, $lte: endDate } } },
            { $group: { _id: null, userCount: { $sum: 1 } } },
        ]);
    }
}

export default new StatisticalService();
