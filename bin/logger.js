module.exports = {
	intro() {
		console.log('\n------------------------------------------------------------------------');
		console.log('\n     Welcome to Snipe CLI!     \n       Precise and sharp!    \n');
		console.log('------------------------------------------------------------------------\n');
	},
	command() {},
	invalid() {
		console.log('   Command invalid! \n\nPlease, use one of these commands:\n');
		console.log('     -v - Snipe version \n     -user - login with specific configuration');
		console.log('\n');
	},
	error() {},
	waiting() {},
	ending() {}
};
