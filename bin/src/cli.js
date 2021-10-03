#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snipe_1 = require("./snipe");
const logger_1 = require("./logger");
const logger = new logger_1.Logger();
const start = () => {
    let input = process.argv.slice(2).filter(e => e);
    let inputCommand = input[0];
    let inputArguments = input.slice(1);
    let fullInput = [inputCommand, inputArguments];
    if (!inputCommand) {
        const commandGotten = snipe_1.snipe.find(command => command.name == '--help');
        logger.logCommand(fullInput);
        commandGotten.handler();
        logger.logCommandList();
    }
    else {
        try {
            const commandGotten = snipe_1.snipe.find((com) => com.name == inputCommand || com.alias == inputCommand);
            logger.logCommand(fullInput);
            commandGotten.handler(inputArguments);
            // Add code her
        }
        catch (err) {
            logger.invalidCommand();
            console.log(err);
        }
    }
};
start();
