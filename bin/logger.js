const snipe = require('./snipe')

module.exports = {
	intro() {
		console.log('\n------------------------------------------------------------------------');
		console.log('\n     Welcome to Snipe CLI!     \n       Precise and sharp!    \n');
		console.log('------------------------------------------------------------------------\n');
	},
	command(input) {
		console.log(`\n > ${input}`)
	},
	invalid(extraMessage = '') {
		console.log('\n   Command invalid! ');
		console.log(`\n\n   ${extraMessage} `);
		console.log('\n\n   Please, use one of these commands:\n');
		console.log(Object.keys(snipe));
	},
	error() {},
	waiting() {},
	ending() {}
};
