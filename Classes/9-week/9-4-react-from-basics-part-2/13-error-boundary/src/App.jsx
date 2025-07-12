import React, { useEffect } from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{background:"red", borderRadius:10, padding:10}}>Something went wrong.</h1>;
        }

        return this.props.children; 
    }
}

function Card1() {
  // useEffect(()=>{},[]);

  throw new Error("Error while rendering")
  return (
    <div style={{background:"red", borderRadius:10, padding:10}}> Hi There</div>
  )
}

function Card2() {
  return (
    <div style={{background:"red", borderRadius:10, padding:10}}> Hello</div>
  )
}

const App = () => {
    return (
      <div>
        <ErrorBoundary>
          <Card1/>
        </ErrorBoundary>
        <Card2/>
      </div>
    );
};

export default App