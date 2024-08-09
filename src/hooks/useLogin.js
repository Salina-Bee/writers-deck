import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (username, password) => {

        setIsLoading(true)
        setError(null)
        
        const response = await fetch('http://localhost:4000/api/user/login', {
            method: 'POST',
            headers:  {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)

            // set error
            setError(json.error)
        } else {

            // save user to localstorage
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}