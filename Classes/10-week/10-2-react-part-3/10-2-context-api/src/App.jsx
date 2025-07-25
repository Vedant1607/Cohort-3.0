import { useState, createContext, useContext } from "react";

// Context API
const BulbContext = createContext();

// context provider wrapper
function BulbProvider({children}) {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setBulbOn:setBulbOn
    }}>
      {children}
    </BulbContext.Provider>
  )
  
}

function App() {
  // const [bulbOn, setBulbOn] = useState(true);

  return (
    <>
      <BulbProvider>
        <Light />
      </BulbProvider>
    </>
  )
}

function Light() {


  return (
    <>
      <LightBulb/>
      <LightSwitch/>
    </>
  )
}

function LightBulb() {

  const { bulbOn } = useContext(BulbContext);
  
  return (
    <>
      <div>
        {bulbOn ? "Bulb on" : "Bulb off"}
      </div>
    </>
  )
}

function LightSwitch() {
  
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  
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