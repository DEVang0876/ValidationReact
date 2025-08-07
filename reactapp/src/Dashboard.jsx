import React, { useState } from "react";

function Dashboard() {
    const logout = () => {
        localStorage.removeItem("isLoggedIn");
        alert("Logged out successfully");
        window.location.href = "/Login"; 
    }
    
    return(<>
    <h4>
        Name: {localStorage.getItem("name")}<br />
        Email: {localStorage.getItem("email")}<br />
        Mobile No: {localStorage.getItem("MobileNo")}<br />
        Password: {localStorage.getItem("password")}
        <br />
        <button onClick={logout}>Logout</button>
        
    </h4>
    </>)
}

export default Dashboard;