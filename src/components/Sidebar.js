import React from 'react'

const Sidebar = (props) => {

  console.log(props.period);
  const styles={
    color:'#fff'
  }
  return (
    <div className='sideBar'>
      <div className='user-info'>
        <img src={require('./../images/image-jeremy.png')} alt ="vector"/>
        <div className='name'>
          <h5>Report for</h5>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className='btns'>
        <button style={props.period==='Day'?styles:[]} onClick={()=>props.click(1)}>Daily</button>
        <button style={props.period==='Week'?styles:[]} onClick={()=>props.click(2)}>Weekly</button>
        <button style={props.period==='Month'?styles:[]} onClick={()=>props.click(3)}>Monthly</button>
      </div>
    </div>
  )
}

export default Sidebar