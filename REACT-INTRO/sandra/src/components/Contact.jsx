import React from "react"

// a functional componetn can accept an object called props which will contain all the attributes we have set in that element
export function Contact() {
	return (
		<div>
			<h2>Contact Details</h2>
			<p>
				<b>Phone:</b> <i>+12345678</i>
			</p>
			<p>
				<b>Email:</b> <i>thatsme@test.com</i>
			</p>
			<p>
				<b>Twitter:</b> <i>#superfun</i>
			</p>
		</div>
	)
}
