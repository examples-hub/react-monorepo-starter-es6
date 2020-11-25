module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/config/setupTests.js'],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  testMatch: ['<rootDir>/**/*.test.(js|jsx)'],
};
