
import './App.css';
import { useEffect, useState } from 'react';

function format(time){
  let mins=Math.floor(time/60);
  let sec=time%60;
  
  return `${mins}:${sec<10?'0': ''}${sec}`
}

function App() {
  const [isStart,setStart] = useState(false);
  const [display,setDisplay]=useState(0);

  function timerControl(){
    setStart(!isStart)
  }

  useEffect(() => {
    let time;

    if(isStart){

      time=setInterval(()=>{
        setDisplay((prev)=> prev+1)

      },1000)
    }
    else
    clearInterval(time);

    return () => clearInterval(time);

    },[isStart])

    function reset(){
      setStart(false)
      setDisplay(0)

    }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h3>Time: {format(display)}</h3>
      <button onClick={timerControl}>{isStart ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
      
    </div>
  );
}

export default App;
