import { ProjectContext } from "../context/ProjectContext";
import { useContext } from 'react'

export const useProjectContext = () => {
    const context = useContext(ProjectContext)

    if (!context) {
        throw Error('useProjectContext must be used inside a ProjectContextProvider')
    } else {
        return context
    }

}