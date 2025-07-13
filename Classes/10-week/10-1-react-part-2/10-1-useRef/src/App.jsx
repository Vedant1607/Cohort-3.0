import { useRef, useState } from "react";

export default function App() {

  const inputRef = useRef();
  // useRef
  // reference to a value, such that when u change the value, the component DOEST NOT RE-RENDER

  function focusOnInput() {
    // document.getElementById('name').focus()
    inputRef.current.focus()
  }

  return(
    <>
      <div>
        Sign up
        <input ref={inputRef} type="text"></input>
        <input type="text"></input>
        <button onClick={focusOnInput}>Submit</button>
      </div>

      <br/>
      <br/>
      <Stopwatch/>
    </>
  )
}

// ugly code

function Stopwatch() {
  const [currentCount, setCurrentCount] = useState(0);
  let timerRef = useRef(null);

  function startClock() {
    if (timerRef.current !== null) return;

    let value = setInterval(function() {
      setCurrentCount(prev => prev + 1);
    },1000);
    timerRef.current = value;
  }
  
  function stopClock(){
    clearInterval(timerRef.current);
    timerRef.current = null
  }

  return (
    <>
      <div>
        {currentCount}
        <br/>
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
      </div>
    </>
  )
}
