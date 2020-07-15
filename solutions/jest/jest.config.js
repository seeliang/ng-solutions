module.exports = {
  preset: "jest-preset-angular",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png)$": "<rootDir>/__mocks__/image.js",
  },
  setupFilesAfterEnv: [
    "<rootDir>/setupJest.ts"
  ]
}
