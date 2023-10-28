
module.exports = {
  
    transformIgnorePatterns: [
      "/node_modules/",
      "^.+\\.css$"
    ],

    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],

    "transform": {
      "\\.[jt]sx?$": "babel-jest",
      "\\.css$": "some-css-transformer",
    }

  };
  