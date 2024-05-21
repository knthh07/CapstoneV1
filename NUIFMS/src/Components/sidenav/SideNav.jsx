import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './sidenav.css';
import logo from "../../assets/img/nu_banner2.png";

function SideNav() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Replace '/UserDashboard' with the desired path
    navigate('/login');
  };

  return (
    <div className="sidenav">
      <div className='imgLogo'>
        <img src={logo} alt={'NU LOGO'}></img>
      </div>
      <nav className='navlinks'>
        <Link to="/AdminDashboard">Dashboard</Link>
        <Link to="/request">Requests</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/archive">Archive</Link>
        <Link to="/feedback">Feedback</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/report">Report</Link>
      </nav>

      <div className="signoutButton">
        <input type="submit" value="Sign Out" className="button" onClick={handleButtonClick}/>
      </div>
    </div>
  );
}

export default SideNav;
