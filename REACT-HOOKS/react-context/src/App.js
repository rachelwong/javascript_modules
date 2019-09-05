import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Route } from "react-router-dom"
import AccountProvider from "./AccountProvider"
import NavBar from "./NavBar"
function App() {
	return (
		<div className='container'>
			<AccountProvider>
				<BrowserRouter>
					<NavBar username={account.username} />
					<Route exact path='/' render={() => <h1>Home Page</h1>} />
					<Route exact path='/acount/profile' render={() => <AccountPorfile />} />
				</BrowserRouter>
			</AccountProvider>
		</div>
	)
}

export default App
