import { useState } from 'react';
import Button from "../ui/Button";
import useAuth from '../../hooks/useAuth';
import './style.css'
import React from "react";

function SignIn({ toggleForm }) {

	const [form, setForm] = useState({ userNameOrEmail: '', password: '' })
	const onChangeUserNameOrEmail = e => setForm(prev => ({ ...prev, userNameOrEmail: e.target.value }))
	const onChangePassword = e => setForm(prev => ({ ...prev, password: e.target.value }))
	const { login } = useAuth()
	const onSubmitForm = (event) => {
		event.preventDefault()
		login(form.userNameOrEmail, form.password)
	}

	return (
		<div className='navbar-login-form'>
			<form action="#" method='post' onSubmit={onSubmitForm}>
				<label htmlFor='userNameOrEmail'>Username or Email:</label>
				<div>
					<input
						className="login-form-inp"
						type="text"
						id='userNameOrEmail'
						name="userNameOrEmail"
						value={form.userNameOrEmail}
						onChange={onChangeUserNameOrEmail}
					/>
				</div>
				<label htmlFor='password'>Password:</label>
				<div>
					<input
						className="login-form-inp"
						type="password"
						id='password'
						name="password"
						value={form.password}
						onChange={onChangePassword}
					/>
				</div>
				{/* <div className='control-section'>
					<label>
						<input className="login-form-checkbox" type="checkbox" id='checkbox' name="checkbox" />
						<span>Remember Me</span>
					</label>
					<a className="lostPwd__link" href="#" title="Forgot password">Forgot password?</a>
				</div> */}
				<div className='control-section'>
					<Button type='submit' buttonSize='btn-small'>Log In</Button>
					<Button type='button' buttonSize='btn-small' onClick={toggleForm}>Create account</Button>
				</div>
			</form>
		</div>
	)
}

export default SignIn;