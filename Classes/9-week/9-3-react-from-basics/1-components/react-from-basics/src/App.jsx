import { useState } from 'react'

function App() {

  // props
  return (
    <div style={{ backgroundColor: "#bdc3c7", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent:"center"}}>
        <div>
          <div>
            <PostComponent
            name={"harkirat"}
            subtitle={"20 followers"}
            time={"2m ago"}
            image={"/public/freeCodeCamp.jpg"}
            description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
            />
            <br/> 
          </div>
          <div>
            <PostComponent
            name={"harkirat"}
            subtitle={"Promoted"}
            image={"/public/freeCodeCamp.jpg"}
            description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
            />
            <br/> 
          </div>
        </div>
      </div>
    </div>
  )
}

const style = { width: 200, backgroundColor:"white", borderRadius:10, borderColor:"grey", borderWidth:1,
  padding:20
 };

function PostComponent({name, subtitle, time, image, description}) {

  return (
    <div style={style}>
      <div style={{ display: "flex"}}>
        <img src={image}
        style={{
          width:50,
          height:50,
          borderRadius:20
        }}/>

        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {(time !== undefined) ? <div style={{display:"flex"}}>
            <div>{time}</div>
            <img src='https://imgs.search.brave.com/qFyOweU5pSU8nXPP_Pj_g0sClgE1rUU1JZV5rXXgxpE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzg5LzM1LzY0/LzM2MF9GXzEyODkz/NTY0NTlfWkRkTlpm/MllPdTdKb0J2TXVN/bkptVEtDMVNwTDJs/Wk0uanBn'
            style={{width:30, height:20}}/>
          </div>:null}
        </div>

      </div>
      <div style={{ fontSize: 12 }}>
        {description}
      </div>
    </div>
  )
}

function ProfileCard() {
  
}

// structuring your app into components
// defining a state of your application
export default App
