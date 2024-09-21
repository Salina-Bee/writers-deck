import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {

    const [error, setError] = useState(null)

    // isLoading: true if request has been sent (but not response), false otherwise
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (username, email, password) => {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch('http://localhost:4000/api/user/signup', {
            method: 'POST',
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify({username, email, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else {
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }

    }

    return {signup, isLoading, error}

}