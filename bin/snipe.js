const version = require('./handlers/version');
const init = require('./handlers/init');
const config = require('./handlers/config');
const help = require('./handlers/help');
const logs = require('./handlers/logs');
const uninstall = require('./handlers/uninstall');
const install = require('./handlers/install');
const list = require('./handlers/list');
const run = require('./handlers/run');
const remove = require('./handlers/remove');
const fetch = require('./handlers/fetch');

module.exports = [
	{
			"name": 'version',
			"alias": '-v',
			"description": 'declares the current package version',
			"handler": version,
	},
	{
			"name": 'init',
			"alias": '-I',
			"description": 'Initiate a new template project',
			"handler": init,
	},
	{
			"name": 'config',
			"description": '',
			"handler": config,
	},
	{
			"name": 'help',
			"description": 'Get command info',
			"handler": help,
	},
	{
			"name": 'logs',
			"description": '',
			"handler": logs,
	},
	{
			"name": 'install',
			"alias": 'i',
			"description": 'uninstalls any npm package (-D or -g optional)',
			"handler":  install,
	},
	{
			"name": 'uninstall',
			"alias": 'u',
			"description": 'uninstalls any npm package (-D or -g optional)',
			"handler": uninstall,
	},
	{
			"name": 'ls',
			"description": 'Listing all items inside this client',
			"handler": list,
	},
	{
			"name": 'run',
			"description": 'runs any js file',
			"handler": run,
	},
	{
		"name": 'remove',
		"alias": 'rm',
		"description": 'remove a file or a folder',
		"handler": remove,
	},
	{
			"name": 'fetch',
			"alias": '-f',
			"description": 'Fetch HTML files from the web',
			"handler": fetch,
	},
]
