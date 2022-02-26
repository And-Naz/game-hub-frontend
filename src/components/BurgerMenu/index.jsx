import './style.css'

function BurgerMenu({ children }) {
	return (
		<div className='navbar-login-form burger__menu'>
			{children}
		</div>
	);
}

export default BurgerMenu;