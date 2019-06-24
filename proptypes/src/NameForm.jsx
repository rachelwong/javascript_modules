import React, { Component } from "react"

export default class NameForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: "",
			language: "en" // default value is english for the option
		}
	}

	// this makes the function reusable as long as the input target.name matches one of the state variables
	// event listening method for input field name (test it in the react console)
	handleChange = event => {
		// if (!isNaN(event.target.value)) {
		this.setState({
			// this enables you to pick up on any value with whatever the name of the input
			// [event.target.name]: event.target.value
			value: event.target.value // set the value to whatever that has changed/inputted in the field
		})
		// } else {
		// 	console.log("Only allows number input")
		// }
	}

	// event listening method for submit button for the form
	handleSubmit = event => {
		event.preventDefault()
		alert("A name was submitted: " + this.state.value)
	}

	// event listener methods for changing the options in the drop down list
	changeLanguage = event => {
		this.setState({
			language: event.target.value
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type='text' value={this.state.value} onChange={this.handleChange} />
					</label>
					<select value={this.state.language} onChange={this.changeLanguage}>
						<option value='en'>English</option>
						<option value='de'>German</option>
						<option value='es'>Spanish</option>
						<option value='fr'>French</option>
					</select>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}
