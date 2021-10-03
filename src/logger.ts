const snipe = require('./snipe');
import { Command } from "./snipe.d"

export class Logger {

	intro(): void {
		console.log('\n------------------------------------------------------------------------');
		console.log('\n     Welcome to Snipe CLI!     \n       Precise and sharp!    \n');
		console.log('------------------------------------------------------------------------\n');
	}

	logCommand([input, inputArguments]: ( string | string[] )[]): void {
		console.log(input);
		console.log(inputArguments);
	}
	logCommandList(): void {
		let list: any[];

		async function getList(): Promise<void> {
			await snipe.forEach((command: Command): void => {

				let description = command.description !== '' ? command.description : undefined;



				list.push({'name': command.name, 'description': description});

			});
			console.log(list);
		}
	}
	invalidCommand(extraMessage?: string): void {
			console.log('\nCommand invalid! ');
			if (extraMessage != undefined) {	console.log(`\n\n${extraMessage} `); }
			console.log('\nPlease, use one of these commands:\n');
			console.log(`${snipe.map((command: Command) => command.name).join(', \n')}`);
	}

}

