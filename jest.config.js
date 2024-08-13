/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  roots: ["."],
  transform: {
    "^.+\\.ts$": "ts-jest", // Transform TypeScript files
  },
  testEnvironment: "node",

  testMatch: [
    "**/src/**/?(*.)+(spec|test).[tj]s?(x)",
    "**/src/**/?(*.)+(e2e-spec|test).[tj]s?(x)",
  ],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["json", "lcov", "text-summary"],
  moduleNameMapper: {
    "^@/(.*)$": "./$1",
  },
  clearMocks: true,
  setupFilesAfterEnv: ["./setup-tests.ts"],
  testResultsProcessor: "jest-sonar-reporter", // Use SonarQube-compatible reporter
};
