import React from 'react';

import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';
import './dashboard.css';

import GoogleChartComponent from '../../Components/Chart/GoogleChartComponent';
import { chartData1 } from './chartData1'; 
import { chartData2 } from './chartData2'; 

const Dashboard = () => {
   return (
      <div className='dashboard'>
         <SideNav />
         <TopPanel />
         <div className="container">
            <div className="firstContainer">
               <h3>CCIT</h3>
               <h4>5</h4>
            </div>
            <div className="secondContainer">
               <h3>COA</h3>
               <h4>6</h4>
            </div>
            <div className="thirdContainer">
               <h3>COE</h3>
               <h4>4</h4>
            </div>
            <div className="fourthContainer">
               <h3>COD</h3>
               <h4>9</h4>
            </div>

            <div className="graphs">
            </div>

            <div className="graphs2">
            </div>
         </div>
      </div>

   );
};

export default Dashboard;
