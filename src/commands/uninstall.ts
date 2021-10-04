import { exec } from 'child_process';

export default function uninstall(inputArguments?: any) {

	let packed : string = inputArguments[0], format = inputArguments[1], _format = '';

	const allowedArguments = ['-D', '-g']
	if (allowedArguments.includes(packed) === true) {
		_format = packed;
		packed = format;
	}

	if (_format !== undefined && packed === undefined) {
		return console.error('\n arguments to command are invalid: ' + inputArguments.join(' '))
	}

	let pack = packed + ' ' + _format;

	console.log(pack)
	try {

		exec(`npm uninstall ${pack} `, (error: any, stdout: any, stderr: any) => {
			if (error) {
				console.error(error.message)
				return;
			}
			if (stderr) {
				console.error(`stderr: ${stderr}`);
				return;
			}
			console.log(`${stdout}`)
		})

	} catch (err) {
		console.log(err);
	}
}
