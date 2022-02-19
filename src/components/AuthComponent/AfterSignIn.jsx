import React from 'react';
import Button from "../ui/button";

function AfterSignIn() {
    return (
        <div className='after-sign-form'>
                <div className='form-control-section'>
                    <Button  type='button' buttonSize='btn-small'>Profile Page</Button>
                    <Button onClick={() => console.log('logout')} type='button' buttonSize='btn-small'>Log Out</Button>
                </div>
        </div>
    );
}

export default AfterSignIn;