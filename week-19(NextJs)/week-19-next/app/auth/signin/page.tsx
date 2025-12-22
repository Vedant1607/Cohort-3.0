"use client";

import axios from "axios";
import { useState } from "react";

export default function Signin() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-6 flex flex-col gap-3">
        <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setUsername(e.target.value)} />
        <button onClick={() => {
          console.log(username, password);
          axios.post("http://localhost:3000/api/v1/user/signup", {
            username,
            password
          })
        }} className="mt-2 border p-2">
          Sign In
        </button>
      </div>
    </div>
  );
}
