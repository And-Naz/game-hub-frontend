import React from 'react';
import './button.css'

const SIZES = ['btn-large', 'btn-medium', 'btn-small'];

function Button({ children, buttonSize = 'btn-medium', ...otherProps }) {

	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

	return (
		// <button className={`btn ${checkButtonSize}`} type={type} onClick={onClick}>
		// 	{children}
		// </button>
		<button className={["btn", checkButtonSize].join(" ")} {...otherProps}>
			{children}
		</button>
	);
}

export default Button;