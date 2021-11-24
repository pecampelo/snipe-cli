const snipe = require("../snipe");

function help(type) {

	if (type === 'long') {
		console.log('\nCommands!\n');
	}

	process.exit();

}

module.exports = help;
