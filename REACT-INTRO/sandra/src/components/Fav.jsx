import React from "react"

// a functional componetn can accept an object called props which will contain all the attributes we have set in that element

export function Fav(props) {
	return (
		<div>
			<FavRow favouritesData={props.favouritesData} />
		</div>
	)
}

const FavRow = props => {
	const entry = props.favouritesData.map(item => {
		return (
			<div>
				<h4>{item.header}</h4>
				<img src={item.imageUrl} />
				<p>
					Best time to eat: <span>{item.bestTimeToEat}</span>
				</p>
				<p>
					Best place: <span>{item.bestPlace}</span>
				</p>
			</div>
		)
	})
	return <div>{entry}</div>
}
