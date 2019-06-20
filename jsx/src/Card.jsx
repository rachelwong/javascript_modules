import React from "react"

const styles = {
	backgroundColor: "gray",
	padding: "1rem",
	margin: "1rem",
	border: "1px solid black",
	borderRadius: "0.5rem"
}

// This makes a contained card element to contain the children elements in Comment.js

const Card = props => {
	return <div style={styles}>{props.children}</div>
}

export default Card
