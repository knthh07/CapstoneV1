import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import loginLogo from '/src/assets/img/login-logo2.png';
import { Box } from '@mui/material';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const loginAuth = () => {
    const { email, password } = formData;
    if (!email || !password) {
      alert('Please enter email and password!');
    } else {
      navigate('/AdminDashboard');
    }
  };

  const toggleShowPassword = () => {
    console.log('Toggling password visibility');
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginPage">
      <div className="leftSide">
        <img src={loginLogo} alt="NU Logo" className="loginLogo" />
      </div>

      <div className="rightSide">
        <Box component="form" autoComplete='off' noValidate
        
        >
          <div className="loginForm">
            <h2>LOGIN</h2>

            <div className="loginFields">
              <TextField
                variant='outlined'
                label='Email'
                fullWidth
                style={{background: "#ff4f4fd", fontSize: "0.8 rem", fontFamily: 'Poppins', fontWeight: "500", margin: "1.3rem 0 0"}}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <TextField
                variant='outlined'
                type={showPassword ? 'text' : 'password'}
                label="Password"
                fullWidth
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <input
                type="checkbox"
                className='showPasswordBox'
                checked={showPassword}
                onChange={toggleShowPassword}
              />
            </div>
            <a href="#" className="forgotPassword">Forgot Password?</a>
            <button className="buttonLogin" onClick={loginAuth}>Login</button>
            <p className="loginP">Don't have an account? <a href="/signup" className="signupLink">Sign up Now</a></p>
          </div>
        </Box>
      </div>

    </div >
  );
};

export default Login;
