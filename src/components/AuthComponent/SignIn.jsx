import {useState} from 'react';
import Button from "../ui/Button";
import './style.css'

const passwordRegExt = /^\w{6,8}$/g

function SignIn({ toggleForm }) {

	const [form, setForm] = useState({userName: '', password: ''})
	// const onChangeUserName = e => setForm(prev => ({...prev, userName: e.target.value}))
	const onChangeEmail = e => setForm(prev => ({...prev, email: e.target.value}))
	const onChangePassword = e => setForm(prev => ({...prev, password: e.target.value}))

	const onSubmitForm = (event) => {
		event.preventDefault()
	}

	return (
		<div className='navbar-login-form'>
			<form action="#" method='post' onSubmit={onSubmitForm}>
			<label htmlFor='email'>Email:</label>
				<div>
					<input className="login-form-inp" type="email" id='email' name="email" value={form.email} onChange={onChangeEmail} />
				</div>
				{/* <label htmlFor='userName'>Username:</label>
				<div>
					<input className="login-form-inp" type="text" id='userName' name="userName" value={form.userName} onChange={onChangeUserName} />
				</div> */}
				<label htmlFor='password'>Password:</label>
				<div>
					<input className="login-form-inp" type="password" id='password' name="password" value={form.password} onChange={onChangePassword} />
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