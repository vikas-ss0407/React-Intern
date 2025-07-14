import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error("Invalid credentials");
    const data = await response.json();
    alert("Login successful!");
    console.log(data);
  } catch (err) {
    alert("Login failed: " + err.message);
  }
};

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
