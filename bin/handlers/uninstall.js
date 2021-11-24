function uninstall(inputArguments) {

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

			child_process.exec(`npm uninstall ${pack} `, childProcessCallback())

	} catch (err) {
			console.log(err);
	}

}

module.exports = uninstall;
