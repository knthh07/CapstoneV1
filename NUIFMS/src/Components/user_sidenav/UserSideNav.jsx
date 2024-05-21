import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './user_sidenav.css';
import logo from "../../assets/img/nu_banner2.png";

function UserSideNav() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Replace '/UserDashboard' with the desired path
    navigate('/login');
  };

  return (
    <div className="usersidenav">
      <div className='imgLogo'>
        <img src={logo} alt={'NU LOGO'}></img>
      </div>
      <nav className='usernavlinks'>
        <Link to="/UserTicket">Create Ticket</Link>
        <Link to="/UserFeedback">Submit Feedback</Link>
        <Link to="/UserHistory">View History</Link>
        <Link to="/UserProfile">Profile</Link>

      </nav>

      <div className="userSignoutButton">
        <input type="submit" value="Sign Out" className="button" onClick={handleButtonClick}/>
      </div>
    </div>
  );
}

export default UserSideNav;
