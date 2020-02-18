module.exports = {
  reporters: [`<rootDir>/emptyReporter.js`],
  transform: {},
  setupFilesAfterEnv: [
    `<rootDir>/setupReporter.js`,
  ],
  setupFiles: [
    `<rootDir>/setupChallenge.js`
  ]
}
