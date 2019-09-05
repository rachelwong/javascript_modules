import React, { useState, useEffect, useContext } from "react"
import { BookmarkConsumer, BookmarkContext } from "../providers/BookmarkProvider"
// set up test data to see if the component will work
// hard coded defaults will make sure the react end of things work
// no point pulling things from the api if this much works (keep the bug surface area as small as possible before moving onto the next thing)

// const testBookmarks = [
// 	{ title: "google", url: "http://www.google.com" },
// 	{ title: "reddit", url: "http://www.reddit.com" },
// 	{ title: "news", url: "http://www.news.com.au" }
// ]

export default function BookmarkList() {
	const { fetchBookmarks } = useContext(BookmarkContext)
	useEffect(() => {
		fetchBookmarks() // the bookmark list will not rendre if it is not logged in
	}, [fetchBookmarks])

	// use local state to get bookmarks
	// this is replaced in our provider
	// const [bookmarks, setBookmarks] = useState(testBookmarks)

	//this part is not providing the data, it is using/consuming the data
	return (
		<BookmarkConsumer>
			{/* passing in the bookmarks object  */}
			{({ bookmarks }) => (
				<ul>
					<h1>Bookmarks</h1>
					{/* get bookmarks from api */}
					{bookmarks.map(bookmark => (
						<li>
							<a href={bookmark.url}>{bookmark.title}</a>
						</li>
					))}
				</ul>
			)}
		</BookmarkConsumer>
	)
}
