import {useState,lazy,Suspense} from 'react';
import "./style.css"

const Info = lazy(() => import('./Info'));
const Description = lazy(() => import('./Description'));
const Tray = lazy(() => import('./Tray'));
const SimilarGames = lazy(() => import('./SimilarGames'));
const FullScreen = lazy(() => import('./FullScreen'));


const GamePlay = ({info=[], content}) => {
    const [isFullscreen,setIsFullscreen] = useState(false)
    return (
        <div className='game-play'>
            {
                isFullscreen?
                    <Suspense  fallback={<div>Loading...</div>}>
                        <FullScreen info={info[0]} setIsFullscreen={setIsFullscreen}/>
                    </Suspense>
                :
                <Suspense  fallback={<div>Loading...</div>}>
                    <Info info={info[0]}/>
                    <Description info={info[0]}/>
                    <Tray setIsFullscreen={setIsFullscreen} info={info[0]}/>
                    <SimilarGames  info={info} content={content}/>
                </Suspense>
            }
        </div>
    );
}

export default GamePlay;
