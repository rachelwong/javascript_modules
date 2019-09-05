// stores authentication token, decoded token in here
import React, { useState, useEffect } from "react"
import { api, setJwt } from "../api"
// import decodeJwt from "jwt-decode"

export const AuthContext = React.createContext()
export const AuthConsumer = AuthContext.Consumer

export default function AuthProvider({ children }) {
	const [token, setToken] = useState("") // local state which is set when we log in from the server

	// wont' be useEffect beacuse it is when you submit the form and log in
	const login = async (email, password) => {
		// need to pass along the email and password in order to POST the login request
		const result = await api.get("/auth/login", { email, password }).then(result => {
			// gets back the object with token in it
			setToken(result.data.token) // set local token
			setJwt(result.data.token) // set token on the api
		})
	}

	const logout = () => {
		api.get("/auth/logout").then(() => {
			setToken("")
		})
	}

	// const getTokenDetails = () => {
	// 	// call decodecjwt package
	// 	return decodeJwt(token) //passes it the token and decrypt
	// }

	const isLoggedIn = () => {
		return token != null
	}

	useEffect(() => {
		console.log("Auth Provider, useEffect:", token) //gets token from the  local state
	})

	// pass in the decrypted token
	return (
		<AuthContext.Provider value={{ isLoggedIn, login, logout }}>{children}</AuthContext.Provider>
	)
}
