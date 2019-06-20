import React from "react"
import faker from "faker"
import Card from "./Card"
const Comment = props => {
	return (
		<Card>
			<a href='/' className='avatar'>
				<img alt='avatar' src={faker.image.avatar()} />
			</a>
			<div className='content'>
				<a href='/' className='author'>
					{props.author}
				</a>
				<p className='date'>{props.date}</p>
				<p className='text'>{props.text}</p>
			</div>
		</Card>
	)
}
export default Comment
