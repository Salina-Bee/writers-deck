import { createContext, useReducer } from 'react'

export const AuthContext = createContext()

export const authReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({children}) => {

    // initialize user to null (not signed in)
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log("AuthContext state: ", state)
    
    // wrap provider around children
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}