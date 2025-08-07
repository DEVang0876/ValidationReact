import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    var navigate=useNavigate();
    
    React.useEffect(()=>{
        
        var a= localStorage.getItem("isLoggedIn");
        if(a=="true"){
            navigate("/Dashboard");
        }
    })

    const handleLogin = () => {
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            alert("Login Successful");
            setIsLoggedIn(true);
        } else {
            alert("Invalid email or password");
        }
        localStorage.setItem("isLoggedIn", isLoggedIn);
        navigate("/Dashboard");
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