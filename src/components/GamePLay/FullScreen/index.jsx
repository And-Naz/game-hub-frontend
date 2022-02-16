import { useCallback } from 'react';
import fullScreenSVG from "../../../assets/tray/fullscreen.svg"
import TrayIframe from '../TrayIframe';
import "./style.css"

const FullScreen = ({setIsFullscreen,info=[]}) => {
    const handleFullscreen = useCallback(()=>{
        setIsFullscreen(prev=>prev=!prev)
    })
    return (
        <div className='game-play_full-screen full-screen'>
            <button onClick={handleFullscreen}>
                <img width="30px" height="30px" src={fullScreenSVG} alt="" />
            </button>
            <div className='full-screen__iframe-box'>
                <TrayIframe srcGame={info.src}/>
            </div>
        </div>
    );
}

export default FullScreen;
