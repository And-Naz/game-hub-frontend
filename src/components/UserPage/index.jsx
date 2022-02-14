import React from 'react';
import user from  '../../assets/images/user.png'
import './style.css'
import { RiImageAddFill, RiLockPasswordLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs";



function UserPage() {
    return (
        <section className='user_container'>
            <div className='user_info'>
                <img className="user-img" src={user} alt="member"/>
                <div className="user_info__body">
                    <h3>UserName</h3>
                    <h3>Email</h3>
                </div>
            </div>
            <div className='user_score'>
                <h3>Favourite Games</h3>
            </div>
            <div className='user_card'>
                <h3>Add Card</h3>
                <button title='Add Card' className='icon_btn' onClick={() => console.log('add card')}><BsCreditCard2Back /></button>
            </div>
            <div className='user_settings'>
                <h3>Settings</h3>
                <span>
                    <button title='Add Picture' className='icon_btn' onClick={() => console.log('add picture')}><RiImageAddFill /></button>
                    <button title='Change Email' className='icon_btn' onClick={() => console.log('change mail')}><MdAlternateEmail /></button>
                    <button title='Change Password' className='icon_btn' onClick={() => console.log('change password')}><RiLockPasswordLine /></button>
                </span>

            </div>
        </section>
    );
}

export default UserPage;