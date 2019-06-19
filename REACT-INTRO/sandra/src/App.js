import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Fav } from "./components/Fav"
import { Header } from "./components/Header"

function App() {
	const favourites = [
		{
			header: "Pizza",
			imageUrl: "https://bit.ly/2rJ4rnn",
			bestTimeToEat: "All the time",
			bestPlace: "Queen Margharitas"
		},
		{
			header: "Quesadillas",
			imageUrl: "https://bit.ly/2ryI6bZ",
			bestTimeToEat: "Afternoon Siesta",
			bestPlace: "Mejico"
		},
		{
			header: "Icecream Pancakes",
			imageUrl: "https://bit.ly/2zUznp2",
			bestTimeToEat: "Breaky",
			bestPlace: "Pancakes on the Rocks"
		},
		{
			header: "Loaded Fries",
			imageUrl: "https://bit.ly/2GdfYVK",
			bestTimeToEat: "Breaky",
			bestPlace: "My House"
		}
	]

	return (
		<div>
			<Header />
			<About />
			<Fav favouritesData={favourites} />
			<Contact />
		</div>
	)
}

export default App
