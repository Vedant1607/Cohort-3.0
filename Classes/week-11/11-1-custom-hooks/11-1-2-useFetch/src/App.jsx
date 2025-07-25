import { useEffect, useState } from 'react'
import { usePostTitle } from './hooks/useFetch';

function App() {

  const postTitle = usePostTitle();

  return (
    <>
      <div>
        {postTitle}
      </div>
    </>
  )
}

export default App
