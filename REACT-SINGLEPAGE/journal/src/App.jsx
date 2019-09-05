import React from "react"
import "./App.css"
import HomeView from "./HomeView"
import CategorySelectionView from "./CategorySelectionView"
import NewEntryView from "./NewEntryView"
import { BrowserRouter, Route, Link } from "react-router-dom"

export default class App extends React.Component {
	// This is no longer required when you have
	state = {
		// location: "home"
		categories: ["food", "thoughts", "shopping", "other"],
		entries: []
	}

	// getView = () => {
	// 	switch (this.state.location) {
	// 		case "home":
	// 			return <HomeView />
	// 		case "categorySelection":
	// 			return <CategorySelectionView />
	// 		case "newEntry":
	// 			return <NewEntryView />
	// 		default:
	// 			return null
	// 	}
	// }

	addEntry = (categoryId, content) => {
		const newEntries = [...this.state.entries]
		newEntries.push({ categoryId: categoryId, entry: content })
		this.setState({
			entries: newEntries
		})
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Link to='/'>
							<button>Home</button>
						</Link>
						<Link to='/category'>
							<button>New Entry</button>
						</Link>
						<Link to='/entry'>Entry</Link>

						{/* Lift the state to the nearest common parent. Which child component need to know about that state? homeView needs to know about entries. App is the common ancestors */}
						<Route
							exact
							path='/'
							render={props => (
								<HomeView categories={this.state.categories} entries={this.state.entries} />
							)}
						/>
						<Route
							exact
							path='/category'
							render={props => <CategorySelectionView categories={this.state.categories} />}
						/>
						{/* expand the entire object into key value pairs nad then pass through individual props as if prop=whatever. Being specific about what is being passed through to the component*/}
						<Route
							exact
							path='/entry/new/:id'
							render={props => (
								<NewEntryView
									{...props} // this passes through and provide an history object
									addEntry={this.addEntry} // can't pass entries down to the child because can't setState. so pass function. in the form component, call the function give it hte new entry and then app.addentry will update the state.
									categories={this.state.categories}
								/>
							)}
						/>
					</div>
				</BrowserRouter>

				{/* <button onClick={() => this.setState({ location: "home" })}>Home</button>
				<button onClick={() => this.setState({ location: "categorySelection" })}>
					Category Selection
				</button>
				<button onClick={() => this.setState({ location: "newEntry" })}>New Entry</button> */}
				{/* this calls the method to return an appropriate view */}
				{/* {this.getView()} */}
			</div>
		)
	}
}
