const express = require('express')
const { createProject, getProjects, getProject, getSharedProjects, deleteProject, updateProject } = require('../controllers/projectController')

const router = express.Router()

// GET all projects
router.get('/', getProjects)

// GET shared projects
router.get('/shared', getSharedProjects)

// GET a single project
router.get('/:id', getProject)

// POST a new project
router.post('/', createProject)

// DELETE a project
router.delete('/:id', deleteProject)

// PATCH a project
router.patch('/:id', updateProject)

// PATCH a shared project
// router.patch('/shared/:id')


module.exports = router