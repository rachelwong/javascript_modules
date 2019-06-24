import React from "react"

export default function Nav(props) {
	return (
		<nav>
			<ul>
				{props.items.map(item => {
					return (
						<li>
							<a href={item.link}>{item.title}</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}
