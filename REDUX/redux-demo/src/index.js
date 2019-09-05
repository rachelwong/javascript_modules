import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"
import Counter from "./components/Counter"
import {
	Provider
} from "react-redux"
import {
	createStore,
	combineReducers
} from "redux" // a function

// the reducer could be added with the methods
const initialState = {
	count: 42
}

function userReducer(state = {}, action) {
	// some other functions for the user
	return state
}

// have a reducer per component to declare the actions/methods of each component in each reducer (modularised)
// a mutator function that is used to mutate the state
// reducer can accept the current state and action
function counterReducer(state = initialState, action) {
	// if this function is empty, it will return undefined
	// redux expects the reducer to return a state
	// return {
	// 	// defining the shape of our state (static if reducer doesn't accept arguments)
	// 	count: 0
	// }

	// the reducer doesn't mutate the state.count
	switch (action.type) {
		case "INCREMENT":
			return {
				// amount is passed in through the dispatcher 
				count: state.count + state.amount
			}
			case "DECREMENT":
				return {
					// amount is passed in through the dispatcher 
					count: state.count - state.amount
				}
				default:
					// if neither of those cases (DECREMENT, INCREMENT) match, then it will automatically fall through to return state
					return state
	}
	// action names are capitalised and arbitrary
	// return state // MUST return a state (a change to the state (currentstate) or the existing state (initialstate))
}

const reducers = combineReducers({
	userState: userReducer,
	counterState: counterReducer
})

// give the createSTore the function that defines the initial state
const store = createStore(reducers)

ReactDOM.render( <
	Provider store = {
		store
	} >
	<
	Counter / >
	<
	/Provider>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()