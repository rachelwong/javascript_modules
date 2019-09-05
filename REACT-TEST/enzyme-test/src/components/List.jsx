import React from "react"
import PropTypes from "prop-types"
import ListItem from "./ListItem"
export default function List(props) {
	// if there are no items, then display "No Items in List"
	if (!props.items.length) {
		return <h4>No Items in List</h4>
	}

	return (
		<div>
			<ul className='list-items'>
				{props.items.map(item => (
					<ListItem key={item} item={item}>
						{item}
					</ListItem>
				))}
			</ul>
		</div>
	)
}

List.propTypes = {
	// it's items because it's props.items
	items: PropTypes.array
}
List.defaultProps = {
	items: []
}
