import React, { useState, useEffect } from "react"
import { api } from "../api"

// const testBookmarks = [
// 	{ title: "google", url: "http://www.google.com" },
// 	{ title: "reddit", url: "http://www.reddit.com" },
// 	{ title: "news", url: "http://www.news.com.au" }
// ]

// create a context (single source of truth)
export const BookmarkContext = React.createContext()
// create a consumer and export it (consumer is created when context is created)
export const BookmarkConsumer = BookmarkContext.Consumer

// need to pass the children in the bookmarkProvider in order to work
export default function BookmarkProvider({ children }) {
	// need to store the bookmarks somewhere in a useState
	const [bookmarks, setBookmarks] = useState([])

	// hook version of componentDidMount()
	// useEffect doesn't have to return
	// returns an anonymous function (clean up function) when the componentWillUnmount
	// changing it from useEfect means you can etch the bookmarks ondemand
	const fetchBookmarks = () => {
		api.get("/bookmarks").then(result => {
			console.log(result)
			setBookmarks(result.data) // anythign that comes back from an axios request will need a .data appended to display it
		})
	} // the empty array means this useEffect is fired once on the first render. otherwise it will fire after every render. identify the method when this useEffect shoudl fires when the state changes.
	return (
		// Producer-consumer pattern. Provider is going to provide the data, consumer will use the data.
		// the value attribute defines what data is to be provided (in this instance, an object called bookmarks)
		// the data will be passed down to the children automatically. children is an automatic prop that is passed down by react to all components.
		<BookmarkContext.Provider value={{ bookmarks, fetchBookmarks }}>
			{children}
		</BookmarkContext.Provider>
	)
}
