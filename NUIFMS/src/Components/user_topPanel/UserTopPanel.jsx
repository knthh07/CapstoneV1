import React from 'react';
import './userTopPanel.css'

const UserTopPanel = () => {
    return (
        <div className="usertop-panel">
            <h3>User Dashboard</h3>

            <div className='searchBarUser'>
                <input type="text" placeholder="Search" />
            </div>

            <div className='dotUser'></div>
        </div>
    )
}

export default UserTopPanel;
