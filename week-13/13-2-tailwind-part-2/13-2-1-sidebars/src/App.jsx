import { useState } from 'react'
import './App.css'
import SidebarClass1 from './components/1-basic-project'
import SidebarTransition from './components/SidebarTransition'
import DarkMode from './components/DarkMode'
import SideBarToggle from './components/SideBarToggle'

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  return (
    <div className='flex'>
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
      <MainContent sideBarOpen={sideBarOpen}/>
    </div>
  )
}


function Sidebar({sideBarOpen, setSideBarOpen}){

  if (sideBarOpen){
    return (
        <div className="w-96 h-screen bg-red-100">
          <div>
            <div className='cursor-pointer hover:bg-slate-300'
            onClick={() => {
              setSideBarOpen(!sideBarOpen)
            }}>
              <SideBarToggle/>
            </div>
          </div>
        </div>
    )
  } else {
    return (
      <div className='fixed top-0 left-0'>
        <div className='cursor-pointer hover:bg-slate-300'
        onClick={() => {
          setSideBarOpen(!sideBarOpen)
        }}>
          <SideBarToggle/>
        </div>
      </div>
    )
  }
}

function MainContent ({sideBarOpen}) {
  return (
    <div className='w-full'>
      <div className='h-50 bg-black'></div>

      <div className='grid grid-cols-11 gap-8'>
        <div className='h-96 rounded-2xl shadow-lg bg-red-600 col-span-2 -translate-y-24'></div>

        <div className='h-96 rounded-2xl shadow-lg bg-green-600 col-span-6'></div>

        <div className='h-96 rounded-2xl shadow-lg bg-yellow-600 col-span-3'></div>
      </div>
    </div>
  )
}

export default App
