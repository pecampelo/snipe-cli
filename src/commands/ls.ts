import { exec } from 'child_process'

export default function ls(folder: string, format?: string) {

	let extraArguments = [folder, format]

	if (!["-lh, ''"].includes(folder) == false) {
		return console.error('\n arguments to command are invalid: ' + extraArguments.join(' '))
	}

	try {

		exec(`ls ${extraArguments.join(' ')} `, (error: any, stdout: any, stderr: any) => {
			if (error) {
				console.error(error.message)
				return;
			}
			if (stderr) {
				console.error(`stderr: ${stderr}`);
				return;
			}
			console.log(`\n${stdout}`)
		})

	} catch (err) {
		console.log(err);
	}
}
