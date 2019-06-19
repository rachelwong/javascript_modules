import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Fav } from "./components/Fav"
import { Header } from "./components/Header"
function App() {
	return (
		<div>
			<Header />
			<About />
			<Fav />
			<Contact />
		</div>
	)
}

export default App
