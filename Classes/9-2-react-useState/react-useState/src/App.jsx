import { useState, useEffect } from 'react'
import './App.css'

function App() {

  // conditional rendering
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setCounterVisible(c => !c)
    }, 5000)
  }, [])

  return (
    <div>
      {counterVisible ? <Counter></Counter> : null}
    </div>
  )
}

// mounting, re-rendering, unmounting
function Counter() {

  const [count, setCount] = useState(0);

  useEffect(function(){ // this logic runs on mount if dependency is an empty array
    console.log("on mount")
    let clock = setInterval(() => {
      console.log("inside mount")
      setCount(count => count + 1);
    }, 1000);
    console.log("mounted");

    return function() { // this logic runs on unmount if dependency is an empty array
      console.log("on unmount")
      clearInterval(clock);
    }
  },[]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default App
