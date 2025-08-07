import React, { useState, useEffect } from "react";

const ProfilePhoto = () => {
    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) setPhoto(URL.createObjectURL(file));
    };

    // Clean up object URL
    useEffect(() => {
        return () => {
            if (photo) URL.revokeObjectURL(photo);
        };
    }, [photo]);

    return (
        <div className="profile-section">
            <h2>Profile Photo</h2>
            {photo ? (
                <img src={photo} alt="Profile Preview" className="profile-avatar" />
            ) : (
                <div className="profile-avatar placeholder">No photo</div>
            )}
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
    );
};

export default ProfilePhoto;
