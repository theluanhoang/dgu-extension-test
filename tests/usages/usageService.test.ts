import UsageService from "@/services/usage.service";
import { UsageModel } from "@/models/usage.model";

const USER_ID_TEST = "101246107454777738302";
const DEVICE_TEST = "Microsoft Windows, Chrome";
const TIMESTAMP_TEST = 1703147740480;
const API_KEY_TEST = "eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp.eyJ1c2VySWQiOiIxMDczNTA1Mzg2MzE5ODE3MzIxM";
const CASH_TEST = 100000;

const mockFindOne = jest.spyOn(UsageModel, "findOne").mockImplementation(
    () =>
        ({
            select: jest.fn().mockResolvedValue({
                apiKeys: [{ timestamp: TIMESTAMP_TEST, apiKey: API_KEY_TEST, device: DEVICE_TEST }],
                cash: CASH_TEST,
            }),
        }) as any,
);

const mockFindOneAndUpdate = jest.spyOn(UsageModel, "findOneAndUpdate").mockImplementation(
    () =>
        ({
            exec: jest.fn().mockResolvedValue(true),
        }) as any,
);

describe("UsageService", () => {
    describe("UsageService.createApiKey", () => {
        beforeEach(() => {
            mockFindOneAndUpdate.mockClear();
        });

        it("Successfully creates an API key", async () => {
            const createUsageResponse = await UsageService.createApiKey({ userId: USER_ID_TEST, device: DEVICE_TEST });

            expect(UsageModel.findOneAndUpdate).toHaveBeenCalledWith(
                { userId: USER_ID_TEST },
                {
                    $push: {
                        apiKeys: {
                            timestamp: expect.any(Number),
                            apiKey: expect.any(String),
                            device: DEVICE_TEST,
                        },
                    },
                },
                { upsert: true, new: true },
            );

            expect(createUsageResponse).toHaveProperty("apiKey", expect.any(String));
            expect(createUsageResponse).toHaveProperty("timestamp", expect.any(Number));
            expect(createUsageResponse).toHaveProperty("device", DEVICE_TEST);
        });
    });

    describe("UsageService.getApiKey", () => {
        beforeEach(() => {
            mockFindOne.mockClear();
        });

        it("Successfully retrieves API keys", async () => {
            const response = await UsageService.getApiKey({ userId: USER_ID_TEST });

            expect(UsageModel.findOne).toHaveBeenCalledWith({ userId: USER_ID_TEST });
            expect(response).toHaveProperty("infoApiKey");
            expect(response.infoApiKey).toEqual(
                expect.arrayContaining([expect.objectContaining({ timestamp: TIMESTAMP_TEST, device: DEVICE_TEST })]),
            );
        });
    });

    describe("UsageService.deleteApiKey", () => {
        beforeEach(() => {
            mockFindOneAndUpdate.mockClear();
        });

        it("Successfully deletes an API key", async () => {
            const response = await UsageService.deleteApiKey({ userId: USER_ID_TEST, timestamp: TIMESTAMP_TEST });

            expect(UsageModel.findOneAndUpdate).toHaveBeenCalledWith(
                { userId: USER_ID_TEST },
                { $pull: { apiKeys: { timestamp: TIMESTAMP_TEST } } },
                { new: true },
            );

            expect(response).toEqual({ deleteApiKey: true, userId: USER_ID_TEST, timestamp: TIMESTAMP_TEST });
        });

        it("Throws an error when delete operation fails", async () => {
            mockFindOneAndUpdate.mockResolvedValueOnce(null);

            await expect(
                UsageService.deleteApiKey({ userId: USER_ID_TEST, timestamp: TIMESTAMP_TEST }),
            ).rejects.toThrow("Delete API Key Failed");
        });
    });

    describe("UsageService.getCash", () => {
        beforeEach(() => {
            mockFindOne.mockClear();
        });

        it("Successfully retrieves cash amount", async () => {
            const response = await UsageService.getCash({ userId: USER_ID_TEST });

            expect(UsageModel.findOne).toHaveBeenCalledWith({ userId: USER_ID_TEST });
            expect(response).toHaveProperty("cash", CASH_TEST);
        });
    });
});
