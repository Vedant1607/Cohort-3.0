import React, { useState, useEffect } from 'react';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(function() {
      setShowTimer(currentValue => !currentValue);
    }, 5000);
  }, [])

  return (
    <div>
      {showTimer && <Timer/>}
    </div>
  )
}

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          console.log("From inside clock")
          setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on unmount

    }, []);

    return <div>{seconds} seconds elapsed</div>;
};

export default App