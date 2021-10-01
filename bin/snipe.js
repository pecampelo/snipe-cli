const logger = require('./logger');
const http = require('http');

module.exports = [
	{
		"name": 'version',
		"alias": '-v',
		"description": '',
		"handler": function version() {
			console.log('\nWelcome to Snipe! \nWe are currently on version 1.0!')
		}
	},
	{
		"name": 'init',
		"alias": '-I',
		"description": '',
		"handler": function init(arguments = '') {
			if (!arguments) return;
			if (arguments > 4) return logger.invalid();

			logger.intro()

			}
	},
	{
		"name": '--config',
		"description": '',
		"handler": function config(argument1 = '', argument2 = '') {}
	},
	{
		"name": '--help',
		"description": '',
		"handler": function help(argument1 = '', argument2 = '', argument3 = '') {
			console.log('\nCommands!')
	}
	},
	{
		"name": '--logs',
		"description": '',
		"handler": function logs(argument1 = '', argument2 = '') {
			console.log('\nLogs!');
		}
	},
	{
		"name": 'install',
		"alias": 'i',
		"description": '',
		"handler": function install(argument1 = '', argument2 = '') {
			console.log('\nInstall')
		}
	},
	{
		"name": 'ls',
		"description": '',
		"handler": function ls() {
			console.log('\nNode list')
		}

	},
	{
		"name": 'start',
		"alias": '-go',
		"description": '',
		"handler":
		function start() {
			console.log('\nstart')
		}
	},
	{
		"name": 'test',
		"alias": '-t',
		"description": '',
		"handler": function test() {
			console.log('\ntest')
		}
	},
	{
		"name": 'whoami',
		"alias": '?',
		"description": '',
		"handler": function whoami() {
			console.log('\nWho am I')
		}
	},
	{
		"name": 'fetch',
		"alias": '-f',
		"description": '',
		"handler": function fetch(originalURL) {

			try {

				const url = new URL(originalURL);

				http.get(url, res => {
					let data = [];

					res.on('data', (chunk) => {
						data.push(chunk);
					});

					// The whole response has been received. Print out the result.
					res.on('end', async () => {
						let me = await JSON.parse(Buffer.concat(data));
						console.log(me)
					});
				}).on('error', (err) => {
					console.log('\n' + err)
				})

			}	catch (err) {

				console.log('\n            ' + err + '\n')

			}
		}
	},
]
