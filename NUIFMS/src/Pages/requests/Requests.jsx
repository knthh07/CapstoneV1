import React from "react";
import './request.css';

import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';

import {Pagination} from '@mui/material';

const Requests = () => {
    return (
        <div className="requests-div">
            <SideNav />
            <TopPanel />

            <div className="requests-container">
                    <div className="req-title">
                        <h2>Request</h2>
                    </div>
                <div className="request-card">
                    <input type="submit" id="approve-button" value="Approve" />
                    <input type="submit" id="reject-button" value="Reject" />
                </div>
                <div className="request-card1">
                    <input type="submit" id="approve-button" value="Approve" />
                    <input type="submit" id="reject-button" value="Reject" />
                </div>
                <div className="request-card2">
                    <input type="submit" id="approve-button" value="Approve" />
                    <input type="submit" id="reject-button" value="Reject" />
                </div>

                <Pagination count={5} />
            </div>
        </div>
    );
}

export default Requests;
