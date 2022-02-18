import React, {useEffect, useState} from 'react';
import user from  '../../assets/images/user.png'
import { RiImageAddFill, RiLockPasswordLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs";
import CreditCard from "./creditCard";
import PopupButton from "../PopupButton";
import ChangeEmail from "./changeEmail";
import ChangePassword from "./changePassword";
import './style.css'




function UserPage() {

    const [userImg, setUserImg] = useState(user)

    const imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                setUserImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (
        <section className='user_container'>
            <div className='user_info'>
                <div className='user_img_container'>
                    <img className="user_img" src={userImg} alt="member"/>
                </div>
                <h3>UserName</h3>
                <h3>Email</h3>
            </div>
            <div className='user_score'>
                <h2>Favourite Games</h2>
            </div>
            <div className='user_card'>
                <h2>Add Card</h2>
                <PopupButton popupElement={<CreditCard />}>
                    <div className='icon-btn'>
                        <BsCreditCard2Back />
                        <p>Add Card</p>
                    </div>
                </PopupButton>
            </div>
            <div className='user_settings'>
                <h2>Settings</h2>
                <div className='settings'>
                    <label>
                        <input type="file" name='image-upload' accept='image/*' onChange={imageHandler}/>
                        <div className='icon'><RiImageAddFill /></div>
                        <p>Upload an Image</p>
                    </label>
                    <PopupButton popupElement={<ChangeEmail />}>
                        <div className='icon-btn'>
                            <MdAlternateEmail />
                            <p>Change Email</p>
                        </div>
                    </PopupButton>
                    <PopupButton popupElement={<ChangePassword />}>
                        <div className='icon-btn'>
                            <RiLockPasswordLine />
                            <p>Change Password</p>
                        </div>
                    </PopupButton>
                </div>
            </div>
        </section>
    );
}

export default UserPage;