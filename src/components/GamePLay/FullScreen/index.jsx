import { useCallback } from 'react';
import fullScreenSVG from "../../../assets/tray/fullscreen.svg"
import TrayIframe from '../TrayIframe';
import "./style.css"

const FullScreen = ({iframeUrl,goBack}) => {
    
    return (
        <div className='game-play_full-screen full-screen'>
            <button onClick={goBack}>
                <img width="30px" height="30px" src={fullScreenSVG} alt="full-screen" />
            </button>
            <div className='full-screen__iframe-box'>
                <TrayIframe srcGame={iframeUrl}/>
            </div>
        </div>
    );
}

export default FullScreen;
