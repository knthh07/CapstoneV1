import React from 'react';
import './topPanel.css'

const TopPanel = () => {
    return (
        <div className="top-panel">
            <h3>Admin Dashboard</h3>

            <div className='searchBar'>
                <input type="text" placeholder="Search" />
            </div>

            <div className='dot'></div>
        </div>
    )
}

export default TopPanel;
