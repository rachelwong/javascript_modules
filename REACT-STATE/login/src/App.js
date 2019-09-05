import React, { Component } from "react"
import "./App.css"
import Event from "./Event"

class App extends Component {
	constructor(props) {
		super(props)
		this.nextId = 1
		this.state = {
			user: "guest",
			count: 0,
			events: [],
			loggedIn: false,
			totalLogins: 0
		}
	}

	// once you login successfully (or click the button), the user is set to admin
	login = props => {
		// set an event (button click) regardless whether it is logged in or logged out
		const event = {
			id: this.nextId++,
			timestamp: new Date(),
			action: this.state.loggedIn ? "logout" : "login"
		}
		// let timeArray = this.state.times
		// let timestamp = new Date.now()

		// spread operator duplicates the array
		const newEvents = [...this.state.events] // this just makes a reference, doens't make a copy of the array
		newEvents.push(event)

		if (this.state.loggedIn) {
			this.setState({
				user: "guest",
				loggedIn: false,
				events: newEvents
			})
		} else {
			// passing in a snapshot of the state. so it needs to be encapsulated in brackets
			// best practice for relying the status of a current state
			this.setState(state => ({
				user: "admin",
				loggedIn: true,
				totalLogins: state.totalLogins + 1,
				events: newEvents
			}))
		}
		// this.setState(prevState => {
		// 	return {
		// 		user: "admin",
		// 		count: prevState.count + 1,
		// 		times: timeArray.push(timestamp),
		// 		loggedIn: true
		// 	}
		// })
		// console.log(this.state.count)
		// console.log(this.state.times)
	}
	// keep data separate from the presentation of that data
	render() {
		return (
			<div className='App'>
				<p>Hello, {this.state.user}</p>
				<p>You have logged in {this.state.totalLogins} times.</p>
				<button onClick={this.login.bind(this)}>Log {this.state.loggedIn ? "out" : "in"}</button>
				<p>You have pressed the button at the below times</p>
				<p>
					passing in a whole object here will require passing in the structure of the object as well
				</p>
				{this.state.events.map(e => (
					<Event action={e.action} timestamp={e.timestamp} id={e.id} />
				))}

				{/* {this.state.events.map(e => (
					<p key={this.state.nextId}>
						{e.action} at {e.timestamp.toLocaleString()}
					</p>
					// <h4>{Intl.DateTimeFormat("en-GB").format(time)}</h4>
				))} */}
			</div>
		)
	}
}

export default App
