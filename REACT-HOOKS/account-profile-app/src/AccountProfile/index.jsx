import React, { Fragment } from "react"
import AccountDetails from "./AccountDetails"
import AccountUpdate from "./AccountUpdate"

// take in existing account object with username, dateJoined, membershipLevel
// pass down to AccountDetails, AccountUpdate
const AccountProfile = ({ account: { username, dateJoined, membershipLevel } }) => (
	<Fragment>
		<AccountDetails username={username} dateJoined={dateJoined} membershipLevel={membershipLevel} />
		<AccountUpdate username={username} membershipLevel={membershipLevel} />
	</Fragment>
)

export default AccountProfile
