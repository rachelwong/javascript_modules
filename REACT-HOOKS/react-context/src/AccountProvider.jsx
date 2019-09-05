import React, { useState } from "react"

// to use context, must create an instance of it
const AccountContext = React.createContext()

// a provider provides the context for components who uses the context
// component that uses context is called a consumer
// context is implementation of sotware engineer pattern (subscribe/producer-consumer pattern. ONe component or module produces some data that provides data and another component subscribes to that data and make use of it)
export const AccountConsumer = AccountContext.Consumer

export default function AccountProvider({ children }) {
	const [state, setState] = useState({
		username: "Matt",
		dateJoined: new Date(),
		membershipLevel: "Gold"
	})

	return (
		// need to provide  a value in the provider (in this instance, the whole state)
		<AccountContext.Provider value={state}>
			{/* renders any child component of this component */}
			{children}
		</AccountContext.Provider>
	)
}
