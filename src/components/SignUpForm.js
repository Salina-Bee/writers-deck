export default function SignUpForm() {

    return (
        <form action="">
            <div className="px-10 pb-10">
                <label htmlFor="Username" className="block text-lg pb-1">
                    Username 
                </label>
                <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                    <input 
                        id="Username"
                        type="text" 
                        placeholder="Enter Username"
                        className="w-60 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                        required /> 
                </div>
                <label htmlFor="Email" className="mt-8 block text-lg pb-1">
                    Email
                </label>
                <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                    <input 
                        id="Email"
                        type="email"
                        placeholder="Enter Email"
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
                        placeholder="Enter Password"
                        className="w-60 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                        required />
                </div>
                <label htmlFor="Confirm Password" className="mt-8 block text-lg pb-1">
                    Confirm Password
                </label>
                <div className="flex rounded-xl shadow-sm ring-1 ring-inset ring-slate-500 focus-within:ring-0 focus-within:ring-inset focus-within:ring-primary">
                    <input
                        id="ConfirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="w-60 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-primary placeholder:text-gray-400 ring-slate-300 focus:ring-0 sm:leading-6"
                        required />
                </div>

                <div className="flex justify-center mt-10">
                    <button className="inline-flex justify-center gap-x-1.5 px-1 bg-secondary-100 rounded-xl" type="submit" id="submitBtn">
                        <span className="px-8 py-2 text-slate-100 text-xl"> Sign Up </span>
                    </button>
                </div>

            </div>
        </form>
    )
}