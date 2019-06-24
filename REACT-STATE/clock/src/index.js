import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import Clock from "./Clock"
import Toggle from "./Toggle"

// this will be called every second
// toLocaleDateString and toLocaleTimeString are both common
function tick() {}
// Starting version
// const element = (
// 	<div>
// 		<h1>Hello World</h1>
// 		<h2>It is {new Date().toLocaleTimeString()}.</h2>
// 	</div>
// )
// this calls ReactDom render every second
// re-render this function every second
// ReactDOM.render(element, document.getElementById("root"))
// ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"))

ReactDOM.render(<Clock />, document.getElementById("root"))
ReactDOM.render(<Toggle />, document.getElementById("root"))

// want tick function to happen every second
// setTimeout won't do somethign until a certain amount of time has passed
// setInterval(tick, 1000)

serviceWorker.unregister()
