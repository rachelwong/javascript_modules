import React from "react"

// a functional componetn can accept an object called props which will contain all the attributes we have set in that element
export function Header() {
	return (
		<header>
			<h1>Welcome To Sandras Profile Page</h1>
			<nav>
				<ul>
					<li>
						<a href='#about-me'>About Me</a>
					</li>
					<li>
						<a href='#fav-foods'>Favourite Foods</a>
					</li>
					<li>
						<a href='#contact'>Contact Details</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
