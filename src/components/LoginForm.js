import {useState} from 'react'
import { useLogin } from '../hooks/useLogin'

export default function LoginForm() {

    // useStates
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // useLogin
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {

        e.preventDefault()

        await login(username, password)

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="px-10 pb-10">
                <label htmlFor="Username" className="block text-lg pb-1">
                    Username 
                </label>
                    <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                        <input 
                            id="Username"
                            type="text" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter Username"
                            className="w-60 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                            required /> 
                    </div>
                <label htmlFor="Password" className="mt-8 block text-lg pb-1">
                    Password
                </label>
                <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                    <input
                        id="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                        className="w-60 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                        required />
                </div>
                <div className="flex justify-center mt-10">
                <button className="inline-flex justify-center gap-x-1.5 px-1 bg-secondary-100 rounded-xl disabled:bg-blue-400" type="submit" id="submitBtn" disabled={isLoading}>
                        <span className="px-8 py-2 text-slate-100 text-xl"> {!isLoading ? "Login" : "Logging in..."} </span>
                    </button>
                </div>
                <div className="max-w-60 py-5">
                    {error && <span className="text-red-500 text-md">Incorrect username or password. Please try again. </span>}
                </div>

            </div>                
        </form>
    )
}