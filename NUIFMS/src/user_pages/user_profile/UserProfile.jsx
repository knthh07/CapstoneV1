import React from 'react';
import './userprofile.css';

import UserSideNav from '../../Components/user_sidenav/UserSideNav';
import UserTopPanel from '../../Components/user_topPanel/UserTopPanel';

const UserProfile = () => {
    return (
        <div>
            <UserSideNav />
            <UserTopPanel />
            <div className="userProfile-container">
                <div className="userProfile">
                    <h2>Profile</h2>
                    <div className="userProfile-info">
                        <div className="userProfile-field">
                            <label>Name:</label>
                            <span>John Doe</span>
                        </div>
                        <div className="userProfile-field">
                            <label>Email:</label>
                            <span>john.doe@example.com</span>
                        </div>
                        <div className="userProfile-field">
                            <label>Department:</label>
                            <span>College of Computing and Information Technology</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;
