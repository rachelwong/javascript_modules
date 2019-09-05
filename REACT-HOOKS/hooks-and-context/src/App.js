import React, { Fragment, useState } from "react"
import "./App.css"
import JustAnotherCounter from "./JustAnotherCounter"

// no *this* because it's functional
function App() {
	// default value (4) can be an object
	const [counts, setCounts] = useState([1, 1, 1, 1])
	// const [total, setTotal] = useState(4)

	const updateTotal = id => {
		const newCounts = [...counts] // make a clone of the array into newCounts.
		newCounts[id] *= 2 // mutate the clone
		setCounts(newCounts) // set the state to the mutated array values
		// console.log(counts)
	}

	return (
		<div className='App'>
			<Fragment>
				<h1>
					Total:
					{counts.reduce((a, b) => {
						return a + b
					})}
				</h1>
				<JustAnotherCounter id={0} count={counts[0]} updateTotal={updateTotal} />
				<JustAnotherCounter id={1} count={counts[1]} updateTotal={updateTotal} />
				<JustAnotherCounter id={2} count={counts[2]} updateTotal={updateTotal} />
				<JustAnotherCounter id={3} count={counts[3]} updateTotal={updateTotal} />
			</Fragment>
		</div>
	)
}

export default App
