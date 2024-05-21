import React from 'react';
import './userdashboard.css';

import UserSideNav from '../../Components/user_sidenav/UserSideNav';
import UserTopPanel from '../../Components/user_topPanel/UserTopPanel';

const Dashboard = () => {
   return (
      <div className='dashboard'>
         <UserSideNav />
         <UserTopPanel />
         <div className="container">
           
         </div>

      </div>

   );
};

export default Dashboard;
