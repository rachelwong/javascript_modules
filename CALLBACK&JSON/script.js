// CALLBACK FUNCTION
// let sayHello = name => {
// 	console.log(`Hello, ${name}`)
// }

// let textAFriend = (name, callback) => {
// 	console.log(`You called textAFriend`)
// 	callback(name)
// }

// textAFriend("John", sayHello)

function say(name, callback) {
	// simulate a long-running process
	// eg. fetch a remote URL

	setTimeout(() => {
		callback(name.toUpperCase())
	}, 3000) // delay for 3 secs
}

// Calling the same function passing John
say("John", name => {
	console.log("You are awesome, " + name + "!")
})

say("Groot", name => {
	alert(`I am ${name}!`)
})

console.log(`When will this happen?`) // return immediately before the say function because there is a time delay of 3000

// when using callback, assume asynchronous operation
// cannot assume a code has been executed and to do use its result
