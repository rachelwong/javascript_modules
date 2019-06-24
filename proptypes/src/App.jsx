import React from "react"
import "./App.scss"
import PercentageStat from "./PercentageStat"

function App() {
	return (
		<div className='App'>`
			<h1>Male Population</h1>
			<div>
				<PercentageStat label='Maths' total='0' score={203} />
				<PercentageStat label='Arts' total={100} />
				<PercentageStat label='Science' score={() => {}} />
				<PercentageStat label='Home Economics' total={{}} score='0' />
			</div>
		</div>
	)
}

export default App
