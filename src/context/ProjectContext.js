import { createContext, useReducer } from 'react'

export const ProjectContext = createContext()

export const ProjectReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROJECTS': // return all projects owned by user
            return {
                projects: action.payload
            }
        case 'SET_SHARED_PROJECTS': // return all projects shared to user
            return {
                shared_projects: action.payload
            }
        case 'CREATE_PROJECT': // return projects with new project (payload) added
            return {
                projects: [action.payload, ...state.projects]
            }
        case 'UPDATE_PROJECT': // return projects with given project modified
            return {
                projects: state.projects.map((project) => {
                    if (project._id === action.payload._id) {
                        return action.payload
                    } else {
                        return project
                    }
                })

            }
        case 'DELETE_PROJECT': // return projects with given project removed
            return {
                projects: state.projects.filter((project) => project._id !== action.payload._id)
            }
        default:
            return state;
    }
}

export const ProjectContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProjectReducer, {
        projects: null,
        shared_projects: null
    })

    return (
        <ProjectContext.Provider value={{...state, dispatch}}>
            { children }
        </ProjectContext.Provider>
    )
}