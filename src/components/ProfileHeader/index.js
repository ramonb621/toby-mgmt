import React from "react";
import "./style.css";

const ProfileHeader = () => {
    return (
        <div className="profile-header">
            <img className="profile-pic" alt= "profile-pic" src="../images/kristina.jpeg"></img>
            <div className="name-and-title">
                <h3 className="profile-name">Placeholder for Name</h3>
                <h3 className="profile-title">Placeholder for Title</h3>
            </div>
         </div>
    )
}


export default ProfileHeader;