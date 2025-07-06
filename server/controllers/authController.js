const jwt = require('jsonwebtoken');
const User = require('../models/user');



// 1. Register user
const handleRegister = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            return res.status(404).json({message: "All fields are required."})
        }

        const user = await User.findOne({email});
        if(user) {
            return res.status(404).json({message: 'Email is already registered.'});
        }

        const newUser = await User.create({name, email, password});
        res.status(201).json({message: 'Registration Successful.'});
    } catch(e) {
        res.status(500).json({message: 'Internal Server error'})
    }
}


// 2. Login user
const handleLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(404).json({message: "Both email and password is required."})
        }

        // validate user
        const user = await User.findOne({email});
        if(!user || password !== user.password) {
            return res.status(404).json({message: "Incorrect credientials."});
        }

        // generate token
        const payload = {_id: user._id, email: email};
        const token = await jwt.sign(payload, 'myjwtsecret');
        console.log(token);
        

        // send cookie + response
        res.cookie('accessToken', token, {
            httpOnly: true,
            secure: false,                   // since, we are in development phase
            sameSite: 'strict',
        });
        res.status(200).json({message: 'Login Successful.', user});
    } catch(e) {
        res.status(500).json({message: 'Internal Server Error.'})
    }
}


// 3. Get user info
const handleGetUserInfo = async (req, res) => {
    try {
        console.log('Req rcvd.');
        const userPayload = req.user;
        console.log(userPayload);
        // find user
        const user = await User.findOne({_id: userPayload._id})
        
        // send response
        res.status(200).json({message: 'Authentication Successful.', user});
    } catch(e) {
        res.status(500).json({message: 'Internal Server Error.'})
    }
}


// 4. Logout user
const handleLogout = async (req, res) => {
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: false,     // ⚠️ Set to true in production (HTTPS)
      sameSite: 'strict'
    });
  
    return res.status(200).json({ message: 'Logged out successfully.' });
}





module.exports = {
    handleRegister,
    handleLogin,
    handleGetUserInfo,
    handleLogout
}