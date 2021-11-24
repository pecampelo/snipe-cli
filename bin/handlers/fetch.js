function fetch(originalURL) {

	try {

			const url = new URL(originalURL);

			http.get(url, res => {
					let data = [];

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

module.exports = fetch;
