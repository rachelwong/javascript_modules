import React, { Fragment } from "react"
import "./App.css"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import NavigationBar from "./NavigationBar"
import AccountProfile from "./AccountProfile"

// original seed data
const account = {
	username: "Crunchy Crunch",
	dateJoined: "9/1/18",
	membershipLevel: "Silver"
}

const App = account => (
	<Router>
		<Fragment>
			<NavigationBar username={account.username} />
			<Switch>
				<Route exact path='/' render={() => <div>Home</div>} />
				<Route exact path='/account/profile' render={() => <AccountProfile account={account} />} />
			</Switch>
		</Fragment>
	</Router>
)
export default App
