import { useEffect, useState } from "react";

const App = () => {

  return (
    <div>
      {[
        <Todo key={1} title={"Go to gym"} done={false}/>,
        <Todo key={2} title={"Eat food"} done={true}/>
      ]}
    </div>
  )
}

function Todo({title, done}) {
  return (
    <div>
      {title} - {done?"Done":"Not Done"}
    </div>
  )
}

export default App;