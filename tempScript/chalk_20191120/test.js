const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));
const rawArgv = process.argv.slice(2)
// console.log(rawArgv)
// console.log(process)

const args = require('minimist')(rawArgv, {
 boolean: [
  // build
  'modern',
  'report',
  'report-json',
  'watch',
  // serve
  'open',
  'copy',
  'https',
  // inspect
  'verbose'
 ],
 open:true
})
// console.log(args);
const command = args._[0]
console.log(process.env)
// console.log(command);