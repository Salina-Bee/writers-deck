import { useAuthContext } from './useAuthContext'
import { useProjectContext } from './useProjectContext'

export const useLogout = () => {

    const { dispatch: authDispatch } = useAuthContext()
    const { dispatch: projDispatch } = useProjectContext()

    const logout = () => {

        // remove user from local storage
        localStorage.removeItem('user')

        // clear workout data
        projDispatch({type: 'SET_PROJECTS', payload: null})
        authDispatch({type: 'LOGOUT'})
    }

    return { logout }
    
}