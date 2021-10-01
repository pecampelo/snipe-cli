#!/usr/bin/env node

const logger = require('./logger');
const snipe = require('./snipe')

const start = (input) => {

	input.toString().split(' ');

	if (input.length === 0) {
		return;
	}

	if (input.length > 2 ) {
		logger.invalid();
		return;
	}

	const commandList = Object.keys(snipe);
	let command = [];


	if (input[0].includes('-') === false) {

		const longCommand = commandList.filter((com) => com.toString() == input);
		if (longCommand !== undefined) { command.push(longCommand[0]); }
	}

	const shortCommand = commandList.filter((com) => com[0] == input[0][1]);
	if (shortCommand[0] !== undefined) {	command.push(shortCommand); }

	snipe[command[0]]()
	process.exit();

};

start(process.argv.slice(2));
