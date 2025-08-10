import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MyComponent/>
  )

}

const MyComponent = () => {
    return ( // use this way to use fragments rather than use div
        <>
            <h1>Hello</h1>
            <p>World</p>
        </>
    );
};

export default App
