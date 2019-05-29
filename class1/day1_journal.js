// Make a terminal script that will create a journal with a short-term memory. Weird, I know. Prompt a user for any content. What they did yesterday, what their favourite colour is, whatever. Store the user input in an array. Print out all entries in the array. Loop back and prompt the user for the next journal entry. The journal can only contain a maximum of 5 entries, but can loop forever.

var journal = []

while (true) {
	let new_entry = prompt("Please add an entry to the journal")
	journal.push(new_entry)
	journal.length > 4 && journal.shift()
	alert(`This is your journal right now ${journal}`)
}

// shortcuit logic example

// array object in javascript
// if length is greater than 5
// remove first element
// queue structure
