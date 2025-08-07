// src/pages/PasswordChange.jsx
import React, { useState } from "react";

const PasswordChange = () => {
    const [passwords, setPasswords] = useState({
        current: "",
        new: "",
        confirm: ""
    });

    const handleChange = (e) => {
        setPasswords({...passwords, [e.target.name]: e.target.value});
    };

    return (
        <div className="profile-section">
            <h2>Change Password</h2>
            <form className="profile-form">
                <label>
                    Current Password:
                    <input type="password" name="current" value={passwords.current} onChange={handleChange} />
                </label>

                <label>
                    New Password:
                    <input type="password" name="new" value={passwords.new} onChange={handleChange} />
                </label>

                <label>
                    Confirm Password:
                    <input type="password" name="confirm" value={passwords.confirm} onChange={handleChange} />
                </label>
            </form>
        </div>
    );
};

export default PasswordChange;