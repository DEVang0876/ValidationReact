import React, { useState } from "react";

function Dashboard() {
    
    return(<>
    <h4>
        Name: {localStorage.getItem("name")}<br />
        Email: {localStorage.getItem("email")}<br />
        Mobile No: {localStorage.getItem("MobileNo")}<br />
        Password: {localStorage.getItem("password")}
        <br />
        
    </h4>
    </>)
}

export default Dashboard;