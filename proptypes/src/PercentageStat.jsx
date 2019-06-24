import React from "react"
import PropTypes from "prop-types"

// instead of passing props, we can pass the keys of an object (destructuring)
function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
	return (
		<div className='percentage-stat'>
			<h6>{label}</h6>
			<span>Rounded score is: {Math.round((score / total) * 100)}%</span>
		</div>
	)
}

PercentageStat.defaultProps = {
	score: 0
}

PercentageStat.propTypes = {
	label: PropTypes.oneOf(["Maths", "Arts", "Science"]).isRequired,
	score: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired
}

export default PercentageStat
