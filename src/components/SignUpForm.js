import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { isEmail, isStrongPassword } from 'validator'

export default function SignUpForm() {

    // useStates
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [errorType, setErrorType] = useState("")

    // useSignup
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) => {

        e.preventDefault()

        // check for certain errors
        let errorInput = ""

        // do the passwords match?
        if (password !== passwordConfirm) {
            errorInput = document.getElementById("ConfirmPassword")
        }

        // is the password strong?
        if (!isStrongPassword(password, {minLength: 8, minUppercase: 1, minLowercase: 1, minNumbers:1, minSymbols: 0})) {
            errorInput = document.getElementById("Password")
        }

        // is the email valid?
        if (!isEmail(email)) {
            errorInput = document.getElementById("Email") 
        }

        // if any of the errors above were found, return
        if (errorInput !== "") {
            errorInput.focus()
            return;
        }

        
        await signup(username, email, password)

        // if username is already taken, show error message
        if (error === "Username Taken") {
            setErrorType("Username Taken")
            errorInput = document.getElementById("Username")
            errorInput.focus()
            return;
        }
    
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
                            onChange={(e) => {
                                setUsername(e.target.value)
                            
                                if (errorType === "Username Taken") {
                                    setErrorType("")
                                }
                            }}
                            value={username}
                            placeholder="Enter Username"
                            className="w-60 block flex-1 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                            required /> 
                    </div>
                    {errorType === "Username Taken" && <span className="text-red-500 text-sm">Username already in use</span>}
                    <label htmlFor="Email" className="mt-8 block text-lg pb-1">
                        Email
                    </label>
                    <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                        <input 
                            id="Email"
                            type="email"
                            onChange={(e) => {
                                
                                    setEmail(e.target.value) 

                                    if (!isEmail(email)) {
                                        setErrorType("Invalid Email")
                                    } else {
                                        setErrorType("")
                                    }
                                }    
                            }          
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
                    <div className="max-w-60">{password !== passwordConfirm && passwordConfirm !== "" && 
                        <span className="text-red-500 text-sm wrap">Passwords do not match</span>}
                    </div>

                    <div className="flex justify-center mt-10 pb-10">
                        <button className="inline-flex justify-center gap-x-1.5 px-1 bg-secondary-100 rounded-xl disabled:bg-blue-400" type="submit" id="submitBtn" disabled={isLoading}>
                            <span className="px-8 py-2 text-slate-100 text-xl"> {!isLoading ? "Sign Up" : "Signing up..."}</span>
                        </button>
                    </div>


                </div>
            </form>

        </div>
        
    )
}