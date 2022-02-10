import React from 'react';
import Button from "../ui/button";
import './style.css'

function SignUp({ toggleForm }) {
	return (
		<div className='navbar-signup-form'>
			<form action="#" method='post'>
				<label htmlFor='userName'>Username:</label>
				<div><input className="login-form-inp" type="text" id='userName' name="userName" /></div>
				<label htmlFor='email'>Email:</label>
				<div><input className="login-form-inp" type="email" id='email' name="email" /></div>
				<label htmlFor='password'>Password:</label>
				<div><input className="login-form-inp" type="password" id='password' name="password" /></div>
				<label htmlFor='confirm__password'>Confirm Password:</label>
				<div><input className="login-form-inp" type="password" id='confirm__password' name="confirm__password" /></div>
				<label>Choose Gender:</label>
				<div className='gender_container'>
					<label>
						<input type="radio" name="gender" value="male" />
						<span>Male</span>
					</label>
					<label>
						<input type="radio" name="gender" value="female" />
						<span>Female</span>
					</label>
					{/* <div className='female_container'>
						
					</div> */}
				</div>
				<div className='control-section'>
					<label htmlFor='checkbox'>
						<input className="login-form-checkbox" type="checkbox" id='checkbox' name="checkbox" />
						<span>Agree to Terms</span>
					</label>
				</div>
				<Button type='submit' buttonSize='btn-small'>Sign Up</Button>
				<Button type='button' buttonSize='btn-small' onClick={toggleForm}>Have account</Button>
			</form>
		</div>
	);
}

export default SignUp;