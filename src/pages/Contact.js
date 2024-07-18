import {useState} from 'react'

export default function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)
    const [submitText, setSubmitText] = useState("Submit")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitText("Submitting...")

        const contact = {name, email, message}

        try {
            await fetch('http://localhost:4000/api/contact', {
                method: "POST",
                body: JSON.stringify(contact),
                headers: {
                    'Content-Type': 'application/json'
                }
            })    

            // set error status
            setError("success");

            // reset state values
            setName("");
            setEmail("");
            setMessage("");

            // reset form
            const form = document.getElementById("contact-form");
            form.reset();


        } catch (error) {
            console.log(error)
            setError("fail");
        }

        setSubmitText("Submit")
        const msg = document.getElementById("submitBtn")
        msg.scrollIntoView();
        

        
    }

    return (
        <div>
            <div className="flex justify-center pt-10 text-primary ">
                
                <div className="">
                    <h1 className="text-3xl font-bold text-center">Have a question? We're&nbsp;here&nbsp;to&nbsp;help.</h1>
                    <br/>
                    <p className="text-center text-xl">Please fill out the form below and we'll&nbsp;get&nbsp;back&nbsp;to&nbsp;you&nbsp;as&nbsp;soon&nbsp;as&nbsp;possible!</p>
                </div>
            </div>
            <div>
                <form id="contact-form" onSubmit={handleSubmit}>

                <div className="">
                     <div className="flex justify-center mt-8 text-primary ">
                         <div className="bg-white px-8 pt-8 pb-3">
                            <label htmlFor="name" className="block text-xl font-bold leading-6">
                                Name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-300 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                                    <input
                                        id="name"
                                        onChange={(e)=> setName(e.target.value)}
                                        name="name"
                                        type="text"
                                        placeholder="Enter Name"
                                        autoComplete="name"
                                        className="w-96 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 focus:ring-0 sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                        </div>   
                        
                    </div>
                    <div className="flex justify-center text-primary">
                         <div className="bg-white px-8 pt-5 pb-3">
                            <label htmlFor="email" className="block text-xl font-bold leading-6">
                                Email
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <input
                                        id="email"
                                        onChange={(e)=> setEmail(e.target.value)}
                                        name="email"
                                        type="email"
                                        placeholder="Enter Email"
                                        autoComplete="email"
                                        className="w-96 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                        </div>   
                    </div>
                    <div className="flex justify-center text-primary">
                         <div className="bg-white shadow-lg px-8 pt-5 pb-8">
                            <label htmlFor="email" className="block text-xl font-bold leading-6">
                                Message
                            </label>
                            <div className="mt-2 pb-10">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                                    <textarea
                                        id="message"
                                        onChange={(e)=> setMessage(e.target.value)}
                                        name="message"
                                        type="text"
                                        placeholder="Enter Message"
                                        className="w-96 h-40 resize-none flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:leading-6"
                                        required
                                    />
                                </div>
                            </div>
                        </div>   
                    </div>
                    <br/>
                    <div className="flex justify-center pb-5">
                        <button className="inline-flex justify-center gap-x-1.5 px-1 bg-secondary-100 rounded-xl" type="submit" id="submitBtn">
                            <span className="px-8 py-2 text-slate-100 text-2xl"> {submitText} </span>
				        </button>
                    </div>
                    {error==="success" && <div id="successMsg" className="flex items-center justify-center gap-x-4 py-2 mx-5 px-10 pb-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#1f8740" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="text-xl leading-6 text-primary">
                            The form was submitted successfully. Thank you for contacting us!
                        </p>
                    </div>}
                    {error==="fail" && <div id="errorMsg" className="flex items-center justify-center gap-x-4 py-2 mx-5 px-10 pb-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#f54242" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <p className="text-xl leading-6 text-primary">
                            An error occurred while submitting the form. Please try again.
                        </p>
                    </div>}
                </div>
                   
                    
                    
                        
                </form>
            </div>
        </div>
    )
}