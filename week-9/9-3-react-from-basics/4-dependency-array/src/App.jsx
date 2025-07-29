import { useState, useEffect } from "react";

function App(){

  const [currentTab, setCurrentTab] = useState(1);
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    // send a backend request to get data for this tab
    console.log("send request to backend to get data for tab " + currentTab);
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
    .then(async res => {
      const json = await res.json();
      setTabData(json);
      setLoading(false);
    });
  }, [currentTab]);

  return (
    <div>
      <button onClick={() => setCurrentTab(1)} style={{color:currentTab == 1 ? "red" : "black"}}>todo1</button>
      <button onClick={() => setCurrentTab(2)} style={{color:currentTab == 2 ? "red" : "black"}}>todo2</button>
      <button onClick={() => setCurrentTab(3)} style={{color:currentTab == 3 ? "red":"black"}}>todo3</button>
      <button onClick={() => setCurrentTab(4)} style={{color:currentTab == 4 ? "red" : "black"}}>todo4</button>

      <br/>

      {!loading ? tabData.title:"loading..."}
    </div>
  )

}

export default App