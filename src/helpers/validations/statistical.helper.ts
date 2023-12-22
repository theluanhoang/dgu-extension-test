import Joi, { ValidationResult } from "joi";

export const statisticalValidation = (dataValidation: object): ValidationResult<{ timeStatistical: string }> => {
    return Joi.object({
        timeStatistical: Joi.string().valid("1h", "1d", "1w", "1m", "1y").required(),
    }).validate(dataValidation);
};
