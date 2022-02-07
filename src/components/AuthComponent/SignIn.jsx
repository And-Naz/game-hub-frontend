import Button from "../ui/Button";
import './style.css'

function SignIn({ toggleForm }) {
	return (
		<div className='navbar-login-form'>
			<form action="#" method='post'>
				<label htmlFor='userName'>Username:</label>
				<div><input className="login-form-inp" type="text" id='userName' name="userName" /></div>
				<label htmlFor='password'>Password:</label>
				<div><input className="login-form-inp" type="password" id='password' name="password" /></div>
				<div className='control-section'>
					<label>
						<input className="login-form-checkbox" type="checkbox" id='checkbox' name="checkbox" />
						<span>Remember Me</span>
					</label>
					<a className="lostPwd__link" href="#" title="Forgot password">Forgot password?</a>
				</div>
				<div className='control-section'>
					<Button type='submit' buttonSize='btn-small'>Log In</Button>
					<Button type='button' buttonSize='btn-small' onClick={toggleForm}>Create account</Button>
				</div>

				{/* <div className='lostPwd'>
				</div> */}
			</form>
		</div>
	)
}

export default SignIn;
