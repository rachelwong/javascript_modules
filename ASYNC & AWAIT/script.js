function timeout(ms) {
	// when timer timesout, resolve htis promise
	return new Promise(resolve => setTimeout(resolve, ms))
}

async function doubleAfter2Seconds(x) {
	// set up a promise with 2 second timeout and wait for it to resolve before continuing
	await timeout(2000) // returns a proise, resolves after 2 seconds
	return x * 2
}

// //x is a number
// function doubleAfter2Seconds(x) {
// 	// promises generally passes in two parameters resolve and reject.
// 	// reject is optional
// 	// resolve here is not a reserved javascript key word but just an arbitrary name for the argument
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			// some operation can go here
// 			resolve(x * 2) // this fires after 2 seconds
// 		}, 2000)
// 	})
// }

//can't set setTimeout to async/await

// doubleAfter2Seconds(10).then(r => {
// 	console.log(r)
// })

// // chain of promises
// function addPromise(x) {
// 	return new Promise(resolve => {
// 		doubleAfter2Seconds(10).then(a => {
// 			doubleAfter2Seconds(20).then(b => {
// 				doubleAfter2Seconds(30).then(c => {
// 					resolve(x + a + b + c)
// 				})
// 			})
// 		})
// 	})
// }

// addPromise(10).then(sum => {
// 	console.log(sum)
// })

// // at the point of assignment the value is undefinied, you are waiting for the calculation but the assignment has already happened
// let sum = doubleAfter2Seconds(10) + doubleAfter2Seconds(20) + doubleAfter2Seconds(30)
// console.log(sum)

async function addAsync(x) {
	// await tells it to wait for the promise to resolve before you assign it
	// otherwise it will return object promise
	let a = await doubleAfter2Seconds(10)
	console.log("a:", a)
	let b = await doubleAfter2Seconds(20)
	console.log("b:", b)
	let c = await doubleAfter2Seconds(30)
	console.log("c:", c)
	return x + a + b + c // this is the equivalent of a resolve
}

// to reject, throw an exception

addAsync(10).then(sum => {
	console.log(sum)
})
