import React from 'react';
import './tickets.css';

import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';

const Tickets = () => {
    return (
        <div>
            <SideNav />
            <TopPanel />
            <div className="ticket-container">
                <div className="tickets">
                    <h2>Tickets</h2>
                </div>
            </div>
        </div>

    )
}

export default Tickets;