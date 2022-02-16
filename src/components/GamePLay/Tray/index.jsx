import TrayIframe from '../TrayIframe';
import playh2Img from "../../../assets/tray/playh2.png"
import fullScreenSVG from "../../../assets/tray/fullscreen.svg"
import likeSVG from "../../../assets/tray/like.svg"
import newTabSVG from "../../../assets/tray/newtab.svg"
import { useCallback } from 'react';
import "./style.css"

const Tray = ({setIsFullscreen,info=[]}) => {
    const handleFullscreen = useCallback(()=>{
        setIsFullscreen(prev=>prev=!prev)
    })
    const handleNewWindow = useCallback(()=>{
        window.open('http://localhost:3000/');
    })
    return (
        <div className='game-play__tray tray'>
           <div className="tray__playh2" style={{backgroundImage:`url(${playh2Img})`}}><h2>Играть онлайн</h2></div>
           <div className='tray__iframe-box'>
                <TrayIframe srcGame={info.src}/>
           </div>
            <div className='tray__wrapper-box wrapper-box'>
                <button className='wrapper-box__item' onClick={handleFullscreen}>
                    <div className='wrapper-box__full-screen'>
                      <img width="25px" height="25px" src={fullScreenSVG} alt="" />
                    </div>
                </button>
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
