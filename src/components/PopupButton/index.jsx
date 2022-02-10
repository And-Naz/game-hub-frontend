import { useState, forwardRef, useCallback } from "react";
import Button from "../ui/Button";
import "./style.css"
import SignIn from "../AuthComponent/SignIn";
const PopupButton = forwardRef(function ({ children, popupElement }, ref) {
	const [showPopup, setShowPopup] = useState(false)
	const onOpen = useCallback(() => { setShowPopup(true) }, [])
	const onClose = useCallback(() => { setShowPopup(false) }, [])
	return (
		<span ref={ref} className='popup-btn' onClick={onOpen}>
			{
				children && (
					<span>
						{children}
					</span>
				)
			}
			<span className='popup-btn__caret'></span>
			{
				showPopup &&
				<div className="popup-btn__popup-element">
					<button className="close-icon" onClick={onClose}>X</button>
					{popupElement}
				</div>
			}
		</span>
	);
})

export default PopupButton;
