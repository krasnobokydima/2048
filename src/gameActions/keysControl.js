import { cloneDeep } from "lodash"
import { randomNumber } from "./randomNumber"

export const moveUp = (board, setBoard) => {
  const newBoard = cloneDeep(board)
  let i = 4

  while (i < 16) {
    let currentCeil = newBoard[i]
    let previousCeil =  newBoard[i - 4]

    if (previousCeil.value === 0 && currentCeil.value > 0) {
      previousCeil.value = currentCeil.value
      currentCeil.value = 0
      i = 4;
    }

    if (previousCeil.value !== 0 && previousCeil.value === currentCeil.value) {
      previousCeil.value *= 2 
      currentCeil.value = 0
      i = 4;
    } else {
      i++
    }
  }
 
  setBoard([...randomNumber(newBoard)])
}

export const moveDown = (board, setBoard) => {
  const newBoard = cloneDeep(board)
  let i = 0

  while (i < 12) {
    let currentCeil = newBoard[i]
    let nextCeil =  newBoard[i + 4]

    if (nextCeil.value === 0 && currentCeil.value > 0) {
      nextCeil.value = currentCeil.value
      currentCeil.value = 0
      i = 0;
    }

    if (nextCeil.value !== 0 && nextCeil.value === currentCeil.value) {
      nextCeil.value *= 2 
      currentCeil.value = 0
      i = 0;
    } else {
      i++
    }
  }
 
  setBoard([...randomNumber(newBoard)])
}

export const moveLeft = (board, setBoard) => {
  const newBoard = cloneDeep(board)

  for (let i = 1; i < board.length; i++) {
    let currentCeil = newBoard[i]
    let previousCeil =  newBoard[i - 1]

    if (previousCeil.y === currentCeil.y && currentCeil.value !== 0) 
      if (previousCeil.value === 0 && currentCeil.value > 0) {
        previousCeil.value = currentCeil.value
        currentCeil.value = 0
        i = 1
      }

    if (previousCeil.value === currentCeil.value && currentCeil.value > 0) {
      previousCeil.value *= 2
      currentCeil.value = 0
      i = 1
    }
  }

  setBoard([...randomNumber(newBoard)])
}

export const moveRight = (board, setBoard) => {
  const newBoard = cloneDeep(board)

  for (let i = board.length - 2; i > -1; i--) {
    let currentCeil = newBoard[i]
    let nextCeil =  newBoard[i + 1]

    console.log(currentCeil, nextCeil)

    if (nextCeil.y === currentCeil.y && currentCeil.value !== 0) {

      if (nextCeil.value === 0 && currentCeil.value > 0) {
        console.log(nextCeil, currentCeil)
        nextCeil.value = currentCeil.value

        currentCeil.value = 0
        i = board.length - 2
      }

      if (nextCeil.value === currentCeil.value && currentCeil.value > 0) {
        nextCeil.value *= 2
        currentCeil.value = 0
        i = board.length - 2
      }
    }
  }

  setBoard([...randomNumber(newBoard)])
}
