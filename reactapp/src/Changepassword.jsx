import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Changepassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleChangePassword = () => {
        const storedPassword = localStorage.getItem("password");

        if (currentPassword === storedPassword) {
            if (newPassword === confirmPassword) 
            {
                localStorage.setItem("password", newPassword);
                alert("Password changed successfully");
                navigate("/Dashboard");
            } 
            else 
            {
                alert("New passwords do not match");
            }
        } else {
            alert("Current password is incorrect");
        }
    }
    return (
        <>
            <h1>ChangePassword</h1>
            <label>Current Password: </label>
            <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
            <br />
            <label>New Password: </label>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <br />
            <label>Confirm New Password: </label>
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <br />
            <button onClick={handleChangePassword}>Change Password</button>
        </>
    );
}

export default Changepassword;