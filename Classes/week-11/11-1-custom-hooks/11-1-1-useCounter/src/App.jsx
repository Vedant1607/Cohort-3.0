import { useState } from 'react'

// custom hook
function useCounter() {
  const [count, setCount] = useState(0);
  
  function increaseCount() {
    setCount(prev => prev + 1);
  }

  return {
    count: count,
    increaseCount: increaseCount,
  }

}

function App() {

  const {count, increaseCount} = useCounter();
  
  return (
    <>
      <div>
        <button onClick={increaseCount}>Increase {count}</button>
      </div>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>

      <br/>

      <Counter2/>
    </>
  )
}

function Counter () {
  const {count, increaseCount} = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}
function Counter2 () {
  const {count, increaseCount} = useCounter();

  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default App
