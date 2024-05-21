import React from "react";
import './report.css';

import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';

const Settings = () => {
    return (
        <div className="reports-div">
            <SideNav />
            <TopPanel />
            <div className="reports-container">
                <h2>Report</h2>
                <div className="repbutton">
                    <input type="submit" value="Generate Report" className="reportButton" />
                </div>
            </div>

        </div>
    )
}

export default Settings;