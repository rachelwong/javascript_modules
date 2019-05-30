// **** ASYNC **** //

let img = document.querySelector("img")

function loaded() {
	console.log("yay! image loaded!")
}
img1.ready().then(() => {
	//loaded
})

setTimeout(() => {
	console.log("timeout")

	// if image is already loaded, call the function,
	// otherwise add the event listener
	if (img.complete) {
		loaded()
	} else {
		img.addEventListener("load", () => {
			loaded()
		})
	}

	img.addEventListener("error", () => {
		console.log("Failed to loaded!")
	})
}, 2000)

// // enforce a specific sequence of actions if certain functions have setTimeouts that may lead to actions being completed asynchronously
doSomething(result => {
	doSomethingElse(result, secondResult => {
		doThirdThing(secondResult, finalResult => {
			console.log(finalResult)
		})
	})
})

function doSomething() {
	// return 1 + 1
	callback(1 + 1) // calling the callback and passing the result
}

function doSomethingElse(result, callback) {
	callback(result * 2)
}

function doThirdThing(result, callback) {
	callback(result ** 3)
}

// // result is passed down along
doSomething()
	.then(doSomethingElse(result))
	.then(ThirdThing(result))
	.then(() => {
		console.log(result)
	})

// *** PROMISES
// returns a promise
// then wait for promise to resolve an then execute this callback
// when executes, data/result from promise will be pass into the first parameter, response

// once promise is executed, returns a json stream
let x = fetch("https://randomuser.me/api")
	.then(response => {
		// console.log(response.text()) // returns a stream
		//once that promise has been resolved,
		console.log(response.json()) // returns another promise
	})
	.then(obj => {
		console.log(obj)
	})

// promise is the middleman for containing the future asynchronous process up until a certain point in time

// state = pending, waiting for async promise to finish
// state = fulfilled, resolved, the async has finished
// state = failed, rejected
// .text is for romises ing eneral
// promise data stored in a stream (read contents into memory)
// call anotherfunction to process that stream as though it is a file and open it and get the contents

// resolve and reject are themselves callbacks
//create a new promise, callback with two resolve, reject objects
let myPromise = new Promise((resolve, reject) => {
	// do a thing, async

	// if everything worked,
	if (false) {
		// call resolve function
		resolve("Stuff worked") // callback to tell the promise that we're finished and we're successful
	} else {
		reject(Error("Stuff didn't work"))
	}
})

// when promise is resolved, then print out the result
myPromise
	// triggers when resolve happens
	// res what is inside the promise
	.then(res => {
		console.log(res)
	})
	//triggers when reject happens
	.catch(function(err) {
		console.log(err)
	})

// *** NAVIGATOR *** //
// navigator.mediaDevices.enumerateDevices() // returns a promises
// navigator.mediaDevices.enumerateDevices().then(res => console.log(res)) // array of input devices and medai devices

// wraping it in promise makes it asynchronous
// Getimage Example
function getImage(url) {
	return new Promise((resolve, reject) => {
		let img = new Image()
		img.src = url + "?rand=" + Math.random * 9999999
		img.onload = () => {
			resolve(img)
		}
		img.onerror = () => {
			reject(url)
		}
	})
}

var images = [] // an array of promise objects
// looping is synchronous
for (let i = 0; i < 20; i++) {
	let width = 50 + Math.floor(Math.random() * 100)
	let height = 50 + Math.floor(Math.random() * 100)

	// getting the image is asynchronous
	images.push(
		getImage(`http://placekitten.com/${width}/${height}`)

		// .then((img) => {
		// 	console.log(`Hello i am here ${img}`)
		// 	document.body.appendChild(img)
		// 	console.log(`loaded image #${i}`) //demonstrates the asynchronous loading of the image
		// })
	)
}

// wait until all the images/promises have been resolved, then do something

// imgarray the images array
Promise.all(images).then(imgarray => {
	// loop through the image array
	for (let img of imgarray) {
		console.log(img)
		// add the image to the document browser
		document.body.appendChild(img)
	}
})
