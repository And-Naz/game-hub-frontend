import { useState, forwardRef, useCallback, useRef, useEffect } from "react";
import "./style.css"
const PopupButton = forwardRef(function ({ children, popupElement, hide = false }, ref) {
	const popup = useRef()
	const [showPopup, setShowPopup] = useState(false)
	const onOpen = useCallback(() => { setShowPopup(true) }, [])
	const onClose = useCallback(() => { setShowPopup(false) }, [])
	const outClickPopup = useCallback((event) => {
		const popupCheck = popup.current?.contains(event.target)
		if (!popupCheck && showPopup) {
			onClose()
		}
	}, [showPopup])

	useEffect(() => {
		if (showPopup) {
			document.addEventListener('click', outClickPopup)
		}
		return () => {
			document.removeEventListener('click', outClickPopup)
		}
	}, [showPopup]);
	return (
		<span ref={ref} className='popup-btn' onClick={onOpen}>
			{
				children && (
					<span>
						{children}
					</span>
				)
			}
			{!hide && <span className='popup-btn__caret'></span>}
			{
				showPopup &&
				<div className="popup-btn__popup-element" ref={popup} >
					{popupElement}
				</div>
			}
		</span>
	);
})

export default PopupButton;