import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import { useProjectContext } from '../hooks/useProjectContext';

// components


export default function ProjectDetails() {

    let { id } = useParams();

    // contexts
    const { user } = useAuthContext();
    const { dispatch } = useProjectContext();

    // useStates
    const [project, setProject] = useState(null); // stores current project information
    const [editField, setEditField] = useState("none"); // keeps track of what the user is currently editing
    const [isSaving, setIsSaving] = useState(false);
    const [nameError, setNameError] = useState("");

    //const { logout } = useLogout();
    //const navigate = useNavigate();

    // useEffect hook for getting project info
    useEffect(() => {

        // get project (if it exists and is authorized for access)
        const fetchProject = async () => {
            const response = await fetch('http://localhost:4000/api/projects/' + id, {
                headers: {'Authorization': `Bearer ${user.token}`}
            })

            setProject(await response.json())

            if (!response.ok) {
                console.log(response)
            }

        }

        if (user) {
            fetchProject()
        }
    }, [user, id])


    /**
     * Updates the given field for the project.
     * 
     * @param {* object} updatedField - object corresponding to the updated field value
     * 
     */
    const updateField = async (updatedField) => {
        const response = await fetch('http://localhost:4000/api/projects/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(updatedField)
        })
    
        const json = await response.json()

        // update the project context
        const newProject = {...project, ...updatedField, updatedAt: new Date(Date.now())}

        if (response.ok) {
            dispatch({type: 'UPDATE_PROJECT', payload: newProject})
            setProject(newProject)
            setEditField("none");
        } else {
            if (json.error === "Project name already used") {
                setNameError("This name is already being used by a different project you've created.")
            }
        }

        setIsSaving(false);
    }
    

    return (
        <div className="flex min-h-screen">
            <div>
                {editField}
                <Link to="/writers-deck/card">Card Editor</Link>
            </div>
            {/* Loading page*/}
            {!project && 
            <div className="h-screen w-screen bg-slate-200 flex justify-center">
                <div className="flex m-auto items-center">
                    <svg aria-hidden="true" className="size-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mr-3" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    <span className="text-4xl text-gray-400">Loading Project...</span>
                </div>
            </div>}

            {/* Main Content */}
            {project && 
            <div className="flex mx-auto">
                <div className="  text-primary">
                    
                    <Link className="flex mt-5 px-5" to="/writers-deck/projects">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <span className="text-xl">Return to Projects</span>
                    </Link>     
                    
                    <div className="mx-10 mt-10">
                        <textarea
                            id="Name"
                            className="mt-3 w-full overflow-auto text-2xl font-semibold whitespace-nowrap bg-bgLight-400 focus:bg-sky-100 px-1 py-3 text-primary placeholder:text-gray-400 ring-slate-300"
                            defaultValue={project.name}
                            onFocus={() => setEditField("Name")}
                            rows={1}
                            maxLength={24}
                        
                        />
                        <div>
                            <span className="text-red-500">{nameError}</span>
                        </div>
                        {editField === "Name" && <div className="flex justify-end">
                                <button className="px-5 py-2 rounded-lg text-primary border-primary border" onClick={() => {
                                    

                                    // hide cancel and save button
                                    setEditField("none")
                                    

                                    // reset summary value to original
                                    const nameElem = document.getElementById("Name");
                                    nameElem.value = project.name
                                    setNameError("") // since project name has been reset, there is no error
                                    
                                }}>
                                    Cancel
                                </button>
                                <button type="submit" className="bg-secondary-100 ml-3 px-5 py-2 rounded-lg text-slate-100 disabled:bg-blue-400" disabled={isSaving} onClick={() => {
                                    
                                    // if user has not changed name, return
                                    const nameElem = document.getElementById("Name");

                                    if (nameElem.value === project.name) {
                                        setNameError("")
                                        setEditField("none")
                                        return;
                                    }

                                    // error handling
                                    // project name cannot be blank
                                    if (nameElem.value === "") {
                                        setNameError("Project name cannot be blank.")
                                        return;
                                    } else {
                                        setNameError("")
                                    }


                                    // attempt to save
                                    setIsSaving(true);
                                    updateField({name: nameElem.value}) // this will check if project name already exists in db
    
                                    
                                    

                                }}>
                                    {!isSaving? "Save" : "Saving..."}
                                </button>
                            </div>}

                    </div>
                    <div className=" mx-10 mt-5 w-[400px] lg:w-[800px] ">
                        <span className="px-1 text-md font-bold">Summary:</span>
                        <br/>
                    
                        <div className="mt-2">
                            <textarea 
                                id="Summary"
                                className="w-full overflow-auto  bg-bgLight-400 focus:bg-sky-100 py-1.5 px-1 text-primary placeholder:text-gray-400 ring-slate-300"
                                defaultValue={project.summary}
                                placeholder={project.summary !== ""? "" : "(No description available.)"}
                                onFocus={() => setEditField("Summary")}
                                rows={3}
                                maxLength={200}
                            />
                            {editField === "Summary" && <div className="flex justify-end">
                                <button className="px-5 py-2 rounded-lg text-primary border-primary border" onClick={() => {
                                    

                                    // hide cancel and save button
                                    setEditField("none")

                                    // reset summary value to original
                                    const summaryElem = document.getElementById("Summary");
                                    summaryElem.value = project.summary
                                    
                                }}>
                                    Cancel
                                </button>
                                <button type="submit" className="bg-secondary-100 ml-3 px-5 py-2 rounded-lg text-slate-100 disabled:bg-blue-400" disabled={isSaving} onClick={() => {
                                    setIsSaving(true);
                                    const summaryElem = document.getElementById("Summary");
                                    updateField({summary: summaryElem.value});
                                    setIsSaving(false);

                                }}>
                                    {!isSaving? "Save" : "Saving..."}
                                </button>
                            </div>}
                        </div>
        
                    </div>
                    <div className="mx-10 mt-10">
                        <span className="px-1 text-md font-bold">Date Created: </span>
                        <span className="italic">{new Date(project.createdAt).toLocaleString([], {year: "numeric", month:"numeric", day:"numeric", hour: "2-digit", minute: "2-digit" })}</span>
                        <br/>
                        <br/>
                        <span className="px-1 text-md font-bold">Last Updated: </span>
                        <span className="italic">{new Date(project.updatedAt).toLocaleString([], {year: "numeric", month:"numeric", day:"numeric", hour: "2-digit", minute: "2-digit" })}</span>
                    </div>
                    <div className="mx-10 mt-10">
                        <span className="px-1 text-md font-bold">Collaborators: </span>
                        {project.collaborators && project.collaborators.length === 0 && 
                        <div className="mt-3"> 
                            <span className="px-1 text-gray-400">There are no collaborators for this project.</span>
                            {editField !== "Collaborators" && <div className="mt-5">
                                <button className="inline-flex justify-center items-center px-1 bg-secondary-100 rounded-xl" onClick={() => {setEditField("Collaborators")}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f1f4f9" className="size-6 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                    <span className="px-3 py-2 text-slate-100">
                                        Add a collaborator
                                    </span>
                                    
                                </button>
                            </div>}
                            
                            {editField === "Collaborators" && <div className="mt-5 flex">
                                <div>
                                    <label htmlFor="collabUser">Username</label>
                                    <input type="text" id="collabUser" placeholder="Enter username" className="w-full overflow-auto bg-slate-200 focus:bg-slate-100 py-1.5 px-1 text-primary" />
                                
                                </div>    
                                
                            
                            
                            
                            </div>}
                               
                        </div>}
                    </div>
                    <div className="mx-10 mt-10">
                        <span className="px-1 text-md font-bold">Cards: </span>
                        {project.cards && project.cards.length === 0 && 
                        <div className="mt-3"> 
                            <span className="px-1 text-gray-400">There are no cards for this project.</span>
                            <div className="mt-5">
                                <button className="inline-flex justify-center items-center px-1 bg-secondary-100 rounded-xl ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#f1f4f9" className="size-6 ml-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                    </svg>

                                    <span className="px-3 py-2 text-slate-100">
                                        Add a card
                                    </span>
                                    
                                </button>
                            </div>
                               
                        </div>}
                    </div>
                </div>
            </div>}
            
            
        
        </div>
    )
}