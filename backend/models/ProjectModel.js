const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        default: ""
    },
    starred: {
        type: Boolean,
        default: false
    },
    cards: {
        type: Array,
        default: []
    },
    collaborators: {
        type: Array,
        default: []
    }
}, { timestamps: true })

module.exports = mongoose.model("Project", projectSchema)