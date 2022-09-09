import './index.css';
import data from './data.json'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import React from 'react'

var day = data.map(data=>{
  return {time:data.timeframes.daily,title:data.title,period:'Day'}
})


function App() {
  console.log(day);

  const [time,setTime] = React.useState(day)

  const datas = day.map(data=>{
    return <Card title={data.title} time={data.time} period={data.period}/>
  })

 function handleClick(id){
  day = data.map(data=>{
    var value 
    switch (id) {
      case 1: value = data.timeframes.daily; break;
      case 2: value = data.timeframes.weekly; break;
      case 3: value = data.timeframes.monthly; break;
      default:
        break;
    }
    return {time:value,title:data.title,period:id===1?'Day':id===2?'Week':'Month'}
  })
  setTime(day)
}

React.useEffect(()=>{

},[time])

  return (
    <div className="App">
      <Sidebar click={handleClick} period={day[0].period}/>
      <Card />
      {datas}
    </div>
  );
}

export default App;
