"use client";
import axios from "axios";

export default function () {
  return (
    <div>
      Signin Page
      <br />
      <input></input>
      <input></input>
      <button
        onClick={async () => {
          const res = await axios.post("http://localhost:3000/api/signin", {
            username: "asd",
            password: "asdfaf",
          });
          localStorage.setItem("token", res.data.token);
        }}
      >
        Sign in
      </button>
    </div>
  );
}
