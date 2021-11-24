const child_process = require('child_process');

const childProcessCallback = (error, stdout, stderr) => {

	if (error) {
		console.error(error.message)
		return;
	}

	if (stdout) {
		console.log('Able command: ' + stdout);
	}

	if (stderr) {
			console.error(`stderr: ${stderr}`);
			return;
	}
    return;
}

const execute = (command, place = process.cwd()) => {
	child_process.exec(command, { cwd: place }, childProcessCallback);
}

module.exports = {
	execute,
	childProcessCallback,
}
