import http from "http";

export default function fetch(originalURL: string) {

	try {

		const url = new URL(originalURL);

		//TODO: add https functionality
		http.get(url, (res: any) => {
			let data: any = [];

			res.on('data', (chunk: any) => {
				data.push(chunk);
			});

			// The whole response has been received. Print out the result.
			res.on('end', async () => {

				let concat: any = Buffer.concat(data);
				let me = await JSON.parse(concat);
				console.log(me)

			});
		}).on('error', (err: any) => {
			console.log('\n' + err)
		})

	}	catch (err) {

		console.log('\n            ' + err + '\n')

	}
}
