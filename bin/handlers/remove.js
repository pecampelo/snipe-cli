function remove (inputArguments) {
	child_process.exec(`rm ${inputArguments}`);
}

module.exports = remove;
