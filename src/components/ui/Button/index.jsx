import React from 'react';
import './button.css'

const SIZES = ['btn-large', 'btn-medium', 'btn-small'];

function Button({
	children,
	onClick,
	buttonSize,
	type
				}) {

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

	return (
		<button className={`btn ${checkButtonSize}`} type={type} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;