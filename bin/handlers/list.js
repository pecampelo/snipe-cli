const child_process = require("child_process");
const { childProcessCallback } = require("./helpers/defaultFunctions");


function list(folder, format) {

	let extraArguments = [folder, format]

	if (!["-lh, ''"].includes(folder) == false) {
	 	throw new Error('\n arguments to command are invalid: ' + extraArguments.join(' '))
	}

	try {

		child_process.exec(`ls ${extraArguments.join(' ')} `, childProcessCallback())
		process.exit()

	} catch (err) {
		console.log(err);
	}
}

module.exports = list;
