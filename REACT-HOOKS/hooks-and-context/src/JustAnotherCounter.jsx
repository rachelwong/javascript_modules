import React, { useState, useEffect } from "react"

// useEffect replaces all the lifecycle methods

// Functional component version for hooks
// just put props as parameter you might need it as you develop the application
// functioal component only has return, no render statement
// functional component does not have *this*, once you destructure in useState you can refer to the value and the methods to change the state
function JustAnotherCounter(props) {
	// local state that tracks the clicks (not the actual count total)
	const [clicks, setClicks] = useState(0)

	// accepts intiial state as single argument. It can be an object, array, value.
	// The destructuring of useState is [variable to GET the state, function to CHANGE the state]
	const updateCount = () => {
		setClicks(clicks + 1)
		props.updateTotal(props.id)
	}

	// this will be called after every lifecycle method is called
	// Similar to componentDidUpdate & componentDidMount in a class function
	useEffect(() => {
		console.log(`You clicked button #${props.id} ${clicks} times`)
		// document.title = `You clicked ${props.id} ${clicks} times`
		return () => {
			// effectively componentWillUnmount()
			console.log("was unmounted.") ///////******* */
		}
	}, [props.id, clicks]) // this useEffect will only happen when clicks changes, so not all counter is logged in the console. This array holds state variables that should trigger the particular useEffect

	// this is similar to componentDidMount
	useEffect(() => {
		console.log("Counter mounted")
	}, []) // the empty array makes sure it is called only on the first render

	return (
		<div>
			<h1>{props.count}</h1>
			<button onClick={updateCount}>Double Count</button>
		</div>
	)
}

export default JustAnotherCounter

// Earlier Class Component
// export default class JustAnotherCounter extends Component {
// 	state = {
// 		count: 1
// 	}

// 	// round brackets is the shorthand for using the return statement
// 	// the count needs to be in curly braces for the state object
// 	setCount = event => {
// 		this.setState(prevState => ({ count: prevState.count * 2 }))
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>{this.state.count}</h1>
// 				<button onClick={this.setCount}>Double Count</button>
// 			</div>
// 		)
// 	}
// }
