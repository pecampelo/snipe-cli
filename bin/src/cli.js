#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commandList_1 = require("./commandList");
const logger_1 = __importDefault(require("./logger"));
function Snipe() {
    return {
        start: () => {
            let input = process.argv.slice(2).filter(e => e);
            let inputCommand = input[0];
            let inputArguments = input.slice(1);
            let fullInput = [inputCommand, inputArguments];
            if (!inputCommand) {
                const commandGotten = commandList_1.commandList.find(command => command.name == '--help');
                logger_1.default.logCommand(fullInput);
                commandGotten.handler();
                logger_1.default.logCommandList();
            }
            else {
                try {
                    const commandGotten = commandList_1.commandList.find((com) => com.name == inputCommand || com.alias == inputCommand);
                    logger_1.default.logCommand(fullInput);
                    commandGotten.handler(inputArguments);
                    // Add code her
                }
                catch (err) {
                    logger_1.default.invalidCommand();
                    console.log(err);
                }
            }
        }
    };
}
exports.default = Snipe;
