import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userSignUp } from "../services/userService";

const Account_Creation = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function accountSignUp(e) {
    e.preventDefault(); 
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const result = await userSignUp(email, password, username);
      console.log(result);
      navigate("/login")

    } catch (err) {
        if(err.message.includes("already registered")){
            setError("An account with this email already exists")
        }
        else{
             setError(err.message);
        }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="userInfo" onSubmit={accountSignUp}>
      <h1>Create Account</h1>

      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <input
        id="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <input
        id="pass-confirm"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />

      {error && <p>{error}</p>}

      <button disabled={loading}>
        {loading ? "Creating..." : "Register"}
      </button>
    </form>
  );
};

export default Account_Creation;
  