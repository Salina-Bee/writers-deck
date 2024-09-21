const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async function(username, email, password) {

    // check if email is valid
    if (!validator.isEmail(email)) {
        throw Error('Invalid Email')
    }

    // check if strong password (minimum 8 characters, contains at least one uppercase and lowercase letter, and one number)
    if (!validator.isStrongPassword(password, {minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers:1, minSymbols: 0})) {
        throw Error('Weak Password')
    }

    // check if username already exists
    const exists = await this.findOne({ username })

    if (exists) {
        throw Error("Username Taken")
    }

    

    // salt and hash password
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({username, password:hash, email})

    return user

}

userSchema.statics.login = async function(username, password) {

    // check if username exists
    const user = await this.findOne({username})

    if (!user) {
        throw Error("Incorrect username or password. Please try again.")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error("Incorrect username or password. Please try again.")
    }

    return user


}

module.exports = mongoose.model("User", userSchema)