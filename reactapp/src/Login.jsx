import React, { useState } from "react";

function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleLogin = () => {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            alert("Login Successful");
        } else {
            alert("Invalid email or password");
        }
    }

    return (
        <>
            <h1>Login</h1>
            <label>Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </>
    );
}

export default Login;