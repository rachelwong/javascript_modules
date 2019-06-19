import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Project } from "./components/Project"

const projects = ["My awesome project", "Another Project", "Project X"]
function App() {
	const projectItems = projects.map(p => <Project title={p} />)
	return <div>{projectItems}</div>
}

export default App
