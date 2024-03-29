#!/usr/bin/env node

const logger = require('./logger');
const snipe = require('./snipe');

const start = () => {

	let input = process.argv.slice(2).filter(e => e);
	let inputCommand = input[0];
	let inputArguments = input.slice(1, 3);

	if (!inputCommand || inputCommand === 'commands') {

		console.table(snipe)
		process.exit();

	}

	else {

		try {

			const command = snipe.find((com) => com.name == inputCommand || com.alias == inputCommand);

			logger.command(command.name, inputArguments)
			command.handler(inputArguments);

		} catch (err) {

			logger.invalid()
			process.exit()

		}

	}
};

start();

