const snipe = require('./snipe')

module.exports = {
	intro() {
		console.log('\n------------------------------------------------------------------------');
		console.log('\n     Welcome to Snipe CLI!     \n       Precise and sharp!    \n');
		console.log('------------------------------------------------------------------------\n');
	},
	command(input, argument) {

		if (argument == undefined) { argument = ['']}

		console.log(`\n > ${input} ${argument.join(' ')}`)

	},
	commandList() {

		let list = []
		snipe.forEach((command) => {
			let description = command.description !== '' ? command.description : undefined;
			list.push({'name': command.name, 'description': description});
		});
		console.table(list);

	},
	invalid(extraMessage) {

		console.log('\nCommand invalid! ');
		if (extraMessage != undefined) {	console.log(`\n\n${extraMessage} `); }
		console.log('\nPlease, use one of these commands:\n');
		console.log(`${snipe.map((item) => item.name).join([separator = ', \n'])}`);

	},
	error() {},
	waitingUserInput() {},
};
