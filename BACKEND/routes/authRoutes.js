const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
    const { fullName, email, username, password, role } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const newUser = new User({ fullName, email, username, password, role });
        await newUser.save();

        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const user = await User.findOne({ username, role });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or role' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        // Role-based redirection logic
        let redirectURL = '/';
        if (role === 'student') redirectURL = '/student-dashboard';
        if (role === 'institution') redirectURL = '/institution-dashboard';
        if (role === 'officer') redirectURL = '/officer-dashboard';

        res.status(200).json({
            message: 'Login successful',
            role,
            redirectURL,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

module.exports = router;
