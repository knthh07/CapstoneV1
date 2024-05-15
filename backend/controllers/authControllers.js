const User = require('../models/User');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working');
};

// Register Endpoint
const registerUser = async (req, res) => {
    try {
        const { name, department, address, contact, email, password, confirmPassword } = req.body;
        console.log('Submitting form', data);
        
        // Check if name is entered
        if (!name) {
            return res.json({ error: 'Name is required' });
        }

        // Check Email
        if (!email) {
            return res.json({ error: 'Email is required' });
        }
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ error: 'Email is already taken' });
        }

        // Check if password is good (npm i bcrypt)
        if (!password || password.length < 6) {
            return res.json({ error: 'Password is required and should be at least 6 characters long' });
        }

        if (password !== confirmPassword) {
            return res.json({ error: 'Passwords do not match' });
        }

        const hashedPassword = await hashPassword(password);

        // Create user in database (Table)
        const user = await User.create({
            name,
            department,
            address,
            contact,
            email,
            password: hashedPassword,
        });

        await user.save();
        return res.json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if User exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'No User Found' });
        }

        // Check if password matches
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(400).json({ error: 'Password does not match' });
        }

        // Sign JWT token
        jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, {}, (err, token) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Failed to generate token' });
            }
            // Set cookie with token
            res.cookie('token', token, { httpOnly: true }).json(user);
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

// Endpoint getProfile with get res
// Verifying the user
const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        });
    } else {
        res.json(null);
    }
};

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
};
