#!/usr/bin/env node

const logger = require('./logger');
const snipe = require('./snipe')

const start = () => {

	let input = process.argv.slice(2).filter(e => e);

	const inputCommand = input[0];
	let inputArguments = input.slice(1, 3);

	// console.log(inputCommand)
	// console.log(inputArguments)

	if (!inputCommand) {
		const command = snipe.find(command => command.name == 'version');

		try {

			logger.command(command.name)
			command.handler()

		} catch (err) {
			console.log('\n            ' + err + '\n')
		}
	}

	else {

		const command = snipe.find((com) => com.name == inputCommand || com.alias == inputCommand);
		try {

			logger.command(command.name)
			command.handler(inputArguments)

		} catch (err) {

			console.log('\n            ' + err + '\n')

		}

	}
};

start();

