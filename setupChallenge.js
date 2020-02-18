const Logger = require('./logger')

// const whiteSpaceRegex = /\n|\r|\t| /g

const challenge = (challenge, callback) => {
  const { index, description, input, expected } = challenge
  const code = callback.toString()
  // console.log('👌', code)

  Logger.addTest(index, description, code.length, code)

  const testResult = callback(input)

  if (testResult !== undefined) {
    it(description, () => {
      expect(testResult).toEqual(expected)
    })
  }
}

global.challenge = challenge
