import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) throw new Error("Registration failed");
    const data = await response.json();
    alert("Registration successful!");
    console.log(data);
  } catch (err) {
    alert("Register failed: " + err.message);
  }
};


  return (
    <form onSubmit={handleRegister} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Register</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
