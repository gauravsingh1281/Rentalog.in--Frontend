// src/pages/Profile.jsx
import React from "react";
import ProfileForm from "./ProfileForm";
import ProfilePhoto from "./ProfilePhoto";
import PasswordChange from "./PasswordChange";
import "./Profile.css";

const Profile = () => {
    return (
        <div className="profile-container">
            <h1>Your Profile</h1>
            <ProfilePhoto />
            <ProfileForm />
            <PasswordChange />
        </div>
    );
};

export default Profile;