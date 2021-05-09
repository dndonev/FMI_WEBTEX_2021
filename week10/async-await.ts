const myPromise = new Promise((res, rej) => {
	const number: number = 5;
	res(number);
})

const myNextPromise = new Promise((res, rej) => {
	const number: number = 6;
	res(number);
})

let myNumber: number;

myPromise
	.then((value: number) => {
		//
		myNumber = value;
		return myNextPromise;
	})
	.then((nextValue: number) => {
		console.log()
	})
	.catch((err) => console.error(err))

console.log(myNumber); // undefined

async function expectSomeValue(arg: number) {
	try {
		const expectedNumber = await myPromise;
		const nextExpectedValue = await myNextPromise;
	} catch (err) {
		console.error(err)
	}
}


