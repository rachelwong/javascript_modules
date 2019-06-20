import React from "react"

const styles = {
	backgroundColor: "gray",
	padding: "1rem",
	margin: "1rem",
	border: "1px solid black",
	borderRadius: "0.5rem"
}

const Block = props => {
	return <div style={styles}>{props.children}</div>
}

export default Block
