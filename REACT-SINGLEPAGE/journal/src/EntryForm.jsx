import React, { Component } from "react"

export default class EntryForm extends Component {
	state = {
		entry: ""
		// entries: [] // lifting the state
	}

	handleChange = event => {
		event.preventDefault()
		this.setState({
			entry: event.target.value
		})
	}

	saveEntry = event => {
		event.preventDefault()
		this.props.addEntry(this.props.categoryId, this.state.entry)
		this.props.history.push("/")
		// const newEntries = [...this.props.entries]
		// newEntries.push({ categoryId: this.props.categoryId, entry: this.state.entry })
		// this.setState({
		// 	entries: newEntries
		// })
	}

	render() {
		return (
			<div>
				<form onSubmit={this.saveEntry}>
					<textarea
						value={this.state.entry}
						onChange={this.handleChange}
						name=''
						id=''
						cols='30'
						rows='10'
					/>
					<button onChange={this.onSubmit}>Create Entry</button>
				</form>
			</div>
		)
	}
}
