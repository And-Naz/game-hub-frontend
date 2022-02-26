import React, { useEffect, useState } from 'react';
import user from '../../assets/images/user.png'
import { RiImageAddFill, RiLockPasswordLine } from "react-icons/ri";
import { MdAlternateEmail } from "react-icons/md";
import { BsCreditCard2Back } from "react-icons/bs";
import CreditCard from "./creditCard";
import ChangeEmail from "./changeEmail";
import ChangePassword from "./changePassword";
import './style.css'




function UserPage() {

	const [userImg, setUserImg] = useState(user);
	const [cardPopup, setCardPopup] = useState(false)
	const [emailPopup, setEmailPopup] = useState(false)
	const [pswPopup, setPswPopup] = useState(false)

	const imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setUserImg(reader.result)
			}
		}
		reader.readAsDataURL(e.target.files[0])
	}

	const cardHandler = () => {
		setCardPopup(true)
	}

	const emailHandler = () => {
		setEmailPopup(true)
	}

	const pswHandler = () => {
		setPswPopup(true)
	}




	return (
		<section className='user_container'>
			<div className='user_info'>
				<div className='user_img_container'>
					<img className="user_img" src={userImg} alt="member" />
				</div>
				<h3>UserName</h3>
				<h3>Email</h3>
			</div>
			<div className='user_score'>
				<h2>Favourite Games</h2>
			</div>
			<div className='user_card'>
				<h2>Add Card</h2>
				<button onClick={cardHandler} className='icon-btn'>
					<BsCreditCard2Back />
					<p>Add Card</p>
				</button>
				<CreditCard trigger={cardPopup} setTrigger={setCardPopup} />
			</div>
			<div className='user_settings'>
				<h2>Settings</h2>
				<div className='settings'>
					<label>
						<input type="file" name='image-upload' accept='image/*' onChange={imageHandler} />
						<div className='icon'><RiImageAddFill /></div>
						<p>Upload an Image</p>
					</label>
					<button onClick={emailHandler} className='icon-btn'>
						<MdAlternateEmail />
						<p>Change Email</p>
					</button>
					<ChangeEmail triggerEmail={emailPopup} setTriggerEmail={setEmailPopup} />

					<button onClick={pswHandler} className='icon-btn'>
						<RiLockPasswordLine />
						<p>Change Password</p>
					</button>
					<ChangePassword triggerPsw={pswPopup} setTriggerPsw={setPswPopup} />
				</div>
			</div>
		</section>
	);
}

export default UserPage;

