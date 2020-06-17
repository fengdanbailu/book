const log = console.log;
const _ = require('lodash');
const chalk = require('chalk');
// var React = require('react');
// var ReactDOM = require('react-dom');
// const PropTypes = require('prop-types');
const request = require('request');
const commander = require('commander');
const express = require('express')
const moment = require('moment')


log(_.chunk(['a', 'b', 'c', 'd'], 3));
log(chalk.blue('Hello') + ' World' + chalk.red('!'));


request('http://www.baidu.com', function (error, response, body) {
  log('error:', error); 
  log('statusCode:', response && response.statusCode); 
  // log('body:', body); 
});

function test1_command(){
	const program = new commander.Command();
	
	program
	 .version('1.0.0')
	 .option('-d, --debug', 'output extra debugging')
	 .option('-s, --small', 'small pizza size')
	 .option('-p, --pizza-type <type>', 'flavour of pizza');
	
	program.parse(process.argv);
	
	if (program.debug) log(program.opts());
	log('pizza details:');
	if (program.small) log('- small pizza size');
	if (program.pizzaType) log(`- ${program.pizzaType}`);
}
function test2_express(){
	const app = express()
	 
	app.get('/', function (req, res) {
	  res.send('Hello World')
	})	 
	app.listen(8888)
}

test1_command();
// test2_express();
const log2=function(moment){
	log(moment.format('YYYY-MM-DD hh:mm:ss a'));
}
log2(moment());
log2(moment().add(1,"days"))
log2(moment().subtract(2,"days"))


const test3_debug=function(){
	console.log("start");
	const createDebug = require('debug')
	createDebug.formatters.h = (v) => {
	  return v.toString('hex')
	}
}
test3_debug()
