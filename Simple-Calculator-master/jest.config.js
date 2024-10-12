module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/__tests__/setup.js'],
  testMatch: ['**/__tests__/**/*.test.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};