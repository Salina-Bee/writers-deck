const Contact = require('../models/ContactModel')
const mongoose = require('mongoose')

// create contact message
const createContact = async (req, res) => {

    const {name, email, message} = req.body

    // add document to db
    try {
        const contact = Contact.create( {name, email, message}  )
        res.status(200).json(contact)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = {
    createContact
}