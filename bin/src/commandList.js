"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandList = void 0;
// Native node modules
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./commands/config"));
const help_1 = __importDefault(require("./commands/help"));
const install_1 = __importDefault(require("./commands/install"));
const uninstall_1 = __importDefault(require("./commands/uninstall"));
const logs_1 = __importDefault(require("./commands/logs"));
const ls_1 = __importDefault(require("./commands/ls"));
const test_1 = __importDefault(require("./commands/test"));
const whoami_1 = __importDefault(require("./commands/whoami"));
const fetch_1 = __importDefault(require("./commands/fetch"));
function requireCommand(commandName) {
    let match = require(path_1.default.join(__dirname + '/commands/' + commandName));
    if (match)
        return (match) => {
            match();
        };
}
exports.commandList = [
    {
        "name": 'version',
        "alias": '-v',
        "description": 'declares the current package version',
        "handler": requireCommand('version'),
    },
    {
        "name": 'init',
        "description": '',
        "handler": function go() {
            requireCommand(this.name);
        },
    },
    {
        "name": '--config',
        "description": '',
        "handler": config_1.default,
    },
    {
        "name": '--help',
        "description": '',
        "handler": help_1.default,
    },
    {
        "name": '--logs',
        "description": '',
        "handler": logs_1.default,
    },
    {
        "name": 'install',
        "alias": 'i',
        "description": '',
        "handler": install_1.default,
    },
    {
        "name": 'uninstall',
        "description": '',
        "handler": uninstall_1.default,
    },
    {
        "name": 'ls',
        "description": 'Listing all items inside this client',
        "handler": ls_1.default,
    },
    {
        "name": 'test',
        "alias": '-t',
        "description": '',
        "handler": test_1.default,
    },
    {
        "name": 'whoami',
        "alias": '?',
        "description": '',
        "handler": whoami_1.default,
    },
    {
        "name": 'fetch',
        "alias": '-f',
        "description": '',
        "handler": fetch_1.default,
    },
];
