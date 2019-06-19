import React from "react"

// a functional componetn can accept an object called props which will contain all the attributes we have set in that element
export function Project(props) {
	// return <h3>My Projects</h3>
	// the {} is everything in javascript
	return <h3>{props.title}</h3>
}
