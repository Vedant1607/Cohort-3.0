import axios from "axios";

export default async function Profile() {
  //   const res = await axios.get("/api/profile", {
  //     headers: {
  //       Authorization: localStorage.getItem("item"),
  //     },
  //   });

  // We Cannot use localstorage on Server Side Rendering
  const profilePicture = "cat";
  return <div>{profilePicture}</div>;
}
