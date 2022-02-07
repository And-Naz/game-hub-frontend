import React from 'react';
import Button from "../ui/Button";
import './style.css'

function SignUp() {
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
                    <div className='male_container'>
                        <label htmlFor="set_male">Male</label>
                        <input id="set_male" type="radio" name="set_male" />
                    </div>
                    <div className='female_container'>
                        <label htmlFor="set_female">Female</label>
                        <input id="set_female" type="radio" name="set_female" />
                    </div>
                </div>
                <div className='checkbox'>
                    <input className="login-form-checkbox" type="checkbox" id='checkbox' name="checkbox" />
                    <label htmlFor='checkbox'>Agree to Terms</label>
                </div>
                <Button type='submit' buttonSize='btn-small' children='Sign Up' />
            </form>
        </div>
    );
}

export default SignUp;