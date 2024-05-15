const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile } = require('../controllers/authControllers');

// Configure CORS middleware
router.use(cors({
    origin: 'https://localhost:5173', // Update this with your client's URL
    methods: ['GET', 'POST'], // Add the allowed HTTP methods
    credentials: true // Allow credentials (cookies, authorization headers)
}));

// Routes get data
router.get('/', test);
router.post('/signup', registerUser); // Ensure this matches the frontend endpoint
router.post('/login', loginUser);
router.get('/profile', getProfile);

module.exports = router;
