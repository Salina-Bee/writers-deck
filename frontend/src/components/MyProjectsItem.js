
import { Link } from 'react-router-dom'
import { useProjectContext } from '../hooks/useProjectContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow'

export default function MyProjectsItem({ project }) {

    const { dispatch } = useProjectContext()
    const { user } = useAuthContext()
    const link = "/writers-deck/projects/" + project._id

    const toggleStar = async (e) => {
        const response = await fetch('http://localhost:4000/api/projects/' + project._id, {
            method: 'PATCH',
            headers:  {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify({starred: !project.starred})
        })

        await response.json()

        let newProject = project
        newProject.starred = !project.starred

        if (response.ok) {
            dispatch({type: 'UPDATE_PROJECT', payload: newProject})
        } 
    }

    const deleteClick = async (e) => {
        const response = await fetch('http://localhost:4000/api/projects/' + project._id, {
            method: 'DELETE',
            headers:  {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_PROJECT', payload: json})
        } else {
            console.log(json)
        }
    }

    return (
        <div className="px-10 py-5 mt-5 bg-slate-200 shadow-lg md:static md:max-w-screen-sm lg:max-w-screen-md">
            <div className="flex justify-between">
                <div>
                    <span className="text-lg whitespace-nowrap"><strong>{project.name}</strong></span>
                </div> 
                <div className="flex">
                
                    <button className="mr-5 cursor-pointer" onClick={toggleStar}>
                        {!project.starred && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>}
                        {project.starred && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>}
                    </button>

                    <Link className="mr-5 cursor-pointer" to={link}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </Link>
                
                    <button className="cursor-pointer" onClick={deleteClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="mt-1">
                <span className="text-gray-400 text-md italic"><strong>Last updated:</strong> {formatDistanceToNow(new Date(project.updatedAt), {addSuffix: true})}</span>
            </div>
            <div className="mt-3 max-w-8/10">
                {project.summary === "" && <span className="italic text-md text-gray-400">&#40;No description.&#41;</span>}
                {project.summary !== "" && <span className="text-md break-words">{project.summary} </span>}
            </div>

        </div>
    )
}