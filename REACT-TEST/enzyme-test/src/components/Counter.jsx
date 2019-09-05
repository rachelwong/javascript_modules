import React, { useState } from "react"

export default function Counter() {
	// [variable to retrieve the state, function to set the state]
	const [count, setCount] = useState(0)

	const incCount = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={incCount}>Increment</button>
		</div>
	)
}
