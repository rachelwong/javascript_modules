import React, { Component } from "react"

// initialise the base state and the form to take in values
class AccountUpdate extends Component {
	state = {
		username: this.props.username,
		membershipLevel: this.props.membershipLevel
	}
	render() {
		const { membershipLevel, username } = this.state
		return (
			<div>
				<form>
					<label htmlFor='username'>New Username</label>
					<div>
						<input type='text' name='username' value={username} onChange={this.onChange} />
					</div>
					<div>
						<label htmlFor='membershipLevel'>Membership Level</label>
						<select name='membershipLevel' value={membershipLevel} onChange={this.onChange}>
							<option value='Bronze'>Bronze</option>
							<option value='Silver'>Silver</option>
							<option value='Gold'>Gold</option>
						</select>
					</div>
					<button>Save</button>
				</form>
			</div>
		)
	}
}

export default AccountUpdate
