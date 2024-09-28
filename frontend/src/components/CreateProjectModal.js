import { useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useProjectContext } from "../hooks/useProjectContext"

export default function CreateProjectModal(props) {

    // use states
    const [projectName, setProjectName] = useState("")
    const [projectSummary, setProjectSummary] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [nameError, setNameError] = useState(false)

    // contexts
    const { user } = useAuthContext() 
    const { dispatch } = useProjectContext()  

    // create project upon submitting form
    const createProject = async (e) => {

        e.preventDefault()
        setIsLoading(true)

        const project = {name: projectName, summary: projectSummary, cards: [], collaborators: []}

        // post new project
        const createProjectResponse = await fetch('http://localhost:4000/api/projects/', {
            method: 'POST',
            headers:  {
                'Content-Type': 'application/json', 
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(project)
        })

        const json = await createProjectResponse.json()

        setIsLoading(false)

        if (!createProjectResponse.ok) { // error occurred
            
            if (json.error === "Project already exists") {
                setNameError(true)
            }

            return;
            
        } else {
            // reset fields
            setProjectName("")
            setProjectSummary("")

            props.toggle()
            dispatch({type: "CREATE_PROJECT", payload: json})
        }

        
    }

    return (
        <div className="fixed z-30 top-0 left-0 bg-black bg-black/50 w-full h-full pt-40">
            <div className="bg-slate-100 m-auto px-10 py-5  sm:w-1/2 md:w-2/5 rounded-lg ">
                        <form className="text-primary" onSubmit={createProject}>
                            <div>
                                <div className="mb-5">
                                    <span className="text-xl whitespace-nowrap"><strong>New Project</strong></span>
                                </div>
                            
                                <label htmlFor="Project Name">Project Name <span className="text-red-500">*</span></label>
                                <div className=" flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                                    <input 
                                        id="Project Name"
                                        type="text" 
                                        value={projectName}
                                        onChange={(e) => {
                                            setProjectName(e.target.value)
                                            
                                            if (nameError) { // remove error text
                                                setNameError(false)
                                                
                                            }
                                        }}
                                        className="w-full bg-transparent py-1 px-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                                        maxLength={24}
                                        required /> 
                                </div>
                                <div>
                                    {nameError && <span className="text-red-500">You already own a project with this name.</span>}
                                </div>
                                
                                <div className="mt-5">
                                    <label htmlFor="Project Summary" >Project Summary</label>
                                </div>
                                <div className="w-full flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                                    <textarea
                                        id="Project Summary"
                                        type="text" 
                                        value={projectSummary}
                                        onChange={(e) => setProjectSummary(e.target.value)}
                                        className="w-full bg-transparent py-1.5 px-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                                        maxLength="200"
                                        />
                                </div>
                                <div className="flex justify-between mt-10">
                                    <button className="px-5 py-2 rounded-lg text-primary border-primary border" onClick={() => props.toggle()}>Cancel</button>
                                    <button type="submit" className="bg-secondary-100 px-5 py-2 rounded-lg text-slate-100 disabled:bg-blue-400" disabled={isLoading}>
                                        {!isLoading? "Submit" : "Creating Project..."}
                                    </button>
                                </div>
                            </div>      
                        </form>
                    </div>

        </div>
    )
}