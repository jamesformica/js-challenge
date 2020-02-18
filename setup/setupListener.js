const Logger = require('./setupLogger')

const reporter = {
  specDone: Logger.addResultToTest,
  jasmineDone: Logger.log
}

jasmine.getEnv().addReporter(reporter)