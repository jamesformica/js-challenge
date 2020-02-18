module.exports = {
  reporters: [`<rootDir>/setup/setupReporter.js`],
  transform: {},
  setupFilesAfterEnv: [
    `<rootDir>/setup/setupListener.js`,
  ],
  setupFiles: [
    `<rootDir>/setup/setupChallenge.js`
  ]
}
