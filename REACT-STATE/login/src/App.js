import React, { Component } from "react"
import "./App.css"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: "guest",
			count: 0,
			times: []
		}
	}

	// once you login successfully (or click the button), the user is set to admin
	login = props => {
		let timeArray = this.state.times
		let timestamp = new Date.now()

		this.setState(prevState => {
			return {
				user: "admin",
				count: prevState.count + 1,
				times: timeArray.push(timestamp)
			}
		})
		console.log(this.state.count)
		console.log(this.state.times)
	}

	render() {
		return (
			<div className='App'>
				<p>Hello, {this.state.user}</p>
				<p>You have logged in {this.state.count} times.</p>
				<button onClick={this.login.bind(this)}>Log in</button>
				<p>You have pressed the button at the below times</p>
				{this.state.times.map(time => (
					<h4>{Intl.DateTimeFormat("en-GB").format(time)}</h4>
				))}
			</div>
		)
	}
}

export default App
