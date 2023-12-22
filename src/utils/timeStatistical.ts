import moment, { Moment } from "moment";
const TIME_FORMAT = "YYYY-MM-DDTHH:mm:ss.SSSZZ";

export const handleTimeStatistical = (timePeriod: string): { startDate: Date; endDate: Date } => {
    const formatTime = (
        amount: number,
        unit: moment.unitOfTime.DurationConstructor,
    ): { startDate: Date; endDate: Date } => ({
        startDate: new Date(moment().subtract(amount, unit).format(TIME_FORMAT)),
        endDate: new Date(moment().format(TIME_FORMAT)),
    });

    switch (timePeriod) {
        case "1h":
            return formatTime(1, "hours");
        case "1d":
            return formatTime(1, "days");
        case "1w":
            return formatTime(1, "weeks");
        case "1m":
            return formatTime(1, "months");
        case "1y":
            return formatTime(1, "years");
        default:
            throw new Error("Invalid time period");
    }
};
