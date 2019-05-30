// Todo List challenge for class 3

// set the variable for the button element
let myButton = document.querySelector("input[type=submit]")

// create variable for whatever is created in the text box field
let myTextBox = document.querySelector("input[type=text]")

// create a variable for every list item 
var listItem = document.querySelector("li")

// for every item that is created in the list, create a span item to delete the item
for (var i = 0; i < listItem.count; i++) {
	var span = document.createElement("span")

	// expand here
	// inside the span should include the x item
	// set the span to destroy the list item 

}

myButton.addEventListener("click", event => {
	event.preventDefault()

	// creates a new list item eleemnt
	var newLi = document.createElement("li")
	// grab whatever that is inputted in the form 
	var inputValue = document.getElementById("form_text").value

	// counter for list item to count the length of the list
	var count = 0

	// set the task_count element with a variable
	var taskCount = document.getElementById("task_count")

	// if the input is empty 
	if (inputValue == "") {

		// asks for input
		alert("Please write something")

		// otherwise display the input list
	} else {

		// create a new element within the todoList element
		document.getElementById("todoList").appendChild(newLi)

		// set the value inside the li value to whatever that was inputted
		newLi.innerHTML = inputValue

		// refresh the input value in the text field
		inputValue = ""

		count += 1
	}
})