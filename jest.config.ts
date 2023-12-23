import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testPathIgnorePatterns: ["/node_modules/", "<rootDir>/dist/"],
    collectCoverage: true,
    verbose: true,
    reporters: ["default", ["jest-junit", { outputDirectory: "reports", outputName: "test-results.xml" }]],
};

export default config;
