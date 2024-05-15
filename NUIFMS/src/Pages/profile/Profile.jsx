import React from "react";
import './profile.css';

import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';

const Profile = () => {
    return (
        <div>
            <SideNav />
            <TopPanel />
            <div className="profile-container">

                <div className="profile-banner">
                    <h2>Juan Dela Cruz</h2>
                    <h4> - Admin </h4>
                </div>

                <div className="profile-icon"></div>

                <div className="profile-info">
                    <div className="fields1">
                        <h5>PERSONAL INFORMATION</h5>
                        <div className="input-box">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" />
                        </div>
                        <div className="input-box">
                            <label for="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Your Username" />
                        </div>
                        <div className="input-box">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Your Password" />
                        </div>
                        <div className="input-box">
                            <label for="department">Department</label>
                            <select id="department" name="department">
                                <option value="option1">CCIT</option>
                                <option value="option2">CBA</option>
                            </select>
                        </div>
                    </div>

                    <div className="fields2">
                        <h5>CONTACT INFORMATION</h5>
                        <div className="input-box">
                            <label for="telephone">Telephone Number</label>
                            <input type="tel" id="telephone" name="telephone" placeholder="Telephone Number" />
                        </div>
                        <div className="input-box">
                            <label for="cellphone">Cellphone Number</label>
                            <input type="tel" id="cellphone" name="cellphone" placeholder="Cellphone Number" />
                        </div>
                        <div className="input-box">
                            <label for="address">Current Address</label>
                            <input type="text" id="address" name="address" placeholder="Current Address" />
                        </div>
                        <div className="input-box">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Email Address" />
                        </div>
                    </div>

                    <div className="editButton" >
                        <input type="submit" value="Edit Profile" className="edit" />
                    </div>
                </div>
            </div>
        </div>

    );
};


export default Profile;