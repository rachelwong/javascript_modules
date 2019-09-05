import React from "react"
import "./App.css"
import studentAPI from "./studentAPI"
// // axios to the project
// import axios from "axios"

// // to hold the input
// const studentAPI = "http://localhost:4000/api/students"

export default class App extends React.Component {
	// put the data from the server into  the state to render
	state = {
		students: [],
		studentName: ""
	}

	// putting the api fetch in the constructor won't work. so we need to put it in the componentDidMount and async/await it
	// component has been intiialised, rendered and part of the DOM
	// we don't want to update the state before that. It will trigger a render and may not have attached the data to the DOM
	componentDidMount = () => {
		studentAPI.get().then(result => {
			this.setState({
				// the result will have a .data property
				// this overrides the existing student array with the new data
				students: result.data
			})
		})
	}

	// handling any changes in the form
	handleChange = event => {
		this.setState({
			studentName: event.target.value
		})
	}

	// handling submitting the form
	addStudent = event => {
		event.preventDefault() // prevents it from refreshing the whole page
		// POST the new student to the server
		// pass it an object with the fields in it
		studentAPI
			.post("", {
				student: this.state.studentName // axios will automatically stringify the object
			})
			.then(student => {
				// Successfully posted a student
				// Needs to add student to students array beacuse all we've done is posted it to server. we need to add it to the local array. Otherwise need to add another axios call to reload all the data from the server and add it to the local array object.

				// can't push the new student straight in the setState so need to create a new array from the elements (clone of the array)
				const students = [...this.state.students, student.data] // create new copy of the existing array and add the new student to the copy of the array
				// students: students is the same as just { students }
				this.setState({
					students,
					studentName: "" // this resets the input form when the form is submitted
				})
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		return (
			<div>
				<h1>Students</h1>
				{this.state.students.map((student, index) => (
					<h4>{student}</h4>
				))}

				<form onSubmit={this.addStudent}>
					<label>Student Name: </label>

					{/* the value attributes binds state to the control, and the onChange attribute binds this control to a function which will update the state - two way binding  */}
					<input type='text' value={this.state.studentName} onChange={this.handleChange} />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}
