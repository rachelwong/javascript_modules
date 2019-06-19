import React from "react"

// a functional componetn can accept an object called props which will contain all the attributes we have set in that element

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

export function Fav() {
	// Set up page first while I work out the array
	return (
		<div>
			<section id='fav-foods'>
				<h2>Favourite Foods</h2>
				<div>
					<h4>Pizza</h4>
					<img src='https://bit.ly/2rJ4rnn' />
					<p>
						Best time to eat: <span>During the game</span>
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
		</div>
	)
}
