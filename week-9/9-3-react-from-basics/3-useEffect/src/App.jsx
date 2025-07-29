import { useState, useEffect } from "react";

function App(){
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  function increaseCount () {
    setCount(prev => prev + 1);
    // setCount(count + 1); // wrong method
  }

  function decreaseCount() {
    setCount2(prev => prev - 1);
  }

  useEffect(function(){
    console.log("above setInterval");
    setInterval(increaseCount, 1000);
    setInterval(decreaseCount, 3000);
  },[]) // this effect will run on mount, because the array is empty

  useEffect(function() {
    console.log("The count has been updated to " + count);
    console.log("The count has been updated to " + count2);
  }, [count]);

  return (
    <div>
      <div style={{display:"flex"}}>
        <div style={{borderRadius:20, width:20, height:25,
          paddingLeft:10, paddingTop:10}}>
          {count} {count2}
        </div>
      </div>
      <img style={{cursor:"pointer", borderRadius:50, width:200}} src="https://imgs.search.brave.com/AeFwdkymko_AslXVfaX-E_J6Tw1PwHd4AYITtnfl3zs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEwLzc0LzExLzAw/LzM2MF9GXzEwNzQx/MTAwNzVfQW83bkJr/WmlOUW5rVkhlaUVK/RWlHVXM0eWFEN0xY/WWMuanBn"/>
    </div>
  )

}

export default App