const Project = require('../models/ProjectModel')
const mongoose = require('mongoose')

// get all projects for given user
const getProjects = async (req, res) => {
    const user_id = req.user._id

    // get projects sorted by update order
    const projects = await Project.find({ user_id }).sort({updatedAt: -1})

    res.status(200).json(projects)
}

// get a single project
const getProject = async (req, res) => {
    const { id } = req.params
    const user_id = req.user._id

    // error handling: 

    // a) invalid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such project.'})
    }

    const project = await Project.findById(id)

    // b) failed to find project
    if (!project) {
        return res.status(404).json({error: 'No such project.'})
    }

    // c) user not authorized to view project
    if (project.user_id !== user_id.toString()) { // user is not owner of project

        // check if user is among the collaborators
        let userFound = false
        for (let i = 0; i < project.collaborators.length; i++) {
            if (project.collaborators[i].uid === user_id.toString()) {
                userFound = true
            }
        }

        if (!userFound) { // user is not among collaborators
            return res.status(400).json({error: "You do not have access to this project."})
        }
        
        
    }
    
    // return requested project
    res.status(200).json(project)

    
}

// get shared projects
const getSharedProjects = async (req, res) => {
    const user_id = req.user._id

    // get all projects shared to the user 
    const shared_projects = await Project.find({"collaborators.uid": user_id.toString()}).sort({updatedAt: -1})

    res.status(200).json(shared_projects)
}

// create new project
const createProject = async (req, res) => {

    const {name, summary, cards, collaborators} = req.body

    // add document to db
    try {
        const user_id = req.user._id

        // error handling: 

        // a) users cannot have two projects of the same name
        const projectCheck = await Project.findOne({user_id, name})

        if (projectCheck) {
            throw Error("Project already exists")
        }

        
        for (let i = 0; i < collaborators.length; i++) {

            // b) user cannot add themselves as a collaborator
            if (collaborators[i].uid === user_id.toString()) { 
                throw Error("You cannot add yourself as a collaborator.")
            }

            // c) collaborator uid must be valid
        }

        const project = await Project.create( {name, user_id, summary, cards, collaborators}  )
        res.status(200).json(project)

    } catch (error) {
        return res.status(400).json({error: error.message})
    }

}

// delete a project
const deleteProject = async (req, res) => {

    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such project.'})
    }

    const project = await Project.findOneAndDelete({_id: id})

    if (!project) {
        return res.status(404).json({error: 'No such project.'})
    }

    return res.status(200).json(project)
}

// update project
const updateProject = async (req, res) => {

    const { id } = req.params
    const { name } = req.body // name to change project to
    const user_id = req.user._id

    // error handling:

    // a) invalid id
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such project.'})
    }

    const project = await Project.findById(id)

    // b) failed to find project
    if (!project) {
        return res.status(404).json({error: 'No such project.'})
    }
    
    // c) user updating project must either be the owner, or a collaborator with read-write permissions
    if (project.user_id !== user_id.toString()) { // user is not owner of project

        // check if user is among the collaborators AND has read-write permissions
        let userFound = false
        for (let i = 0; i < project.collaborators.length; i++) {
            if (project.collaborators[i].uid === user_id.toString() && project.collaborators[i].permissions === "read-write") {
                userFound = true
            }
        }

        if (!userFound) { // user is not a read-write collaborator
            return res.status(400).json({error: "You do not have permission to modify this project."})
        }
        
    }

    // d) cannot change name to the name of a different, existing project owned by same user
    if (name) {
        const projectCheck = await Project.findOne({user_id: project.user_id, name})

        if (projectCheck._id !== id) {
            return res.status(400).json({error: "This name is already being used by a different project."})
        }
    }

    // update project
    const projectUpdated = await Project.updateOne({_id: id}, {...req.body}, {new: true})

    return res.status(200).json(projectUpdated)


    
}

module.exports = {
    createProject,
    getProject,
    getProjects,
    getSharedProjects,
    deleteProject,
    updateProject
}