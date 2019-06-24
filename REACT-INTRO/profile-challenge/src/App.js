import React from "react"
import "./App.css"
import Header from "./Header"
import AboutMe from "./AboutMe"

const person = [
	"Pop culture maven. Beer fan. Award-winning music junkie. Extreme coffee 	enthusiast.Thinker.Tv specialist.",
	"Friendly web maven. Bacon lover. General internet specialist. Incurable travel scholar",
	"Subtly charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar.",
	"Unable to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist"
]
function App() {
	return (
		<div>
			<Header name='Sandra' />
			<AboutMe image='https://randomuser.me/api/portraits/women/8.jpg' bio={person} />
			<section id='fav-foods'>
				<h2>Favourite Foods</h2>
				<div>
					<h4>Pizza</h4>
					<img src='https://bit.ly/2rJ4rnn' />
					<p>
						Best time to eat: <span>All the time</span>
					</p>
					<p>
						Best place: <span>Queen Margharitas</span>
					</p>
				</div>
				<div>
					<h4>Quesadillas</h4>
					<img src='https://bit.ly/2ryI6bZ' />
					<p>
						Best time to eat: <span>Afternoon Siesta</span>
					</p>
					<p>
						Best place: <span>Mejico</span>
					</p>
				</div>
				<div>
					<h4>Icecream Pancakes</h4>
					<img src='https://bit.ly/2zUznp2' />
					<p>
						Best time to eat: <span>Breaky</span>
					</p>
					<p>
						Best place: <span>Pancakes on the Rocks</span>
					</p>
				</div>
				<div>
					<h4>Loaded Fries</h4>
					<img src='https://bit.ly/2GdfYVK' />
					<p>
						Best time to eat: <span>During the game</span>
					</p>
					<p>
						Best place: <span>My House</span>
					</p>
				</div>
			</section>
			<section id='contact'>
				<h2>Contact Details</h2>
				<p>
					<b>Phone:</b> <i>+12345678</i>
				</p>
				<p>
					<b>Email:</b> <i>thatsme@test.com</i>
				</p>
				<p>
					<b>Twitter:</b> <i>#superfun</i>
				</p>
			</section>
			<footer>
				<h5>Thanks for visiting my profile. Hope to here from you soon!</h5>
			</footer>
		</div>
	)
}

export default App
