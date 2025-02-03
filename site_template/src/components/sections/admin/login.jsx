import React, { useState } from "react";
import { auth } from "../../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center border-4 border-gray-200 p-4 h-1/4 w-1/4"
      >
        <h2>Login</h2>
        <div className="flex flex-col w-min">
          <label className="">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" mb-2 p-2 border-2 border-gray-200"
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-2 p-2 border-2 border-gray-200"
            />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
