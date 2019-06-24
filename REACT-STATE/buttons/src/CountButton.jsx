import React, { Component } from "react"
import { string } from "postcss-selector-parser"

class CountButton extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: this.props.id,
			count: 0
		}

		//event handler for pressing button
		onClick = event => {
			this.setState(prevState => {
				count: prevState.count + 1
			})
		}
	}

	render() {
		return (
			<div>
				<button id={this.state.name} onChange={this.onClick} />
				<p>
					For Button #{this.state.name}, you have clicked it {this.state.count}.
				</p>
			</div>
		)
	}
}

export default CountButton
