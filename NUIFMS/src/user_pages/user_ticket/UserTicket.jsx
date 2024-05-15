import React from 'react';
import './userticket.css';

import UserSideNav from '../../Components/user_sidenav/UserSideNav';

const UserTickets = () => {
    return (
        <div>
            <UserSideNav />
            <div className="userticket-container">
                <div className="usertickets">
                    <h2>Tickets</h2>
                </div>
            </div>
        </div>

    )
}

export default UserTickets;