import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post("https://sample-login-xl66.onrender.com/api/login", {
        email,
        password,
      });
      if (response.data.success) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials.");
      }
    } catch {
      setError("Server error. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <form
        onSubmit={handleLogin}
        className="bg-[#111] p-8 rounded-lg text-white w-96 shadow-lg space-y-4"
      >
        <h2 className="text-2xl font-bold">Sign In</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-red-600 py-2 rounded font-semibold">
          Sign In
        </button>
      </form>
    </div>
  );
}
