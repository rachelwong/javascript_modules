import React from "react"
import "./App.css"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Fav } from "./components/Fav"
import { Header } from "./components/Header"

function App() {
	const interests = [
		{
			topic: "Pop",
			blurb:
				"culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist."
		},
		{
			topic: "Friendly",
			blurb: "web maven.Bacon lover.General internet specialist.Incurable travel scholar."
		},
		{
			topic: "Subtly",
			blurb:
				"charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar."
		},
		{
			topic: "Unable",
			blurb:
				"to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist."
		}
	]
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
		<div class='container'>
			<Header />
			<About interestsData={interests} />
			<Fav favouritesData={favourites} />
			<Contact />
		</div>
	)
}

export default App
