module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    moduleDirectories: ['node_modules', 'src'],
    transformIgnorePatterns: [
      "/node_modules/(?!axios|react-router-dom|react-router).+\\.js$"
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.css$': 'identity-obj-proxy',
        '^react-router-dom$': require.resolve('react-router-dom'),
    },
    testEnvironment: 'jsdom',
  };
  