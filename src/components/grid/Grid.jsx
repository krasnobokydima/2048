import { useEffect, useState } from "react";
import { Ceil } from "../ceil/Ceil";
import { randomNumber } from "../../gameActions/randomNumber";
import { moveUp, moveLeft, moveRight, moveDown } from "../../gameActions/keysControl";

const Grid = ({ boardWigth }) => {
  const [board, setBoard] = useState([]);

  // создать ячейки
  useEffect(() => {
    const newBoard = []
    const createBoard = () => {
      for (let i = 0; i < boardWigth ** 2; i++) {
        const yCoord = ~~(i / 4)
        const xCoord = i - yCoord * 4
  
        newBoard.push({
          value: 0,
          x: xCoord,
          y: yCoord,
          state: 'expext',
        })
      }
    }
  
    createBoard()

    setBoard([...newBoard])
  }
    , [boardWigth])

  useEffect(() => {
    const addNumber = (e) => {
      e.preventDefault()
  
      switch (e.key) {
        case 'ArrowLeft':
          moveLeft(board, setBoard)
          break
        case 'ArrowRight':
          moveRight(board, setBoard)
          break
        case 'ArrowUp':
          moveUp(board, setBoard)
          break
        case 'ArrowDown':
          moveDown(board, setBoard)
          break
        default:
          break;
      }
    }

    document.addEventListener('keydown', addNumber)

    return () => {
      document.removeEventListener('keydown', addNumber)
    }
  })


  const startGame = () => {
    setBoard([...randomNumber(randomNumber(board))])
  }

  return (
    <>
      <button style={{ marginTop: 10 }} onClick={startGame} >Start game</button>
      <div className="grid" >        
        {board.map((seil, index) => (<Ceil ceil={seil} key={index} />))}
      </div>
    </>
  )
}

export default Grid