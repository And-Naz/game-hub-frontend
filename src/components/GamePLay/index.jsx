import {useState,lazy,Suspense,useEffect,useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import "./style.css"

const Info = lazy(() => import('./Info'));
const Description = lazy(() => import('./Description'));
const Tray = lazy(() => import('./Tray'));
const SimilarGames = lazy(() => import('../ui/SimilarGames'));
const FullScreen = lazy(() => import('./FullScreen'));

const GamePlay = ({info={}, content, similarGames=[],params}) => {
    const [isFullscreen,setIsFullscreen] = useState('small')
    const navigate = useNavigate() 
    const onClose = useCallback(() => {
        navigate('./')
    },[])
    useEffect(()=>{
        if(params.screen){
            setIsFullscreen(params.screen)
        }else{
            setIsFullscreen('small')
        }
    },[params])
    return (
        <>

            <div className='game-play'>
                {
                    isFullscreen === 'fullscreen'?
                        <Suspense  fallback={<div>Loading...</div>}>
                            <div className='game-play__full-screen-box'>
                                <FullScreen iframeUrl={info.src} goBack={onClose}/>
                            </div>
                        </Suspense>
                    :
                        <Suspense  fallback={<div>Loading...</div>}>
                            <div className='game-play__screen-box'>
                                <Info info={info}/>
                                <Description description={info.description}/>
                                <Tray iframeUrl={info.src} goBack={onClose}/>
                                <SimilarGames  info={similarGames} content={content}/>
                            </div>
                        </Suspense>
                    }
            </div>
            
        </>

    );
}

export default GamePlay;
