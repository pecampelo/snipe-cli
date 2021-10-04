"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function ls(folder, format) {
    let extraArguments = [folder, format];
    if (!["-lh, ''"].includes(folder) == false) {
        return console.error('\n arguments to command are invalid: ' + extraArguments.join(' '));
    }
    try {
        (0, child_process_1.exec)(`ls ${extraArguments.join(' ')} `, (error, stdout, stderr) => {
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
exports.default = ls;
