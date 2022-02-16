import React, { useCallback,useRef,useEffect } from 'react';
import dinoGIF from "../Assets/Dino.gif"
import cactusPNG from "../Assets/cactus.png"
import './style.css'

const Game = () => {
    const board = useRef()
    const dino = useRef()
    const cactus = useRef()
    const start = () =>{
        cactus.current.classList.add('cactus-run')
        isAlive()
    }
    const isAlive = ()=>{setInterval(()=>{
        if(dino.current){
            let dinoTop = parseInt(window.getComputedStyle(dino.current).getPropertyValue("top"))
            let cactusLeft = parseInt(window.getComputedStyle(cactus.current).getPropertyValue("left"))
            console.log(dinoTop)
            if(cactusLeft<50 && cactusLeft>0 && dinoTop>= 250){
                console.log('col')
                cactus.current.style.left = `105px`
                cactus.current.classList.remove('cactus-run')
            }
        }
    },10)}
    const jump = useCallback(() =>{
        if(dino.current.classList[1] !== 'jump'){
            dino.current.classList.add('jump')
            start()
            setTimeout(()=>{
                dino.current.classList.remove('jump')
            },300)
        }
    })
    useEffect(() => {
       document.addEventListener("keydown", jump)
    }, []);
    return (
        <div className='game' ref={board}>
            <div className="dino-gif" ref={dino} style={{backgroundImage:`url('${dinoGIF}')`}}>
            </div>
            <div className='cactus-png' ref={cactus} style={{backgroundImage:`url('${cactusPNG}')`}}></div>
        </div>
    );
}

export default Game;
