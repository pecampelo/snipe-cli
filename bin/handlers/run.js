function run(inputArguments) {

	if (!inputArguments) return;

	child_process.exec(`node ${inputArguments}`)
}

module.exports = run;
