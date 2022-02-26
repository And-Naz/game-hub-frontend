import React from 'react';
import Button from "../../components/ui/Button";


function ChangePassword(props) {
	return (props.triggerPsw) ? (
		<div className='navbar-signup-form password_container'>
			<form action="#" method='post'>
				<label htmlFor='curr_password'>Current Password:</label>
				<div>
					<input className="login-form-inp" type="password" id='curr_password' name="curr_password" />
				</div>
				<label htmlFor='new_password'>New Password:</label>
				<div>
					<input className="login-form-inp" type="password" id='new_password' name="new_password" />
				</div>
				<label htmlFor='confirm__password'>Confirm New Password:</label>
				<div>
					<input className="login-form-inp" type="password" id='confirm__password' name="confirm__password" />
				</div>
				<div className='sbm-btn'>
					<Button type='submit' buttonSize='btn-small'>Submit</Button>
					<Button onClick={() => props.setTriggerPsw(false)} type='button' buttonSize='btn-small'>Close</Button>
				</div>

			</form>
		</div>
	) : '';
}

export default ChangePassword;