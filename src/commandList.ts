// Native node modules
import path from 'path';
import child_process from 'child_process';


// Interfaces for type-checking
import { Command } from "./commandList.d";


// Custom modules
import logger from './logger';
import config from './commands/config';
import help from './commands/help';
import install from './commands/install';
import uninstall from './commands/uninstall';
import logs from './commands/logs';
import ls from './commands/ls';
import test from './commands/test';
import whoami from './commands/whoami';
import fetch from './commands/fetch';

function requireCommand(commandName: string): any {
	let match = require(path.join(__dirname + '/commands/' + commandName));
	if (match) return (match: any) => {
		match();
	}
}

export const commandList: Command[] = [
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
		"handler": config,
	},
	{
		"name": '--help',
		"description": '',
		"handler": help,
	},
	{
		"name": '--logs',
		"description": '',
		"handler": logs,
	},
	{
		"name": 'install',
		"alias": 'i',
		"description": '',
		"handler": install,
	},
	{
		"name": 'uninstall',
		"description": '',
		"handler": uninstall,
	},
	{
		"name": 'ls',
		"description": 'Listing all items inside this client',
		"handler": ls,
	},
	{
		"name": 'test',
		"alias": '-t',
		"description": '',
		"handler": test,
	},
	{
		"name": 'whoami',
		"alias": '?',
		"description": '',
		"handler": whoami,
	},
	{
		"name": 'fetch',
		"alias": '-f',
		"description": '',
		"handler": fetch,
	},
]
