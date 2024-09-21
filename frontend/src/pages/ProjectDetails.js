import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout"

// components
// import CardEditor from "../components/CardEditor";

export default function ProjectDetails() {

    let { id } = useParams();
    const { user } = useAuthContext()
    const [project, setProject] = useState(null); 
    const { logout } = useLogout();
    const navigate = useNavigate();

    useEffect(() => {

        // get project (if it exists and is authorized for access)
        const fetchProject = async () => {
            const response = await fetch('http://localhost:4000/api/projects/' + id, {
                headers: {'Authorization': `Bearer ${user.token}`}
            })

            setProject(await response.json())

            if (response.ok) {
                console.log(project)

            } else {
                if (response.status === 401) {
                    logout();
                    navigate("/writers-deck/login");
                }
            }
        }

        if (user) {
            fetchProject()
        }
    }, [user, id, project, logout, navigate])

    return (
        <div className="flex">
            {!project && <div className="h-screen w-screen bg-slate-200 flex justify-center">
                <div className="flex m-auto items-center">
                    <svg aria-hidden="true" className="size-12 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 mr-3" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                    <span className="text-4xl text-gray-400">Loading Project...</span>
                </div>
                    

                
                
            </div>}
            {project && <div>
                {/* sidebar */}
                <div className="h-screen min-h-[200px] overflow-auto bg-gradient-to-b from-primary to-blue-950 text-slate-100 fixed px-10 pt-5">
                    <div className="flex justify-center px-5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                        <span className="text-xl"><Link to="/writers-deck/projects">Return to Projects</Link></span>     
                    </div>
                    <div className="flex justify-center pt-10">
                        <h1 className="text-2xl px-10 font-semibold whitespace-nowrap">{project.name}</h1>
                    </div>
                    <div className="flex pt-8">
                        <span className="text-2xl">Overview</span>
                    </div>
                    <div className="flex pt-8">
                        <span className="text-2xl">Cards</span>
                    </div>
                    <div>
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            
                <div className="w-full min-h-screen">
                    Hello
                </div>
            </div>}
            
            
        
        </div>
    )
}