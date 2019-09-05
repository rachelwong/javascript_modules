import React, { useContext, useEffect } from "react"
import "./App.css"
import { BrowserRouter, Route, Redirect } from "react-router-dom"
import BookmarkList from "./components/BookmarkList"
import LoginForm from "./components/LoginForm"
import { BookmarkContext } from "./providers/BookmarkProvider"
import { AuthContext } from "./providers/AuthProvider"
// app function cannot be async because this will break the React app
function App() {
	// to access a provider or context
	// context stores state and affects its children. The context within which the children exists and operate. Any data within that context is accessible by children. Consumer are listenign to the provider. ANy children of the consumer can refer to the data in the provider/
	const { login, isLoggedIn } = useContext(AuthContext) // brings in the context for authprovider
	const { fetchBookmarks } = useContext(BookmarkContext)

	// useEffect(() => {
	// 	// login("admin@bar.com", "hellothere").then(() => {
	// 	// 	fetchBookmarks()
	// 	})
	// }, [])

	return (
		// by using provider, we are able to store our state in the provider. Any children wrapped by the provider will have access to the state
		<BrowserRouter>
			<Route exact path='/' render={() => <h1>Home Page</h1>} />
			<Route
				exact
				path='/bookmarks'
				render={() => (isLoggedIn ? <BookmarkList /> : <LoginForm />)}
			/>
			<Route
				exact
				path='/login'
				render={() => (isLoggedIn ? <Redirect to='/bookmarks' /> : <LoginForm />)}
			/>
		</BrowserRouter>
	)
}

export default App
