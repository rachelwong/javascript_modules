// ******************** DOM = Document Object Model
// tree of objects in memory
// very similar to html
// internally they are just objects
// each element is represented by a javscript object
// every element represented by javascript object, we can manipulate them with javascript code
// any changes made to the objects, the browser will detect and automatically update the visible web page.

// use DOM to create a new object of type div
// this creates in memory (not part of the document )
// not added to the DOM or into the tree/page so the browser wont' display it
let newDiv = document.createElement("div")

// The white space between elements in html is ignored. you can put additional htmle elements here
// additional tags can be fitted in this assignment
// use backticks to do multiline html insertion
// any valid html can go in this assignment
newDiv.innerHTML = "<h2>Awesome div text</h2>"

// insert the element into the page

//initally it won't work because the script tag is before hte html body
//if you move the script tag to the bottom of the body tag then it will work.
document.body.appendChild(newDiv)

// another method to add items to the page
// doing this in the console, will completely rewrite the page in the browser
document.write("<p>Hello!</p>")

///***************** QUERYING AND MANIPULATING DOM ELEMENTS */
// pass in a selector in the exact same  syntax as you would use in css
// this gets only the first selector
let firstP = document.querySelector("p")
console.log(firstP)

// this finds all of the elements that matches p tag
// returns an array, node list, list of objects
// node list is an array of html elements (each element is referred as a node)
let allP = document.querySelectorAll("p")

// this grabs a form with the id of page-form
let form = document.querySelector("#page-form")
console.log(form)

// Search children of a specific element

let div = document.querySelector("div") // gets the first div in the document
let divPs = div.querySelectorAll("p") // grab all the paragraphs within that div
console.log(divPs)
console.log(divPs[0].innerHTML) // prints the content of the p tag returned
divPs[0].innerHTML = "<strong>I am changing the P tag </strong>" // changes the p tag directly in the first div

// Remove from the DOM
let ul = document.querySelector("ul")
ul.querySelector("li:nth-child(3)").remove()
// ul.removeChild(li3)

// Change the style of an element
ul.querySelector("li:nth-child(2)").style.color = "red"

// ************** Add/remove classes

// adds classes to the html element via javsacript
// all nodes has an element called classList
let title = document.querySelector("h1")
title.classList.add("blue") // no dot notation here in the classList
// no ID equivalent
title.classList.remove("blue") // removes the classList from an HTML element

title.classList.toggle("blue") // adds and removes (toggles) the class from the html element

// ************* Event Listeners
// Respond to user interaction (i.e. clicking a button)
// Listen fo the events that we are interested and execute some code in response

let myButton = document.querySelector("input[type=submit]") // selects the first input of the type submit (attribute selector in the square brackets)
// addEventListener requires two things: 1; which event we are interested in (contxt sensitive and depends on the element itself) and 2. a callback function that will be called when that even happens
myButton.addEventListener("click", event => {
	event.preventDefault() // tells the browser to ignore the default behaviour (refreshing the page)
	// console.log(event)
	console.log(event.target)
	event.target.value = "Hello"
	// the target in the console tells you which element that cause this event to happen
	console.log(event.target.dataset.id) // retrieve the data attribute from the element
	event.target.value = event.target.value == "Click Me" ? "Hello" : "Click Me"
})

// Remove an event listener
// myButton.removeEventListener("click")

myButton.addEventListener("mouseover", event => {
	event.target.style.backgroundColor = "red"
})
myButton.addEventListener("mouseout", event => {
	event.target.style.backgroundColor = "blue"
})
