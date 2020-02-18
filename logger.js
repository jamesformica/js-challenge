const chalk = require('chalk')
const { table } = require('table')

const TABLE_CONFIG = {
  columns: {
    0: { alignment: 'left' },
    1: { alignment: 'right' },
    2: { alignment: 'right' },
    3: { alignment: 'left' },
    4: { alignment: 'left' },
  },
  drawHorizontalLine: (index, size) => {
    return index === 0 || index === 1 || index === size;
  }
}

const TABLE_HEADINGS = ['#', 'Bytes', 'Bits', 'Status', 'Description'].map(v => chalk.bold(v))

class Logger {
  constructor() {
    this.tests = []
    this.addTest = this.addTest.bind(this)
    this.addResultToTest = this.addResultToTest.bind(this)
    this.log = this.log.bind(this)
  }

  addTest(test, description, bytes, func) {
    this.tests.push({ test, description, bytes, func })
  }

  addResultToTest({ description, status }) {
    const test = this.tests.find(t => t.description === description)
    test.status = status
    test.passed = status === 'passed'
  }

  log() {
    this.printLogo()
    const rows = [TABLE_HEADINGS, ...this.tests.map(this.buildRow)]
    const output = table(rows, TABLE_CONFIG)

    console.log(output)
  }

  buildRow(test) {
    const status = test.passed ? chalk.greenBright('success') : chalk.redBright('fail')
    const challenge = chalk.white(test.test)
    const bytes = chalk.yellowBright(test.bytes)
    const bits = chalk.yellow(test.bytes * 8)
    const description = chalk.grey(test.description)
    return [challenge, bytes, bits, status, description]
  }

  printLogo() {
    const text = `
     _ ____     ____ _           _ _
    | / ___|   / ___| |__   __ _| | | ___ _ __   __ _  ___
 _  | \\___ \\  | |   | '_ \\ / _\` | | |/ _ \\ '_ \\ / _\` |/ _ \\
| |_| |___) | | |___| | | | (_| | | |  __/ | | | (_| |  __/
 \\___/|____/   \\____|_| |_|\\__,_|_|_|\\___|_| |_|\\__, |\\___|
                                                |___/
    `
    console.log(text)
  }
}

module.exports = new Logger()