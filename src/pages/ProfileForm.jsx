import React, { useState } from "react";
import { toast } from "react-toastify";

const ProfileForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        dob: "",
        phone: "",
        address: "",
        email: "user@example.com", // read-only
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you could call an API
        toast.success("Profile details updated successfully!");
    };

    return (
        <div className="profile-section">
            <h2>Personal Information</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
                <label>
                    Full Name:
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                </label>

                <label>
                    Date of Birth:
                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
                </label>

                <label>
                    Phone Number:
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </label>

                <label>
                    Address:
                    <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
                </label>

                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} disabled />
                </label>

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default ProfileForm;
