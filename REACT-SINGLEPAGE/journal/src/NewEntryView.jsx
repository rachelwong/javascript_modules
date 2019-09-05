import React, { Component } from "react"
import { Link } from "react-router-dom"
import EntryForm from "./EntryForm"

// default constructor will accept props
// only need to define props when rolling your own
export default class NewEntryView extends Component {
	render() {
		// grab the id by matching it in the URL and returns it in params
		const categoryId = this.props.match.params.id
		const category = this.props.categories[categoryId]

		return (
			<div>
				<Link to='/category'>
					<button>Back to categories</button>
				</Link>
				<h1>New {category} entry</h1>
				<EntryForm
					{...this.props}
					addEntry={this.props.addEntry}
					// entries={this.props.entries}
					categoryId={categoryId}
				/>
			</div>
		)
	}
}
