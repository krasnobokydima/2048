const Result = ({gameOver}) => {
  return (
    <h2>
      {!gameOver && 'you lose!'}
    </h2>
  )
}

export default Result