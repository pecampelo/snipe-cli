"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
function fetch(originalURL) {
    try {
        const url = new URL(originalURL);
        //TODO: add https functionality
        http_1.default.get(url, (res) => {
            let data = [];
            res.on('data', (chunk) => {
                data.push(chunk);
            });
            // The whole response has been received. Print out the result.
            res.on('end', async () => {
                let concat = Buffer.concat(data);
                let me = await JSON.parse(concat);
                console.log(me);
            });
        }).on('error', (err) => {
            console.log('\n' + err);
        });
    }
    catch (err) {
        console.log('\n            ' + err + '\n');
    }
}
exports.default = fetch;
