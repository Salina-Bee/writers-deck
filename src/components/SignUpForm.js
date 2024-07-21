import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { isEmail, isStrongPassword } from 'validator'

export default function SignUpForm() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const {signup, error, isLoading} = useSignup()
    const [errorType, setErrorType] = useState("")

    const handleSubmit = async (e) => {

        e.preventDefault()

        // check if certain errors are still unresolved
        if (errorType !== "") {

            let errorInput = "" 
            switch (errorType) { // find the location of the unresolved error
                case "Invalid Email":
                    errorInput = document.getElementById("Email")
                    return;
                case "Weak Password":
                    errorInput = document.getElementById("Password")
                    return;
                case "Passwords do not match":
                    errorInput = document.getElementById("ConfirmPassword")
                    return;
                default:
            }
            
            // put focus on unresolved error
            if (errorInput !== "") {
                errorInput.focus()
                return;
            }
        }
        
        await signup(username, email, password)
    

    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <div className="px-10">
                    <label htmlFor="Username" className="block text-lg pb-1">
                        Username 
                    </label>
                    <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                        <input 
                            id="Username"
                            type="text"
                            onChange={(e) => {setUsername(e.target.value)}}
                            value={username}
                            placeholder="Enter Username"
                            className="w-60 block flex-1 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                            required /> 
                    </div>
                    {error === "Username Taken" && <span className="text-red-500 text-sm">Username already in use</span>}
                    <label htmlFor="Email" className="mt-8 block text-lg pb-1">
                        Email
                    </label>
                    <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                        <input 
                            id="Email"
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}              
                            value={email}
                            placeholder="Enter Email"
                            className="w-60 block flex-1 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6 "
                            required />
                    </div>
                    {!isEmail(email) && email !== "" && <span className="text-red-500 text-sm">Invalid Email</span>}
                    <label htmlFor="Password" className="mt-8 block text-lg pb-1">
                        Password
                    </label>
                    <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                        <input
                            id="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={() => { !isStrongPassword(password, {minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers:1, minSymbols: 0})? setErrorType("Weak Password") : setErrorType("")}}
                            value={password}
                            placeholder="Enter Password"
                            className="w-60 block flex-1 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                            required />
                    </div>
                    <div className="max-w-60">
                        {!isStrongPassword(password, {minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers:1, minSymbols: 0}) 
                        && password !== "" && <span className="text-red-500 text-sm wrap">Your password must be at least 8 characters 
                        and contain uppercase, lowercase, and numeric characters.</span>}
                    </div>
                    
                    <label htmlFor="Confirm Password" className="mt-8 block text-lg pb-1">
                        Confirm Password
                    </label>
                    <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                        <input
                            id="ConfirmPassword"
                            type="password"
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            onBlur={() => { password !== passwordConfirm? setErrorType("Passwords do not match") : setErrorType("")}}
                            value={passwordConfirm}
                            placeholder="Confirm Password"
                            className="w-60 block flex-1 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                            required />
                    </div>
                    <div className="max-w-60">{errorType==="Passwords do not match" && <span className="text-red-500 text-sm wrap">Passwords do not match</span>}</div>

                    <div className="flex justify-center mt-10">
                        <button className="inline-flex justify-center gap-x-1.5 px-1 bg-secondary-100 rounded-xl disabled:bg-blue-400" type="submit" id="submitBtn" disabled={isLoading}>
                            <span className="px-8 py-2 text-slate-100 text-xl"> {!isLoading ? "Sign Up" : "Signing up..."}</span>
                        </button>
                    </div>
                    <div className="max-w-60 py-5">{error && error !== "Username Taken" && <span className="text-red-500 text-md">Could not create account: {error}</span>}</div>


                </div>
            </form>

        </div>
        
    )
}