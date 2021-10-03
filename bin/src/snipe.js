"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snipe = void 0;
// const logger = require('./logger');
const http = require('http');
const child_process = require('child_process');
exports.snipe = [
    {
        "name": 'version',
        "alias": '-v',
        "description": 'declares the current package version',
        "handler": function version() {
            console.log('\nWelcome to Snipe! \nWe are currently on version 1.0!\n');
        }
    },
    {
        "name": 'init',
        "description": '',
        "handler": function init(argument1) {
        }
    },
    {
        "name": '--config',
        "description": '',
        "handler": function config(argument1 = '', argument2 = '') { }
    },
    {
        "name": '--help',
        "description": '',
        "handler": function help(argument1 = '', argument2 = '', argument3 = '') {
            console.log('\nCommands!');
        }
    },
    {
        "name": '--logs',
        "description": '',
        "handler": function logs(argument1, argument2) {
            console.log('\nlogs!');
        }
    },
    {
        "name": 'install',
        "alias": 'i',
        "description": '',
        "handler": function install(inputArguments) {
            let packed = inputArguments[0], format = inputArguments[1], _format = '';
            const allowedArguments = ['-D', '-g'];
            if (allowedArguments.includes(packed) === true) {
                _format = packed;
                packed = format;
            }
            if (_format !== undefined && packed === undefined) {
                return console.error('\n arguments to command are invalid: ' + inputArguments.join(' '));
            }
            let pack = packed + ' ' + _format;
            console.log(pack);
            try {
                child_process.exec(`npm install ${pack} `, (error, stdout, stderr) => {
                    if (error) {
                        console.error(error.message);
                        return;
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`${stdout}`);
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    {
        "name": 'uninstall',
        "description": '',
        "handler": function uninstall(inputArguments) {
            let packed = inputArguments[0], format = inputArguments[1], _format = '';
            const allowedArguments = ['-D', '-g'];
            if (allowedArguments.includes(packed) === true) {
                _format = packed;
                packed = format;
            }
            if (_format !== undefined && packed === undefined) {
                return console.error('\n arguments to command are invalid: ' + inputArguments.join(' '));
            }
            let pack = packed + ' ' + _format;
            console.log(pack);
            try {
                child_process.exec(`npm uninstall ${pack} `, (error, stdout, stderr) => {
                    if (error) {
                        console.error(error.message);
                        return;
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`${stdout}`);
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    {
        "name": 'ls',
        "description": 'Listing all items inside this client',
        "handler": function ls(folder, format) {
            let extraArguments = [folder, format];
            if (!["-lh, ''"].includes(folder) == false) {
                return console.error('\n arguments to command are invalid: ' + extraArguments.join(' '));
            }
            try {
                child_process.exec(`ls ${extraArguments.join(' ')} `, (error, stdout, stderr) => {
                    if (error) {
                        console.error(error.message);
                        return;
                    }
                    if (stderr) {
                        console.error(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`\n${stdout}`);
                });
            }
            catch (err) {
                console.log(err);
            }
        }
    },
    {
        "name": 'run',
        "description": '',
        "handler": function start() {
            console.log('\nstart');
        }
    },
    {
        "name": 'test',
        "alias": '-t',
        "description": '',
        "handler": function test() {
            console.log('\ntest');
        }
    },
    {
        "name": 'whoami',
        "alias": '?',
        "description": '',
        "handler": function whoami() {
            console.log('\nWho am I');
        }
    },
    {
        "name": 'fetch',
        "alias": '-f',
        "description": '',
        "handler": function fetch(originalURL) {
            try {
                const url = new URL(originalURL);
                http.get(url, (res) => {
                    let data = [];
                    res.on('data', (chunk) => {
                        data.push(chunk);
                    });
                    // The whole response has been received. Print out the result.
                    res.on('end', async () => {
                        let concat = Buffer.concat(data);
                        let me = await JSON.parse(concat);
                        console.log(me);
                    });
                }).on('error', (err) => {
                    console.log('\n' + err);
                });
            }
            catch (err) {
                console.log('\n            ' + err + '\n');
            }
        }
    },
];
