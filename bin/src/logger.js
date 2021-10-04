"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const snipe = require('./commandList');
class Logger {
    intro() {
        console.log('\n------------------------------------------------------------------------');
        console.log('\n     Welcome to Snipe CLI!     \n       Precise and sharp!    \n');
        console.log('------------------------------------------------------------------------\n');
    }
    logCommand([input, inputArguments]) {
        console.log(input);
        console.log(inputArguments);
    }
    logCommandList() {
        let list;
        async function getList() {
            await snipe.forEach((command) => {
                let description = command.description !== '' ? command.description : undefined;
                list.push({ 'name': command.name, 'description': description });
            });
            console.log(list);
        }
    }
    invalidCommand(extraMessage) {
        console.log('\nCommand invalid! ');
        if (extraMessage != undefined) {
            console.log(`\n\n${extraMessage} `);
        }
        console.log('\nPlease, use one of these commands:\n');
        console.log(`${snipe.map((command) => command.name).join(', \n')}`);
    }
}
exports.default = new Logger();
