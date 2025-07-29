import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // normal DOM manipulation in JS
  // it't not react
  /*
  function onclickHandler() {
    const currentValue = document.getElementById('btn').innerHTML;
    const currentCounter = currentValue.split(" ")[1];
    const newCounter = parseInt(currentCounter) + 1;
    document.getElementById("btn").innerHTML = `Counter ${newCounter}`;
  }*/

  // This is jsx syntax which is used in React
  const [count, setCount] = useState(0); // hook

  function onclickHandler() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={onclickHandler}>
        Counter {count}
      </button>
    </div>
  );
}

export default App;
