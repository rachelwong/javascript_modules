import React from "react"
import "./App.css"
import CountButton from "./CountButton"
function App() {
	return (
		<div className='App'>
			<div>
				<CountButton id='first' />
				<CountButton id='second' />
				<CountButton id='third' />
				<CountButton id='fourth' />
			</div>
		</div>
	)
}

export default App
