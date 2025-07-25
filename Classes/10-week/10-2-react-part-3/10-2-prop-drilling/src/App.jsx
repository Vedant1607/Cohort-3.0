import { useState } from "react";

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <>
      <div>
        <LightBulb bulbOn={bulbOn} setBulbOn={setBulbOn}/> {/* prop drilling */}
      </div>
    </>
  )
}

function LightBulb({bulbOn, setBulbOn}) {

  
  return (
    <>
      <div>
        <BulbState bulbOn={bulbOn}/>
        <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn}/>
      </div>
    </>
  )
}

function BulbState({bulbOn}) {

  return (
    <>
      <div>
        {bulbOn ? "Bulb on" : "Bulb off"}
      </div>
    </>
  )
}

function ToggleBulbState({bulbOn, setBulbOn}) {

  function toggle() {
    // both methods are correct and good

    // setBulbOn(currentState => !currentState)
    setBulbOn(!bulbOn)
  }

  return (
    <>
      <div>
        <button onClick={toggle}>Toggle the bulb</button>
      </div>
    </>
  )
}

export default App