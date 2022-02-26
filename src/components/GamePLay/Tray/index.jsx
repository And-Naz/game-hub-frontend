import {Link} from "react-router-dom";
import TrayIframe from '../TrayIframe';
import playh2Img from "../../../assets/tray/playh2.png"
import fullScreenSVG from "../../../assets/tray/fullscreen.svg"
import likeSVG from "../../../assets/tray/like.svg"
import newTabSVG from "../../../assets/tray/newtab.svg"
import { useCallback } from 'react';
import "./style.css"

const Tray = ({setIsFullscreen,iframeUrl,goBack}) => {
    const handleNewWindow = useCallback(()=>{
        goBack()
        const url = '/games/game/1/fullscreen'
        const windowName = '_blank'
        const windowFeatures = "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
        window.open(url, windowName, [windowFeatures]);
    },[])
    return (
        <div className='game-play__tray tray'>
           <div className="tray__playh2" style={{backgroundImage:`url(${playh2Img})`}}><h2>Играть онлайн</h2></div>
           <div className='tray__iframe-box'>
                <TrayIframe srcGame={iframeUrl}/>
           </div>
            <div className='tray__wrapper-box wrapper-box'>
                <Link to={'fullscreen'}>
                    <button className='wrapper-box__item' >
                        <div className='wrapper-box__full-screen'>
                        <img width="25px" height="25px" src={fullScreenSVG} alt="" />
                        </div>
                    </button>
                </Link>
                <button className='wrapper-box__item'>
                    <div className='wrapper-box__like'>
                        <img width="25px" height="25px" src={likeSVG} alt="" />
                    </div>
                </button>
                <button className='wrapper-box__item' onClick={handleNewWindow}>
                    <div className='wrapper-box__new-tab'>
                        <img width="25px" height="25px" src={newTabSVG} alt="" />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Tray;
