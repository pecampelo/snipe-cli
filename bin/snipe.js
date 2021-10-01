const logger = require('./logger')

module.exports = {
	version() {
		console.log('\nWelcome to Snipe! \nWe are currently on version 1.0!')
	},
	init(argument1 = '', argument2 = '', argument3 = '', argument4 = '') {
		logger.intro();
		if (!arguments) {
			return;
		}
		else {

		}
	},


	config(argument1 = '', argument2 = '') {

	},

	help(argument1 = '', argument2 = '', argument3 = '') {
		console.log('\nCommands:')
	},

	logs(argument1 = '', argument2 = '') {
		console.log('\nLogs')
	},

	install(argument1 = '', argument2 = '') {
		console.log('\nInstall')
	},

	ls() {
		console.log('\n Node list')
	},

	start() {
		console.log('\n start')
	},

	whoami() {
		console.log('\nWho am I')
	},

	process() {
		console.log(`\n${process.argv}`);
		console.log(`\n${process.exit}`);
		console.log(`\n${process.argv0}`);
	},


}
