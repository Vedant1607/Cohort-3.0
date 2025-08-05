import './App.css'
import Logo from './components/Logo'
import AgeInput from './components/AgeInput'
import AgeVerify from './components/AgeVerify';

function App() {

  return (
    <div className='min-h-screen w-full flex flex-col items-center justify-center bg-slate-900'>
      <Logo/>
      <AgeVerify/>
    </div>
  );
}

export default App
