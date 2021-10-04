#!/usr/bin/env node

import { commandList } from './commandList';
import logger from './logger';

function Snipe() {

	return {
		start: () => {

			let input: string | string[] = process.argv.slice(2).filter(e => e);
			let inputCommand: string = input[0];
			let inputArguments: string | string[] = input.slice(1);
			let fullInput: (string | string[])[] = [inputCommand, inputArguments]


			if (!inputCommand) {

				const commandGotten: any = commandList.find(command => command.name == '--help');

				logger.logCommand(fullInput)
				commandGotten.handler()
				logger.logCommandList()

			}

			else {

				try {

					const commandGotten: any =  commandList.find((com) => com.name == inputCommand || com.alias == inputCommand);

					logger.logCommand(fullInput)
					commandGotten.handler(inputArguments)

					// Add code her




				} catch (err) {

					logger.invalidCommand()
					console.log(err)

				}

			}
		}
	}
}


export default Snipe;
