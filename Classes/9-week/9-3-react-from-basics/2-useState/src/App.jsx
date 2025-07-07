import React, { useState } from 'react';
import { PostComponent } from './Post';

function App() {

  const [posts, setPosts] = useState([]);
  // everytime posts state changes, app component re-renders

  const postComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost(){
    setPosts([...posts,{
    name:"harkirat",
    subtitle:"10000 followers",
    time:"2h ago",
    image:"freeCodeCamp.jpg",
    description:"What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }
  
  return (
    <div style={{background:"#dfe6e9", height:"100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{ display: "flex", justifyContent:"center"}}>
        <div>
          <div>
            {postComponents}
            <br/> 
          </div>
        </div>
      </div>
    </div>
  )
}


// Notification Count Component
/*
return (
    <div style={{ backgroundColor: "#bdc3c7", height: "100vh" }}>
      <ToggleMessage/>
      <ToggleMessage/>
      <ToggleMessage/>
    </div>
  )
*/
/*
const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return (
      <div>
          <button onClick={increment}>
              Increase count
          </button>
          {notificationCount}
      </div>
  );
};
*/

// 1. starting a react project locally, components, conditional rendering
/*{ <div style={{ display: "flex", justifyContent:"center"}}>
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
        // </div>}
      // </div>*/

// const style = { width: 200, backgroundColor:"white", borderRadius:10, borderColor:"grey", borderWidth:1,
//   padding:20
//  };
/*
// function PostComponent({name, subtitle, time, image, description}) {

//   return (
//     <div style={style}>
//       <div style={{ display: "flex"}}>
//         <img src={image}
//         style={{
//           width:50,
//           height:50,
//           borderRadius:20
//         }}/>

//         <div style={{ fontSize: 10, marginLeft: 10 }}>
//           <b>{name}</b>
//           <div>{subtitle}</div>
//           {(time !== undefined) ? <div style={{display:"flex"}}>
//             <div>{time}</div>
//             <img src='https://imgs.search.brave.com/qFyOweU5pSU8nXPP_Pj_g0sClgE1rUU1JZV5rXXgxpE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzEyLzg5LzM1LzY0/LzM2MF9GXzEyODkz/NTY0NTlfWkRkTlpm/MllPdTdKb0J2TXVN/bkptVEtDMVNwTDJs/Wk0uanBn'
//             style={{width:30, height:20}}/>
//           </div>:null}
//         </div>

//       </div>
//       <div style={{ fontSize: 12 }}>
//         {description}
//       </div>
//     </div>
//   )
// }

// structuring your app into components
// defining a state of your application*/

export default App
