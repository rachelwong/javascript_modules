import React from "react"
import PropTypes from "prop-types"

export default function ListItem({ item }) {
	return <li className='item'>{item}</li>
}

ListItem.propTypes = {
	item: PropTypes.string
}

// having default props will ensure the test won't fall over even when empty is passed through
ListItem.defaultProps = {
	item: ""
}
