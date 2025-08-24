import { useEffect, useState } from 'react'
import './App.css'
import SidebarClass1 from './components/1-basic-project'
import SidebarTransition from './components/SidebarTransition'
import DarkMode from './components/DarkMode'
import SideBarToggle from './components/SideBarToggle'

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const isDesktop = useMediaQuery("(min-width:768px");

  useEffect(() => {
    if (isDesktop === false){
      setSideBarOpen(false);
    } else {
      setSideBarOpen(true);
    }
  }, [isDesktop])

  return (
    <div className='flex'>
      <Sidebar sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen}/>
      <MainContent sideBarOpen={sideBarOpen}/>
    </div>
  )
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
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
      <div className='h-50 bg-black hidden md:block'></div>

      <div className='grid grid-cols-11 gap-8 p-8'>
        <div className='h-96 rounded-2xl shadow-lg bg-red-600 md:col-span-2 -translate-y-24 col-span-11 hidden md:block'></div>

        <div className='h-96 rounded-2xl shadow-lg bg-green-600 md:col-span-6 col-span-11'></div>

        <div className='h-96 rounded-2xl shadow-lg bg-yellow-600 md:col-span-3 col-span-11'></div>
      </div>
    </div>
  )
}

export default App
