import Button from "../ui/Button";
import './style.css'

function SignIn() {
	return (
		<div className='navbar-login-form'>
			<form action="#" method='post'>
				<label htmlFor='userName'>Username:</label>
				<div><input className="login-form-inp" type="text" id='userName' name="userName" /></div>
				<label htmlFor='password'>Password:</label>
				<div><input className="login-form-inp" type="password" id='password' name="password" /></div>
				<div className='checkbox'>
					<input className="login-form-checkbox" type="checkbox" id='checkbox' name="checkbox" />
					<label htmlFor='checkbox'>Remember Me</label>
				</div>
				<Button type='submit' buttonSize='btn-small' children='Log In' />
				<div className='lostPwd'>
					<a className="lostPwd__link" href="#" title="Forgot password">Forgot password?</a>
				</div>
			</form>
		</div>
	)
}

export default SignIn;
