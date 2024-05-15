import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import signupLogoSrc from '../../assets/img/nu_banner2.png';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    address: '',
    department: '',
    contact: '',
    email: '',
    password: '',
    confirmPassword: '', // Added confirmPassword here to match the backend
  });

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, department, address, contact, email, password, confirmPassword } = data;
    console.log('Submitting form', data); // Add this line for debugging
    try {
      const response = await axios.post('http://localhost:8000/api/signup', { // Ensure this URL matches your backend
        name, department, address, contact, email, password, confirmPassword
      });
      const result = response.data;
      if (result.error) {
        toast.error(result.error);
      } else {
        setData({ name: '', department: '', address: '', contact: '', email: '', password: '', confirmPassword: '' });
        toast.success('Register Successful. Welcome!');
        navigate('/login');
      }
    } catch (error) {
      console.log('Error submitting form', error); // Add this line for debugging
    }
  };

  return (
    <div className="signupPage">
      <div>
        <div className="signupLogo">
          <img src={signupLogoSrc} alt="NU LOGO" />
        </div>
      </div>

      <div className="signupForm">
        <form id="signupForm" onSubmit={registerUser}>
          <div id="input">
            <h1>Sign Up</h1>
            <div className="signupFields">
              <div className="FullNameField">
                <label htmlFor="nameField">Name</label>
                <input type="text"
                  id="nameField"
                  name="nameField"
                  placeholder="Enter your Name"
                  required
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </div>

              <div className="AddressField">
                <label htmlFor="address">Address</label>
                <input type="text"
                  id="address"
                  name="address"
                  placeholder="Enter your Address"
                  required
                  value={data.address}
                  onChange={(e) => setData({ ...data, address: e.target.value })}
                />
              </div>

              <div className="DepartmentField">
                <label htmlFor="department">Department</label>
                <select id="department"
                  name="department"
                  required
                  value={data.department}
                  onChange={(e) => setData({ ...data, department: e.target.value })}>
                  <option value="">Select a Department</option>
                  <option value="bldgA">Building A</option>
                  <option value="bldgB">Building B</option>
                  <option value="bldgC">Building C</option>
                  <option value="bldgD">Building D</option>
                </select>
              </div>

              <div className="emailField">
                <label htmlFor="email">Email</label>
                <input type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email (e.g. name@email.com)"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>

              <div className="passwordField">
                <label htmlFor="password">Password</label>
                <input type="password"
                  id="password" name="password"
                  placeholder="Enter your Password"
                  required
                  value={data.password}
                  onChange={(e) => setData({ ...data, password: e.target.value })}
                />
              </div>

              <div className="confirmPasswordField">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm your Password"
                  required
                  value={data.confirmPassword}
                  onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                />
              </div>
            </div>

            <button type='submit' className="buttonSignup">Sign Up</button>

            <p className="signupP">Already have an account?
              <a href="loginLink" id="loginLink">Log in</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
