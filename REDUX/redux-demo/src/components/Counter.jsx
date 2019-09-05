import React, { Component } from "react"
import { connect } from "react-redux"

function mapStateToProps(state) {
	return {
		// the props
		// see combineReducer function
		count: state.counterState.count
	}
}

class Counter extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		count: 0
	// 	}
	// }

	// state might change due to some other function elsewhere in the application, therefore the below will not work
	// count: this.state.count + 1
	// to counter this, we pass in the state in the this.setState function to freeze the state at that point in time (we are working with a snapshot of the state at a point in time)
	increment = event => {
		// Change Redux state
		// dispatch the action increment
		this.props.dispatch({ type: "INCREMENT", amount: 3 })

		// previous version
		// this.setState(prevstate => ({
		// 	count: prevstate.count + 1
		// }))
	}

	decrement = event => {
		// Change Redux state
		// dispatch ths action decrement
		this.props.dispatch({ type: "DECREMENT", amount: 2 })

		// previous version
		// this.setState(prevstate => ({
		// 	count: prevstate.count - 1
		// }))
	}

	render() {
		return (
			<div>
				<h2>Counter Hello</h2>
				<div>
					<button onClick={this.decrement}>-</button>
					<span>{this.props.count}</span>
					<button onClick={this.increment}>+ </button>
				</div>
			</div>
		)
	}
}

// Convention: export default connect(function to access the state to map it)(component to wire up)
// redux will track changes and will call the functio mapStateToProps and will pass in the current state from the store (redux is doing this in the background)
// redux calls the mapStateToProps
// this statement is telling redux that mapStateToProps is the function i need you to call to update the props within the state (injected in by redux)
export default connect(mapStateToProps)(Counter)
