import React, { useState } from 'react';
import Board from "./board";
import Winner from "./winner";
import './style.css'
import YouWin from "./youwin";

function TicTacToe() {
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = Winner(history[stepNumber]);
    const X0 = xIsNext ? 'X' : 'O';

    const handleClick= (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        if(winner || squares[i]) return;

        squares[i] = X0;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    };

    // const jumpTo = (step) => {
    //     setStepNumber(step);
    //     setXIsNext(step % 2 === 0);
    // };
    //
    // const renderMoves = () =>
    //     history.map((_step, move) => {
    //         const destination = move ? `Go to move #${move}` : `Go to Start`;
    //         return (
    //             <li key={move}>
    //                 <button onClick={() => jumpTo(move)}>{destination}</button>
    //             </li>
    //         );
    //     });

    const refreshPage = () => {
        window.location.reload(false);
    }


    return (
        <>
            <h1 className='game_header'>Tic - Tac - Toe</h1>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div className='game_info__wrapper'>
                <button onClick={refreshPage}>Restart</button>
                <h3>{winner ? <YouWin winner={winner} refreshPage={refreshPage} /> : 'Next Player: ' + X0}</h3>
            </div>
        </>
    );
}

export default TicTacToe;
