import React from 'react'
import src from './../images/icon-ellipsis.svg'

const Card = ({title,time,period}) => {
  // console.log(time);
  if(!title)
  return
  return (
    <main className='card'>
      <div className={title==="Self Care"?"selfCare":title}>
      <img src={require(`./../images/icon-${title}.svg`)} alt={title}/>
      </div>
      <div className='detail'>
      <div className='title'>
        <span>{title}</span>
        <img src={src} alt="ssa"/>
      </div>
    <div className='times'>
      <h1 className='current-hrs'>{time.current}hrs</h1>
      <h5 className='pervious-hrs'>Last {period} - {time.previous}hrs</h5>
    </div>
      </div>
    </main>
  )
}

export default Card