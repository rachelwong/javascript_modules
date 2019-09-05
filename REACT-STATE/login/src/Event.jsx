import React from "react"

// passing in the event object
// only presentation
export default function Event({ id, action, timestamp }) {
	return (
		<div>
			<p key={id}>
				{action} at {timestamp.toLocaleString()}
			</p>
		</div>
	)
}
