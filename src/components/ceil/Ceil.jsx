export const Ceil = ({ ceil }) => {
  const classNames = ceil.value > 0
    ? `block block--active block--active-${ceil.value}`
    : 'block';

  const ceilStyle = {  
    background: `rgb(255, ${255 - (ceil.value * 255 / 8192) | 0}, 120)`,

    fontSize: ceil.value > 1000 ? '2rem' : '3rem',
    transform: `translate(${ceil.x * 100}px, ${ceil.y * 100}px)`,
  }

  return (
    <>
      <div className='block'></div>
      {ceil.value !==0 && 
        <div
          className={classNames} style={ceilStyle}>{ceil.value}</div>
      }
    </>   
  )
}



