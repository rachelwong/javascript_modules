import React, { Component } from "react"

export default class Songify extends Component {
	constructor(props) {
		super(props)
		this.state = {
			filter: "",
			songs: [
				"Bohemian Rhapsody",
				"Space Oddity",
				"Happy Birthday",
				"Twinkle Star",
				"Little Giants"
			] // this song data can come from anywhere
		}
	}

	// event listener method for any change
	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		// take the value of filter in the state and go through the array and only keep the one that matches the filter
		// this will build a new array that matches the condition
		// Case sensitive search
		const songs = this.state.songs.filter(song => song.includes(this.state.filter))

		return (
			<div>
				<h1>Songify Component</h1>
				<form>
					<label htmlFor='search'>Search for song: </label>
					<input
						type='text'
						id='search'
						name='filter'
						value={this.state.filter}
						onChange={this.handleChange}
					/>
				</form>
				{songs.map(song => (
					<h4>{song}</h4>
				))}
			</div>
		)
	}
}