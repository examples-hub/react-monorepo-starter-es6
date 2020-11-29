module.exports = {
  verbose: true,
  testMatch: ['<rootDir>/**/*.test.(js|jsx)'],
  setupFilesAfterEnv: ['<rootDir>/config/setupTests.js'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  // moduleNameMapper: {
  //   '^@examples-hub/sample-components':
  //     '<rootDir>/packages/sample-components/src',
  // },
};
