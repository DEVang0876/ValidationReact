import React, { useState } from "react";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [MobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("MobileNo", MobileNo);
        localStorage.setItem("password", password); 
        alert("Sign Up Successful");
    };

    return (
        <>
            <h1>Sign Up</h1>
            <label>Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label>Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <label>Mobile No: </label>
            <input type="text" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} />
            <br />
            <label>Password: </label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleSignup}>Sign Up</button>
        </>
    );
}

export default Signup;
