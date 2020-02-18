const Logger = require('./logger')

const reporter = {
  specDone: Logger.addResultToTest,
  jasmineDone: Logger.log
}

jasmine.getEnv().addReporter(reporter)