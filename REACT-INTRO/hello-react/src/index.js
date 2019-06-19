import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker" // renaming a variable as serviceWorker

// React.createElement('type of HTML element tag', {any html tag attributes that I want on the element like id, class}, 'content that goes between the opening and closing tag')
const element = React.createElement(
	"h1",
	{
		style: {
			color: "red"
		}
	},
	React.createElement(
		"ul",
		{},
		React.createElement("li", {}, "Item 1"),
		React.createElement("li", {}, "Item 2")
	)
)

// multiline JSX
// need to pass an  object with the  estyle atribute
// the css properties have to be in camelcase
const element3 = (
	<h1 style={{ color: "red", textDecoration: "underline" }}>
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
		</ul>
	</h1>
)

const element2 = React.createElement("h2", {}, "Goodbye")
const element2_2 = <h2>Goodbye</h2> // JSX version of element2

// // name of function must have first letter capitalised
// function Project() {
// 	// return the JSX that we want to render
// 	return <h3>My Projects</h3>
// }

// the line that kicks off the whoel react app
// the actual app is in app.js
// make an instance of the App component, render it into the 'root' element on the page
// ReactDOM.render( < App / > , document.getElementById('root'));

// Tells react to render the const element on the page
// the title attribute is arbitrary. it can be foo='My awesome project'
// you can have many attributes to pass in
ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
