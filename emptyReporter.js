const chalk = require('chalk')
const { table } = require('table')

function tip(from, to, why) {
  return [chalk.yellow(from), chalk.yellowBright(to), chalk.white(why)]
}

class EmptyReporter {
  onRunComplete(_, results) {
    if (results.numFailedTests > 0) {
      for(var i = 0; i < results.testResults.length; i ++) {
        var testFileResults = results.testResults[i].testResults;

        for(var j = 0; j < testFileResults.length; j++) {
          var test = testFileResults[j];

          if (test.failureMessages.length > 0) {
            console.log(test.failureMessages.join('\n'))
          }
        }
      }
    }

    if (results.numPassedTests === results.numTotalTests && results.numTotalTests >= 4) {
      const heading = chalk.white.bold('\nCongrations on finishing all the challenges!')
      const subheading = chalk.white('\nHere are some tips and tricks to shrink your code...')
      const tips = [
        ['Change', 'To', 'Why'].map(v => chalk.bold(v)),
        tip('const', 'var', 'var is one character shorter than const'),
        tip('(input) => { return ... }', 'input=>()', 'use implicit returns'),
        tip('var text = "abc"', 'var t="abc"', 'use short variable names and remove whitespaces'),
        tip('if (num === 1)', 'if(num==1)', 'use double equals instead of tripple equals'),
        tip('`some text ${v}`', '"some text "+v', 'text templates can actually be longer'),
        tip('// a comment', '', 'remove all comments...'),
      ]
      console.log(heading, subheading)
      console.log(table(tips))
    }
  }
}

module.exports = EmptyReporter