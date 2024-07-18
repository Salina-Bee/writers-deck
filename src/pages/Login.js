import {Tabs, TabList, Tab, TabPanel} from 'react-aria-components';
import {Link} from 'react-router-dom';

// components
import LoginForm from "../components/LoginForm";
import SignUpForm from '../components/SignUpForm';

export default function Login() {




    return (
        <div className="h-screen bg-gradient-to-b from-primary to-blue-950 flex">

            

            <div className=" m-auto text-primary">
                
            <div className="m-auto text-white">
                
                <Link to="/writers-deck" className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <span className = "text-xl"> 
                    Return to Home 
                </span>
                </Link>
                
            </div>
            <Tabs className="bg-white shadow-lg rounded-lg px-10">
                <TabList aria-label="User Authentication" className="flex justify-center pt-8 pb-10">
                    <Tab id="Login" className={({ isSelected }) => `
                        text-2xl px-10 py-5
                        ${ isSelected
                            ? 'font-bold outline-none rounded-full underline bg-indigo-200'
                            : 'text-primary hover:bg-primary/10 pressed:bg-primary/10'
                        }
                    `}>
                        Login
                    </Tab>
                    <Tab id="Sign Up" className={({ isSelected }) => `
                        text-2xl px-10 py-5
                        ${ isSelected
                            ? 'font-bold outline-none rounded-full underline bg-indigo-200'
                            : 'text-primary hover:bg-primary/10 pressed:bg-primary/10'
                        }
                    `}>
                        
                        Sign Up</Tab>
                </TabList>
                <TabPanel id="Login">
                    <LoginForm/>
                </TabPanel>
                <TabPanel id="Sign Up">
                    <SignUpForm/>
                </TabPanel>
            </Tabs>
                
            </div>

        </div>
    )
    
}