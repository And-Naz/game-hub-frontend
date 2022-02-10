import {useState} from 'react';
import Button from "../ui/Button";
import api from "../../api"
import './style.css'

const emailRegExt = /^[-\w]+@\w+\.\w+$/g
const passwordRegExt = /^\w{6,8}$/g

function SignUp({ toggleForm }) {

	const [form, setForm] = useState({userName: '', email: '', password: '', confirmPassword: '', gender: 'male', terms: false})
	const onChangeUserName = e => setForm(prev => ({...prev, userName: e.target.value}))
	const onChangeEmail = e => setForm(prev => ({...prev, email: e.target.value}))
	const onChangePassword = e => setForm(prev => ({...prev, password: e.target.value}))
	const onChangeConfirmPassword = e => setForm(prev => ({...prev, confirmPassword: e.target.value}))
	const onChangeGender = e => setForm(prev => ({...prev, gender: e.target.value}))
	const onChangeTerms = e => setForm(prev => ({...prev, terms: e.target.checked}))

	const onSubmitForm = (event) => {
		event.preventDefault()
		console.log(form);
		if (form.userName === '') { return alert("User Name is required.") }
		if (!emailRegExt.test(form.email)) { return alert("Email is invalid.") }
		if(!passwordRegExt.test(form.password)) { return alert("Password is invalid.\nMin symbols 6, Max symbols 8, it's must be only alphanumeric.") }
		if(form.password !== form.confirmPassword) { return alert("Confirm password must be equal Password.") }
		if(!(["male", "female", "other"]).includes(form.gender)) { return alert("Unknown gender.") }
		if(!form.terms) { return alert("You must accept our terms.") }
		api.register(form)
	}

	return (
		<div className='navbar-signup-form'>
			<form action="#" method='post' onSubmit={onSubmitForm}>
				<label htmlFor='userName'>User Name:</label>
				<div>
					<input className="login-form-inp" type="text" id='userName' name="userName" value={form.userName} onChange={onChangeUserName} />
				</div>
				<label htmlFor='email'>Email:</label>
				<div>
					<input className="login-form-inp" type="email" id='email' name="email" value={form.email} onChange={onChangeEmail} />
				</div>
				<label htmlFor='password'>Password:</label>
				<div>
					<input className="login-form-inp" type="password" id='password' name="password" value={form.password} onChange={onChangePassword} />
				</div>
				<label htmlFor='confirmPassword'>Confirm Password:</label>
				<div>
					<input className="login-form-inp" type="password" id='confirmPassword' name="confirmPassword" value={form.confirmPassword} onChange={onChangeConfirmPassword} />
				</div>
				<label>Choose Gender:</label>
				<div className='gender_container'>
					<label>
						<input type="radio" name="gender" value="male" checked={form.gender === 'male' && true} onChange={onChangeGender} />
						<span>Male</span>
					</label>
					<label>
						<input type="radio" name="gender" value="female" checked={form.gender === 'female' && true} onChange={onChangeGender} />
						<span>Female</span>
					</label>
					<label>
						<input type="radio" name="gender" value="other" checked={form.gender === 'other' && true} onChange={onChangeGender} />
						<span>Other</span>
					</label>
				</div>
				<div className='control-section'>
					<label htmlFor='terms'>
						<input className="login-form-checkbox" type="checkbox" id='terms' name="terms" checked={form.terms} onChange={onChangeTerms} />
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