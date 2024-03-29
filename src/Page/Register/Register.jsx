// Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";
import { toast } from "react-toastify";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setError("Iltimos, barcha maydonlarni to'ldiring");
      return;
    }

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    toast.success("Tabriklaymiz, siz ro'yxatdan o'tdingiz !!!");

    setFullName("");
    setEmail("");
    setPassword("");

    navigate("/login");
  };

  return (
    <div className="RegisterPage">
      <form onSubmit={handleRegister}>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Register;
