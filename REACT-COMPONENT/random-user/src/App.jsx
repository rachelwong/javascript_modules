import React, { Component } from "react"
import "./App.css"
import axios from "axios"
import Users from "./Users"
import { string } from "postcss-selector-parser"

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			users: [],
			loading: false
		}
	}

	// Make HTTP request when mounting the component on DOM
	async componentDidMount() {
		this.setState({ loading: true }) // yes it is loading
		const response = await axios.get("https://randomuser.me/api/?results=5")
		this.setState({ users: response.data, loading: false }) // not loading anymore with the data sent in
	}

	render() {
		return (
			<div className='App'>
				<Users loading={this.state.loading} users={this.state.users} />
			</div>
		)
	}
}

export default App
