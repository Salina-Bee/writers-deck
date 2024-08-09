
import { useLogout } from '../hooks/useLogout';
import { useEffect, useState } from 'react'
import { useAuthContext } from "../hooks/useAuthContext"
import {Button, Menu, MenuItem, MenuTrigger, Popover} from 'react-aria-components';

// components
import MyProjects from "../components/MyProjects"
import CreateProjectModal from '../components/CreateProjectModal';

export default function UserHome() {

    // useStates
    const [showSidebar, setShowSidebar] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [currentTab, setCurrentTab] = useState("My Projects")

    // context and hooks
    const { user } = useAuthContext()  
    const { logout } = useLogout()
    
    // switch to new tab when clicking on a tab
    const handleTabClick= (newTab) => {
        setCurrentTab(newTab)
        console.log(newTab)
    }

    // show/hide modal when called
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    // logout of user account when triggered
    const logoutClick = () => {
		logout()
	}

    // ensure resize function below is called once per second, max
    function debounce(fn, ms) {
        let timer 
        return _ => {
            clearTimeout(timer)
            timer = setTimeout(_ => {
                timer = null
                fn.apply(this, arguments)
            }, ms)
        }
    }

    // listen for resize so that sidebar always appears in larger screens
    useEffect(() => {
        const handleResize = debounce(function adjustSidebar() {
            let mediaquery = window.matchMedia("(min-width: 768px)");

            if (mediaquery.matches) { // medium or higher screen width
                setShowSidebar(true)
            } 
        }, 1000)

        window.addEventListener('resize', handleResize)

        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return (
        <div className="flex">

            {/* modal + create project form*/} 
            {showModal && <CreateProjectModal toggle={toggleModal}/>}
            
            {/* main page */}
            <div className="flex">
                {/* sidebar */}
                {showSidebar && <div className="h-screen bg-gradient-to-b from-primary to-blue-950 text-slate-100 px-10 pt-5 flex-col z-10 fixed md:static shrink-0">
                        <div className="flex justify-center">
                            <span className="text-2xl font-semibold whitespace-nowrap px-10"><h1>Writer's Deck</h1></span>
                        </div>
                        <div className="text-xl mt-10">
                            <ul>
                                <div className="flex justify-between">
                                    <div className="flex cursor-pointer" onClick={() => handleTabClick("My Projects")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                                        </svg>
                                        <span>My Projects</span>
                                    </div> 
                                        <button onClick={() => setShowModal(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                        </button>  
                                </div>
                                <li className="pl-8 pt-5 flex cursor-pointer" onClick={() => handleTabClick("Starred Projects")} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                    <span>Starred</span>
                                </li>
                            </ul>
                            <div className="mt-10 flex cursor-pointer" onClick={() => handleTabClick("Shared Projects")} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                </svg>
                                <span>Shared Projects</span>
                            </div>
                        </div>
                        <div className="text-xl flex mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span>Settings</span>
                        </div>
                        <div className="text-xl flex mt-10">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                            <span>Help</span>
                        </div>
                        <div className="absolute bottom-0 text-2xl pt-5 pb-10 flex justify-center items-center">
                                <MenuTrigger>
                                    <Button aria-label="User Menu" className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-14 mr-3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        <span className="block"> {user.username} </span>
                                    </Button>
                                    <Popover>
                                        <Menu>
                                        <MenuItem className="bg-white px-8 py-5 cursor-pointer " onAction={() => logoutClick()}>Sign Out</MenuItem>
                                        </Menu>
                                    </Popover>
                                </MenuTrigger>
                        </div>
                    </div>}
                <button className=" md:hidden bg-primary px-1 py-2 max-h-10 z-20 fixed border" onClick={() => setShowSidebar(!showSidebar)}>
                    {showSidebar && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                    </svg>}
                    {!showSidebar && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>}
                </button>
                
            </div>
            <div className="w-full min-h-screen">
                    {currentTab==="My Projects" && <MyProjects/>}
            </div>
        </div>
    )
}