module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/__tests__/setup.js'],
  testMatch: ['**/__tests__/**/*.test.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-results",  // Directory for the report
        outputName: "jest-junit.xml",     // File name for the report
      },
    ],
  ],
};