import React, { useState, useContext, history } from "react"
import { AuthContext } from "../providers/AuthProvider"
import { BookmarkContext } from "../providers/BookmarkProvider"

export default function LoginForm() {
	// setup the initial state
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const { login } = useContext(AuthContext) // brings in the context for authprovider
	const { fetchBookmarks } = useContext(BookmarkContext)

	const doLogin = () => {
		login(email.password).then(() => {
			fetchBookmarks()
			//redirect to bookmarks page
			history.pushState(null, " ", "/bookmarks")
		})
	}

	return (
		<div>
			<h2>Login</h2>
			{/* this login is in the AuthcContext */}
			<form onSubmit={() => doLogin(email, password)}>
				<fieldset>
					<label htmlFor='email'>Email: </label>
					{/* the *this* refers to the relevant input box */}
					<input type='email' name='email' value={email} onChange={() => setEmail(this.value)} />
				</fieldset>
				<fieldset>
					<label htmlFor='password'>Password: </label>
					{/* the *this* refers to the relevant input box */}
					<input
						type='password'
						name='password'
						value={password}
						onChange={() => setPassword(this.value)}
					/>
				</fieldset>
				<button>Login</button>
			</form>
		</div>
	)
}
