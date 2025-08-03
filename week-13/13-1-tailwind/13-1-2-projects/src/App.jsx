import { useState } from 'react'
import './App.css'
import { Button } from './components/button'
import { Input } from './components/input'

function App() {

  return (
    <div className='h-screen bg-blue-700'>
      <br/><br/>
      <Input type="text" placeholder={"Username"}></Input>
      <br/>
      <Button disabled={true}>Sign Up</Button>
    </div>
  )
}

export default App
