const logger = require('./logger');
const http = require('http');
const child_process = require('child_process');
const path = require('path')
const fs = require('fs');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})



const stdcall = (error, stdout, stderr) => {
	if (error) {
			console.error(error.message)
			return;
	}
	if (stderr) {
			console.error(`stderr: ${stderr}`);
			return;
	}
	console.log(`\n${stdout}`)
}

const execute = (command, place = process.cwd()) => {
	child_process.exec(command, { cwd: place });
}



module.exports = [{
        "name": 'version',
        "alias": '-v',
        "description": 'declares the current package version',
        "handler": function version() {
            console.log('\nWelcome to Snipe! \nWe are currently on version 1.0!\n')
            process.exit();
        }
    },
    {
        "name": 'init',
        "alias": '-I',
        "description": 'Initiate a new template project',
        "handler": function init(arguments) {

					if (!arguments) {

						readline.question(`\nWhat will be the folder name? `, folderName => {

							readline.question(`\nShould there be a template? (Y/N) `, answer => {

								if (['n', 'N'].includes(answer) === true) {

									child_process.exec(`mkdir ${folderName} && cd ${folderName}`);
									console.log(`\nEmpty folder created at ${folderName}`);
									return readline.close();

								}

								if (['y', 'Y'].includes(answer) === true) {
									const go = path.join(process.cwd(), `./${folderName}`);
									execute(`mkdir ${folderName}`);
									execute(`cd ${folderName}`);
									execute(`npm init -y`, go);
									execute(`git init -y`, go);
									execute(`touch .editorconfig .gitignore README.md`, go);
									return readline.close();

								}

								else {

									console.log(`\nCan't do that`);
									return readline.close();

								}

							})


						});

					}

					else {
						arguments.forEach((argument) => {
							execute(`mkdir ${argument}`);
							const go = path.join(process.cwd(), `./${argument}`);
							execute(`cd ${argument}`);
							execute(`npm init -y`, go);
							execute(`git init -y`, go);
							execute(`touch .editorconfig .gitignore README.md`, go);
						})
					}


        }
    },
    {
        "name": 'config',
        "description": '',
        "handler": function config(argument1 = '', argument2 = '') {}
    },
    {
        "name": 'help',
        "description": 'Get command info',
        "handler": function help(argument1 = '') {
          console.log('\nCommands!\n');

          process.exit();
        }
    },
    {
        "name": 'logs',
        "description": '',
        "handler": function logs(argument1, argument2) {
            console.log('\nLogs!');
        }
    },
    {
        "name": 'install',
        "alias": 'i',
        "description": 'uninstalls any npm package (-D or -g optional)',
        "handler": function install(inputArguments) {

            let package = inputArguments[0],
                format = inputArguments[1],
                _format = '';


            const allowedArguments = ['-D', '-g']
            if (allowedArguments.includes(package) === true) {
                _format = package;
                package = format;
            }

            if (_format !== undefined && package === undefined) {

                return console.error('\n arguments to command are invalid: ' + inputArguments.join(' '))
            }

            let pack = package + ' ' + format;

            console.log(pack)
            try {

                child_process.exec(`npm install ${pack} `, stdcall())

            } catch (err) {
                console.log(err);
            }
        }
    },
    {
        "name": 'uninstall',
        "alias": 'u',
        "description": 'uninstalls any npm package (-D or -g optional)',
        "handler": function uninstall(inputArguments) {

            let package = inputArguments[0],
                format = inputArguments[1],
                _format = '';

            const allowedArguments = ['-D', '-g']
            if (allowedArguments.includes(package) === true) {
                _format = package;
                package = format;
            }

            if (_format !== undefined && package === undefined) {
                return console.error('\n arguments to command are invalid: ' + inputArguments.join(' '))
            }

            let pack = package + ' ' + _format;

            console.log(pack)
            try {

                child_process.exec(`npm uninstall ${pack} `, stdcall())

            } catch (err) {
                console.log(err);
            }
        }
    },
    {
        "name": 'ls',
        "description": 'Listing all items inside this client',
        "handler": function ls(folder, format) {

            let extraArguments = [folder, format]

            if (!["-lh, ''"].includes(folder) == false) {
                return console.error('\n arguments to command are invalid: ' + extraArguments.join(' '))
            }

            try {

                child_process.exec(`ls ${extraArguments.join(' ')} `, stdcall())

            } catch (err) {
                console.log(err);
            }
        }

    },
    {
        "name": 'run',
        "description": 'runs any js file',
        "handler": function run(inputArguments) {

					if (!inputArguments) return;

          child_process.exec(`node ${inputArguments}`)
        }
    },
		{
			"name": 'rm',
			"description": 'remove a file or a folder',
			"handler": function rm(inputArguments) {
				child_process.exec(`rm ${inputArguments}`);
			}
		},
    {
        "name": 'whoami',
        "alias": '?',
        "description": 'Get user data',
        "handler": function whoami() {

            console.log('\nWho am I')
        }
    },
    {
        "name": 'fetch',
        "alias": '-f',
        "description": 'Fetch HTML files from the web',
        "handler": function fetch(originalURL) {

            try {

                const url = new URL(originalURL);

                http.get(url, res => {
                    let data = [];
                    let me = '';

                    res.on('data', (chunk) => {
                        data.push(chunk);
                    });

                    // The whole response has been received. Print out the result.
                    res.on('end', async() => {
                        let me = Buffer.concat(data);
                        const folder = 'fetch';
                        const file = Math.floor(Math.random * 10000);
                        const fullPath = path.join(__dirname, '.../');

                        child_process.exec(`cd ${fullPath}`);
                        child_process.exec(`mkdir ${folder}`);
                        child_process.exec(`touch ${file}`)

                        fs.writeFileSync(path.join(`./${folder}/${file}.html`), me, 'utf8');

                    });
                }).on('error', (err) => {
                    console.log('\n' + err)
                })


            } catch (err) {

              logger.invalid(err);

            }
        }
    },
]
