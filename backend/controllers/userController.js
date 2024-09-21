const User = require('../models/UserModel')
const jwt = require('jsonwebtoken')

// create jsonwebtoken
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '1d' })
}

// verify jsonwebtoken
const verifyJWT = async (req, res) => {
    
    const { token } = req.params

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await User.findOne({_id}).select('_id')
    } catch (error) {
        res.status(401).json({error: "Token expired"})
    }
}

// login user with username and password
const loginUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.login(username, password)

        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// sign up user with username, email, and password
const signupUser = async (req, res) => {
    
    const {username, email, password} = req.body

    try {
        const user = await User.signup(username, email, password)

        // create jwt
        const token = createToken(user._id)

        res.status(200).json({username, token})

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {verifyJWT, loginUser, signupUser}