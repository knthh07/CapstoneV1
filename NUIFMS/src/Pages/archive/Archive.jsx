import React from 'react';
import './archive.css';
import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';
import ArchivePage from '../../Components/Archive/ArchivePage';

const Archive = () => {
    return (
        <div>
            <SideNav />
            <TopPanel />
            <div className="archives-container">
                <ArchivePage />
            </div>
        </div>
    );
};

export default Archive;
