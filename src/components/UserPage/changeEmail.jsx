import React from 'react';
import Button from "../ui/button";
import '../AuthComponent/style.css'

function ChangeEmail(props) {
    return (props.triggerEmail) ? (
        <div className='navbar-signup-form email'>
            <form action="#" method='post' >
                <label htmlFor='curr_email'>Current Email:</label>
                <div>
                    <input className="login-form-inp" type="email" id='curr_email' name="curr_email" />
                </div>
                <label htmlFor='new_email'>New Email:</label>
                <div>
                    <input className="login-form-inp" type="email" id='new_email' name="new_email" />
                </div>
                <div className='sbm-btn'>
                    <Button type='submit' buttonSize='btn-small'>Submit</Button>
                    <Button onClick={() => props.setTriggerEmail(false)} type='button' buttonSize='btn-small'>Close</Button>
                    {props.children}
                </div>

            </form>
        </div>
    ) : '';
}

export default ChangeEmail;