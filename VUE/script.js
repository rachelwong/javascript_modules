// Need to declare the component before you initialise an instance of vue

// EXTENDING VUE 
// Unlike MVC, component is to integrate them together into one self-contained component.
// this creates a new html tag that you can use in the html files
// component needs to be considerd as a self contianed entity in terms of scope.
// in order to accept properties (props) you must delcare what those properties are  
// if ID is newly creatd in the todos, we need to explicityly tell the component. we do this in the html by adding v-bind:key="item.id" in the <todo-item> tag

Vue.component('todo-item', {
	props: ['todo'],
	template: "<li v-bind:class=\"todo.done ? 'red' : 'green'\">{{ todo.text }}</li>",
	// template: '<li>{{ todo.text }}}</li>',
})


// Initialise an instance of VUE
const app = new Vue({
	el: "#app", // required field: "selector of the container. this is the element that we want to attach our vue instance to"
	data: {
		message: "Hello Vue!", // this is the {{ message }} in the index.html. You can access this in the console as app.message. You can change this message in the console as well. Therefore, it is considered to reactive framework.
		title: "Greeting message",
		seen: true,
		todos: [{
				id: 1,
				text: "Learn Javascript",
				done: true
			},
			{
				id: 2,
				text: "Learn Vue",
				done: false
			},
			{
				id: 3,
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
		reverseMessage: function () {
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
// app.todos.push({
// 	text: "Learn React",
// 	done: true
// }) // add another list item to the todo list ol