const Logger = require('./setupLogger')

// const whiteSpaceRegex = /\n|\r|\t| /g

const challenge = (challenge, callback) => {
  const { index, description, input, expected } = challenge
  const code = callback.toString()

  Logger.addTest(index, description, code.length, code)

  const testResult = callback(input)

  if (testResult !== undefined) {
    it(description, () => {
      expect(testResult).toEqual(expected)
    })
  }
}

global.challenge = challenge
