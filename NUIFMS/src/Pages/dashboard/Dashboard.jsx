import React from 'react';
import SideNav from '../../Components/sidenav/SideNav';
import TopPanel from '../../Components/topPanel/TopPanel';
import { Box, Typography, Card, CardContent } from '@mui/material';
// import { Bar, Pie, Line } from 'react-chartjs-2';
import './dashboard.css';

// const barData = {
//   labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//   datasets: [
//     {
//       label: 'Lorem Ipsum',
//       backgroundColor: 'rgba(255, 205, 86, 0.6)',
//       borderColor: 'rgba(255, 205, 86, 1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(255, 205, 86, 0.8)',
//       hoverBorderColor: 'rgba(255, 205, 86, 1)',
//       data: [12, 19, 3, 5, 2, 3, 9]
//     },
//     {
//       label: 'Lorem Ipsum',
//       backgroundColor: 'rgba(54, 162, 235, 0.6)',
//       borderColor: 'rgba(54, 162, 235, 1)',
//       borderWidth: 1,
//       hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
//       hoverBorderColor: 'rgba(54, 162, 235, 1)',
//       data: [2, 3, 20, 5, 1, 4, 7]
//     }
//   ]
// };

// const pieData = {
//   labels: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
//   datasets: [
//     {
//       data: [300, 50, 100, 40],
//       backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40'],
//       hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40']
//     }
//   ]
// };

// const lineData = {
//   labels: ['July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
//   datasets: [
//     {
//       label: 'Lorem Ipsum Dolor',
//       fill: true,
//       lineTension: 0.1,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideNav />
      <TopPanel />
      <div className="dashboard-container">
        <div className="stats-container">
          <Card className="stat-card">
            <CardContent>
              <Typography variant="h5">COA</Typography>
              <Typography variant="h4">8</Typography>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent>
              <Typography variant="h5">CCIT</Typography>
              <Typography variant="h4">15</Typography>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent>
              <Typography variant="h5">COE</Typography>
              <Typography variant="h4">10</Typography>
            </CardContent>
          </Card>
          <Card className="stat-card">
            <CardContent>
              <Typography variant="h5">COM</Typography>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </div>
        <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Graph 1</Typography>
              {/* <Bar data={barData} /> */}
            </CardContent>
          </Card>
          <Card className="chart-card">
            <CardContent>
              <Typography variant="h6">Graph 2</Typography>
              {/* <Pie data={pieData} /> */}
            </CardContent>
          </Card>
        </Box>
        <Card className="chart-card" sx={{ marginTop: 3 }}>
          <CardContent>
            <Typography variant="h6">Graph 3</Typography>
            {/* <Line data={lineData} /> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
