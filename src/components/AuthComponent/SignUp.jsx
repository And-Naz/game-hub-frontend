import {useState} from 'react';
import Button from "../ui/Button";
import api from "../../api"
import './style.css'

function SignUp({ toggleForm }) {

	const [form, setForm] = useState({userName: '', email: '', password: '', confirmPassword: '', gender: '', terms: false})

	return (
		<div className='navbar-signup-form'>
			<form action="#" method='post'>
				<label htmlFor='userName'>Username:</label>
				<div>
					<input className="login-form-inp" type="text" id='userName' name="userName" value={form.userName} />
				</div>
				<label htmlFor='email'>Email:</label>
				<div>
					<input className="login-form-inp" type="email" id='email' name="email" value={form.email} />
				</div>
				<label htmlFor='password'>Password:</label>
				<div>
					<input className="login-form-inp" type="password" id='password' name="password" value={form.password} />
				</div>
				<label htmlFor='confirmPassword'>Confirm Password:</label>
				<div>
					<input className="login-form-inp" type="password" id='confirmPassword' name="confirmPassword" value={form.confirmPassword} />
				</div>
				<label>Choose Gender:</label>
				<div className='gender_container'>
					<label>
						<input type="radio" name="gender" value="male" checked={form.gender === 'male' && true}/>
						<span>Male</span>
					</label>
					<label>
						<input type="radio" name="gender" value="female" checked={form.gender === 'female' && true}/>
						<span>Female</span>
					</label>
					<label>
						<input type="radio" name="gender" value="other" checked={form.gender === 'other' && true}/>
						<span>Other</span>
					</label>
				</div>
				<div className='control-section'>
					<label htmlFor='terms'>
						<input className="login-form-checkbox" type="checkbox" id='terms' name="terms" checked={form.terms}/>
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