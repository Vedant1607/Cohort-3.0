import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Part 1
/*
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
  )*/


    // Part 2

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    function increase() {
      setCount(c => c + 1);
    }

    function decrease() {
      setCount2(c => c - 1);
    }

    return (
      <div>
        <Counter count = {count} count2={count2}/>
        <button onClick={increase}>Increase count</button>
        <button onClick={decrease}>Decrease count</button>
      </div>
    )
}

// mounting, re-rendering, unmounting
function Counter(props) {

  // Part 1

  /*

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
  )*/



    // Part 2

    useEffect(function() {
      console.log("mount");

      return function() {
        console.log("unmount");
      }
    }, []);

    useEffect(function() {
      console.log("count has changed");

      return function() {
        console.log("cleanup inside second useeffect")
      }
    }, [props.count]);

    return (
      <div>
        Counter {props.count} <br/>
        Counter2 {props.count2} <br/>
      </div>
    )

}

export default App
