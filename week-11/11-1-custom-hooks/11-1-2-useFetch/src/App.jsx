import { useEffect, useRef, useState } from 'react'
import { usePostTitle, useFetch } from './hooks/useFetch';
import { usePrev } from './hooks/usePrev';
import { useDebounce } from './hooks/useDebounce';

// function useDebounce(originalFn) {

//   const currentClock = useRef();
  
//   const fn = () => {
//     clearTimeout(currentClock.current);
//     currentClock.current = setTimeout(originalFn, 300)
//   }
// }

function App() {

  const [currentPost, setCurrentPost] = useState(1);
  const postTitle = usePostTitle();

  const [state, setState] = useState(0);
  const prev = usePrev(state);

  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 2000);

  const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`, 10);

  // Debounce
  // function sendDataToBackend(){
  //   fetch("api.amazon.com/search/")
  // }

  const debouncedFn = useDebounce();

  function change(e){
    setInputVal(e.target.value);
  }

  // if (loading) {
  //   return <div>
  //     Loading...
  //   </div>
  // }

  return (
    <>
      {/* <div>
        {postTitle}
      </div>
      <div>
        <button onClick={() => setCurrentPost(1)}>1</button>
        <button onClick={() => setCurrentPost(2)}>2</button>
        <button onClick={() => setCurrentPost(3)}>3</button>
        {JSON.stringify(finalData)}
      </div> */}

      <br/>
      <br/>
      <br/>
      <br/>
      <h1>usePrev Hook</h1>
      <p>{state}</p>
      <button onClick={() => {
        setState(curr => curr + 1);
      }}>Click</button>
      <p>The previous value was {prev}</p>

      <br/>
      <br/>
      <br/>
      <br/>
      <h1>useDebounce</h1>
      <input type='text' onChange={debouncedFn}></input>
      <br/>
      <br/>
      <br/>
      <h2>useDebounce 2</h2>
      <input type='text' onChange={change}></input>
    </>
  )
}

export default App
