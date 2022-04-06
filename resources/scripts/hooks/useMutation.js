import { useMutation as useRQMutation } from "react-query";
import { useState } from 'react'

const useMutation = (action, {onMutate, onError, ...options} = {}) => {
    const [validationErrors, setValidationErrors] = useState({})
    const mutation = useRQMutation(action, {
        
        onMutate: (variables) => {
            setValidationErrors({})
            return onMutate && onMutate(variables)
        },

        onError: (error) => {
            setValidationErrors(error.validationErrors)
            return onError && onError(error)
        },

        ...options
    })

    return {
        ...mutation,
        validationErrors
    }
}

export default useMutation