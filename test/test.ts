import assert from 'assert'
import snipe from './cli';

const cli = snipe();

describe('Snipe CLI', () => {
	it('should return Hello World', () => {
		const expected = 'Hello World!';
		const actual = cli.start()
		assert.equal(actual, expected);
	})
})
