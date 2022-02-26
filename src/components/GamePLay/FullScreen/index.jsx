import { useRef } from 'react';
import { useEffect } from 'react';
import fullScreenSVG from "../../../assets/tray/fullscreen.svg"
import TrayIframe from '../TrayIframe';
import "./style.css"
import React from "react";

const FullScreen = ({ iframeUrl, goBack }) => {
	const headerRef = useRef()
	useEffect(() => {
		headerRef.current = document.getElementById("header")
		if (headerRef.current) {
			headerRef.current.style.display = "none"
		}
		return () => {
			if (headerRef.current) {
				headerRef.current.style.display = "flex"
			}
		}
	}, [])
	return (
		<div className='game-play_full-screen full-screen'>
			<button onClick={goBack}>
				<img width="30px" height="30px" src={fullScreenSVG} alt="full-screen" />
			</button>
			<div className='full-screen__iframe-box'>
				<TrayIframe srcGame={iframeUrl} />
			</div>
		</div>
	);
}

export default FullScreen;
