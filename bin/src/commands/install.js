"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function install(inputArguments) {
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
        (0, child_process_1.exec)(`npm install ${pack} `, (error, stdout, stderr) => {
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
exports.default = install;
