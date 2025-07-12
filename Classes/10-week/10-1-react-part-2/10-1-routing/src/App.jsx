import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export default function App() {

  return(
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/neet" element={<Layout/>}>
              <Route path="/neet/online-coaching-class-11" element={<Class11Program/>}></Route>
              <Route path="/neet/online-coaching-class-12" element={<Class12Program/>}></Route>
              <Route path="/neet" element={<Landing/>}></Route>
              <Route path="*" element={<ErrorPage/>}></Route>
            </Route>
          </Routes>
          Footer | Contact us
        </BrowserRouter>
      </div>
    </>
  )
}

function Layout () {
  return <div style={{height:"100vh", background:"green"}}>
    <Header/>
    <div style={{height:"90vh", background:"red"}}>
      {/* Components will be wrapped inside outlet component */}
      <Outlet/>
    </div>
    Footer
  </div>
}

function Header(){
  return(
    <div>
      <Link to={"/neet"}>Allen</Link>
      <Link to={"/neet/online-coaching-class-11"}>Class 11</Link>
      <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
    </div>
  )
}

function Class11Program() {
  return(
    <>
      <div>
        NEET programs for Class 11th
      </div>
    </>
  )
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/")
  }
  return (
    <>
      <div>
        NEET programs for Class 12th
        <button onClick={redirectUser}>Go back to landing page</button>
      </div>
    </>
  )
}

function Landing() {
  return (
    <>
      <div>
        Welcome to Allen
      </div>
    </>
  )
}

function ErrorPage() {
  return (
    <div>
      Sorry page not found
    </div>
  )
}