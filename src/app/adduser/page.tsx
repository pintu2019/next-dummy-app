"use client";

import { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const addUser = async () => {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        age,
      }),
    });
    const data = await response.json();
    console.log("User added:", data);
  };

  return (
    <div>
      <h1> Add User</h1>
      <input
        type="text"
        placeholder="Enter user name"
        value={name}
        className="border border-black"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter user email"
        value={email}
        className="border border-black"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter user age"
        value={age}
        className="border border-black"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />
      <button type="submit" className="bg-blue-500 p-4 mb-2" onClick={addUser}>
        Submit
      </button>
    </div>
  );
};
export default AddUser;
