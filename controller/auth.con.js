const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require(`dotenv`).config()
const User = require('../models/User'); 

const register = async (req, res) => {
    const { username, password } = req.body;
    if (!password) {
    return res.status(400).json({ message: 'Password is required' });
    }
const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
const { username, password } = req.body; 
console.log('Received password:', password);

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ accessToken, refreshToken });
};

module.exports = {
    register,
    login
};
