// Initialise an instance of VUE
const app = new Vue({
	el: "#app", // required field: "selector of the container. this is the element that we want to attach our vue instance to"
	data: {
		message: "Hello Vue!", // this is the {{ message }} in the index.html. You can access this in the console as app.message. You can change this message in the console as well. Therefore, it is considered to reactive framework.
		title: "Greeting message",
		seen: true,
		todos: [
			{
				text: "Learn Javascript",
				done: true
			},
			{
				text: "Learn Vue",
				done: false
			},
			{
				text: "Learn Typscript",
				done: false
			}
		]
	},
	methods: {
		// can't use fat arrow hear because scoping difference
		// fat arrow has block scope. a function has method or class scope.
		// if we use function keyword, then its' scope will include the data.
		// if we use the =>, then the scope is only within the methods attribute.
		reverseMessage: function() {
			this.message = this.message
				.split("")
				.reverse()
				.join("")
		}
	}
})

// CHANGING THE VALUES
// app.seen = false // hides the <p> tag
// app.message = "hello you" // change what is inside the <h1> tag
// app.title = "miaow miaow" // change the title attribute of the <h1> tag
// app.todos.push({text: "Learn React", done: false}) // add another list item to the todo list ol
