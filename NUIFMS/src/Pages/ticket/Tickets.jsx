import React from 'react';
import './tickets.css';
import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';
import TicketsPage from '../../Components/Tickets/TicketsPage';

const Tickets = () => {
    return (
        <div>
            <SideNav />
            <TopPanel />
            <div className="ticket-container">
                <TicketsPage />
            </div>
        </div>
    );
};

export default Tickets;
