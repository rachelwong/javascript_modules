// SETTING UP A TODO LIST THAT UPDATES THE PAGE
// Grab the elements from the page
const form = document.querySelector("form")
const button = document.querySelector("button")
const ul = document.querySelector("ul")
const input = document.querySelector("input")

// CREATE A NEW LI for everytime text is inputted into the field
// const name = argument => {operations of the function}
// assign constant with a callback, the operation of which is assigned to a constant
const liMaker = inputText => {
	// 30/5/2019 - added comments and attempts to create a cancel button from a later file
	const li = document.createElement("li") //create an li element
	// const li = document.createElement(`${li} <a href="#">(x)</a>) // create an li element with a cancel button
	li.textContent = inputText // assign the text input to the li element
	ul.appendChild(li) // add the li element within the ul
}

// FORM LISTENER TO ADD THINGS TO THE PAGE
form.addEventListener("submit", event => {
	event.preventDefault() //stops the form from sending submit by default and wait for us to do that
	liMaker(input.value) //tells liMaker function to handle all the adding li to the page
	input.value = "" // reset the form so that it's blank again for the next input value
})
