import React, { useState } from "react";
import { toast } from "react-toastify";

const PasswordChange = () => {
    const [passwords, setPasswords] = useState({
        current: "",
        new: "",
        confirm: ""
    });

    const handleChange = (e) => {
        setPasswords({ ...passwords, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (passwords.new !== passwords.confirm) {
            toast.error("New passwords do not match.");
            return;
        }

        // Here you'd typically call an API to update password
        toast.success("Password changed successfully!");
        // Optionally clear the form
        setPasswords({ current: "", new: "", confirm: "" });
    };

    return (
        <div className="profile-section">
            <h2>Change Password</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
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

                <button type="submit">Update Password</button>
            </form>
        </div>
    );
};

export default PasswordChange;
