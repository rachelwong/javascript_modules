import React from "react"
import Block from "./Block"

// a functional component can accept an object called props which will contain all the attributes we have set in that element
export function Header(props) {
	return (
		<Block>
			<h1>Welcome To {props.owner}'s Profile Page</h1>
			<nav>
				<ul>
					<li>
						<a href='#about-me'>About {props.owner}</a>
					</li>
					<li>
						<a href='#fav-foods'>Favourite Foods</a>
					</li>
					<li>
						<a href='#contact'>Contact Details</a>
					</li>
				</ul>
			</nav>
		</Block>
	)
}
