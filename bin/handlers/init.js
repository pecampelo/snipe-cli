const readline = require('./helpers/mainReadline');
const path = require('path');
const child_process = require('child_process');
const { execute, childProcessCallback } = require('./helpers/defaultFunctions');

function init(arguments) {

	if (!arguments[0]) {

		readline.question(`\nWhat will be the folder name? `, folderName => {

			readline.question(`\nShould there be a template? (Y/N) `, answer => {

				if (['n', 'N'].includes(answer) === true) {

					child_process.exec(`mkdir ${folderName} && cd ${folderName}`, childProcessCallback);
					console.log(`\nEmpty folder created at ${folderName}`);
					return readline.close();

				}

				if (['y', 'Y'].includes(answer) === true) {
					const go = path.join(process.cwd(), `./${folderName}`);
					console.log(go);
					execute(`mkdir ${folderName}`);
					execute(`cd ${folderName}`);
					execute(`npm init -y`, go);
					execute(`git init -q`, go);
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
			execute(`git init -q`, go);
			execute(`touch .editorconfig .gitignore README.md`, go);
			return;
		});

	}
}

module.exports = init;
