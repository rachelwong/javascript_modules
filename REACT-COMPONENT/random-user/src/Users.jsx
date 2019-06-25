import React from "react"
import UserItem from "./UserItem"
import Spinner from "./Spinner"
import PropTypes from "prop-types"

const Users = ({ users, loading }) => {
	if (loading) {
		return <Spinner />
	} else {
		return (
			<div>
				{users.map(user => (
					<UserItem key={user.id} user={user.results} /> // it is user.results because the json returns a results object containing arrays
				))}
			</div>
		)
	}
}

Users.propTypes = {
	users: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired
}

export default Users
