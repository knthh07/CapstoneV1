import React, { useState } from "react";
import './profile.css';

import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';

const Profile = () => {
    const [isEditable, setIsEditable] = useState(false);

    const handleEditClick = () => {
        setIsEditable(!isEditable);
    };

    return (
        <div>
            <SideNav />
            <TopPanel />
            <div className="profile-container">
                <div className="profile-banner">
                    <h2>Juan Dela Cruz</h2>
                    <h4> - Admin </h4>
                    <div className="profile-icon"></div>
                </div>

                <div className="profile-info">
                    <h2>Profile</h2>
                    <div className="fields1">
                        <h5>PERSONAL INFORMATION</h5>
                        <div className="info-box">
                            <label>Name</label>
                            <p>{isEditable ? <input type="text" defaultValue="Juan Dela Cruz" /> : "Juan Dela Cruz"}</p>
                        </div>
                        <div className="info-box">
                            <label>Password</label>
                            <p>{isEditable ? <input type="password" defaultValue="password" /> : "********"}</p>
                        </div>
                        <div className="info-box">
                            <label>Department</label>
                            <p>{isEditable ? 
                                <select defaultValue="CCIT">
                                    <option value="CCIT">CCIT</option>
                                    <option value="CBA">CBA</option>
                                </select> 
                                : "CCIT"}</p>
                        </div>
                    </div>

                    <div className="fields2">
                        <h5>CONTACT INFORMATION</h5>
                        <div className="info-box">
                            <label>Cellphone Number</label>
                            <p>{isEditable ? <input type="tel" defaultValue="09123456789" /> : "09123456789"}</p>
                        </div>
                        <div className="info-box">
                            <label>Current Address</label>
                            <p>{isEditable ? <input type="text" defaultValue="123 Street Name, City" /> : "123 Street Name, City"}</p>
                        </div>
                        <div className="info-box">
                            <label>Email</label>
                            <p>{isEditable ? <input type="email" defaultValue="juan.delacruz@example.com" /> : "juan.delacruz@example.com"}</p>
                        </div>
                    </div>

                    <div className="editButton">
                        <button onClick={handleEditClick} className="edit">
                            {isEditable ? "Save Profile" : "Edit Profile"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
