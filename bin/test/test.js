"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const cli_1 = __importDefault(require("./cli"));
const cli = (0, cli_1.default)();
describe('Snipe CLI', () => {
    it('should return Hello World', () => {
        const expected = 'Hello World!';
        const actual = cli.start();
        assert_1.default.equal(actual, expected);
    });
});
