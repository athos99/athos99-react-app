import React, {useState} from 'react';
import './MorpGame.scss';

function Square(props) {
    console.log('render square '+ props.value);
    return (
        <button className="square" onClick={props.onClick} >
            {props.value}
        </button>
    );
}



export default function MorpGame(props) {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    let stop=false;

    const  calculateWinner = (squares)=> {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const renderSquare = (i) => {
        console.log('render square ' + i);
        return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
    }

    const handleClick = (i) => {
        if ( !stop) {
            const newSquares = squares.slice();
            console.log('handle click ' + i);
            newSquares[i] = xIsNext ? 'X' : 'O';
            console.log(squares, newSquares);
            setSquare(newSquares);
            setXIsNext(!xIsNext);
        }
    }
    console.log('morpgame render');
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = winner + ' a gagné';
        stop=true;
    } else {
        status = 'Prochain joueur : ' + (xIsNext ? 'X' : 'O');
    }    return (
        <div className="morpgame">
            <div className="status">{status}</div>
            <div className="status"></div>
            <div className="board-row">
                {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
            </div>
        </div>
    );
}