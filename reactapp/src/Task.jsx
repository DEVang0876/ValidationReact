import React, { useState } from "react";
function Task() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [MobileNo, setMobileNo]=useState("");
    
    
    return(<>
        <h1>Task Validation</h1>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Mobile No: </label>
        <input type="text" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} />
        <br />
        
        
    </>)
    
}

export default Task;