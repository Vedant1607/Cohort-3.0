import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Flex */}
      {/* <div style={{display:"flex", justifyContent:"space-between"}}> */}
      {/* <div className='flex justify-between'>
        <div>child 1</div>
        <div>child 2</div>
        <div>child 3</div>
      </div>
      {/* Grid */}
      {/* <div className='grid grid-cols-12'>
        <div className='bg-blue-300 col-span-6'>Hi</div>
        <div className='bg-red-300 col-span-4'>Hi</div>
        <div className='bg-green-300 col-span-2'>Hi</div>
      </div> */}
      {/* Prefix */}
      {/* <div className='xl:bg-yellow-300 md:bg-green-300 sm:bg-blue-300 bg-red-300'>Hi there</div> } */}

      {/* Use Case */}
      <div className='sm:grid sm:grid-cols-3 sm:gap-4'>
        <div className='bg-green-300 p-4 rounded text-xl'>Hi</div>
        <div className='bg-red-500 p-4 rounded'>Hi</div>
        <div className='bg-pink-300 p-4 rounded'>Hi</div>
      </div>
    </>
  )
}

export default App
