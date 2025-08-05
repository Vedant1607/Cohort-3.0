import { useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import EmailForm from './components/EmailForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-slate-900 w-full flex flex-col items-center justify-center'>
      <Logo/>
      <EmailForm/>
    </div>
  )
}

export default App
