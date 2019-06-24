import React from "react"
import "./App.css"
import Comment from "./Comment"
import Card from "./Card"
function App() {
	return (
		<div className='comments'>
			<Comment author='Mary Smith' date={"11/12 6:00pm"} text={"I think you are really cool!"} />
			<Comment author='Jude Henry' date={"09/12 1:30pm"} text={"Hey this is great!"} />
			<Comment author='Bobby Miller' date={"07/12 9:10am"} text={"Simply spectacular."} />
			<Card>
				<h1>Hello there</h1>
			</Card>
		</div>
	)
}

export default App
