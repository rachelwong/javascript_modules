import React from "react"
import PropTypes from "prop-types"

const UserItem = ({ user: { image_url, name, email, phone } }) => {
	return (
		<div>
			<img src={image_url} alt='' style={{ width: "100px" }} />
			<h3>{name}</h3>
			<div>
				<p>Email:{email}</p>
				<p>Phone: {phone}</p>
			</div>
		</div>
	)
}

UserItem.propTypes = {
	user: PropTypes.object.isRequired
}

export default UserItem
