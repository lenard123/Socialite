import axios from "axios";
import Cookies from 'js-cookie'

const Http = axios.create({
    baseURL: '/api',
    withCredentials: true
})

const successMiddleware = (response) => response
const errorMiddleware = (error) => {
    error.validationErrors = {}
    if (error?.response.status === 422) {
        const errors = error.response.data.errors
        error.validationErrors = Object.keys(errors).reduce( (acm, field) => ({
            ...acm,
            [field]: {validateStatus: 'error', help: errors[field].join('\n')}
        }), {})
    }

    return Promise.reject(error)
}

Http.interceptors.response.use(successMiddleware, errorMiddleware)

export const requestCookie = async () => {
    return Cookies.get('XSRF-TOKEN') || await Http.get('/csrf-cookie')
}

export default Http