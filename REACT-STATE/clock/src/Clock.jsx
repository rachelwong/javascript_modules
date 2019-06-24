import React from "react"

// with any ES6 class, need a method to return the HTMl from that method
// React expects that method to hvae a certain name --> render()
// class-based component rather than a functional-component
// when we are decidign whether a component should be a class/function, use a functional component if it is stateless (if it only needs props)
// if we need state or lifecycle methods, then we have to use class component

// we do this with class component because we want the clock to update itself and react picks up on the change and does the re-rendering for us
export default class Clock extends React.Component {
	// because extend React.Component, it will supply the props and is referred to as an instance member of *this*

	// if we are not putting anythign inside the cosntructor, it will call the default native constructor in React. so we put in place super(props)

	// when you create an instance of the component, calls the constructor, it calls the super sends it the props,

	// it will do an initial call to render, which refers back to the state and extract the value of date
	constructor(props) {
		//mounts it
		super(props)
		this.state = {
			date: new Date(),
			foo: "Bar!"
		}
	}

	tick() {
		// every second, you want to update the date the state
		// updating it will trigger the render
		// React doesn't know the state by reassigning it
		// this.state.date = new Date()

		// merging the state (merges the new object with the existing object)
		// it doesn't updates all properties, just the ones it refers
		// it only pushes the difference

		this.setState({
			date: new Date()
		})
	}

	//setting the interval
	// this is the last thing that runs and wait for updates
	componentDidMount() {
		//destroy the timer before it unmounts
		this.timerID = setInterval(() => this.tick(), 1000) // setInterval returns a unique ID that represent that timer
		// timerID is not going to affect render
		// react will re-render on change of state
	}

	// cleanup - destroy the timer when it is existing on DOM
	componentWillUnmount() {
		clearInterval(this.timerID) // intervals exist globally in the browser it could keep going if you do not destory it
	}

	render() {
		return (
			<div>
				<h1>Hello World {this.state.foo}</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}
