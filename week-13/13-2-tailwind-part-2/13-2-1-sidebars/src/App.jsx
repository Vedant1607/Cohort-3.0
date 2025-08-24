import { useState } from 'react'
import './App.css'
import SidebarClass1 from './components/1-basic-project'
import SidebarTransition from './components/SidebarTransition'
import DarkMode from './components/DarkMode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DarkMode/>
      {/* <SidebarClass1/> */}
      {/* <SidebarTransition/> */}
    </>
  )
}

export default App
