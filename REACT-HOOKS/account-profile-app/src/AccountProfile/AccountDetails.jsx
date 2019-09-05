import React from "react"

// simply displays the form information
// takes in a destructured object which consists of username, dateJoined, membershipLevel
const AccountDetails = ({ username, dateJoined, membershipLevel }) => (
	<div>
		<p>Username: {username}</p>
		<p>Date Joined: {dateJoined}</p>
		<p>Membership Level: {membershipLevel}</p>
	</div>
)

export default AccountDetails
