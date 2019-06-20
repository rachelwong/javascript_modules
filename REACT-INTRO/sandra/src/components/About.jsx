import React from "react"
import Block from "./Block"
// a functional component can accept an object called props which will contain all the attributes we have set in that element

export function About(props) {
	return (
		// props is the whole object and will collectively pass in as field called children
		<Block dataset='data'>
			<h2>About Me</h2>
			<img src='https://randomuser.me/api/portraits/women/8.jpg' alt='sandra_photo' />
			<article>
				<ol>
					<AboutRow interestsData={props.interestsData} />
				</ol>
			</article>
		</Block>
	)
}

const AboutRow = props => {
	const aboutEntry = props.interestsData.map(item => {
		return (
			<p>
				<b>{item.topic}</b> {item.blurb}
			</p>
		)
	})
	return <li>{aboutEntry}</li>
}
