import axios from "axios";
import Cookies from 'js-cookie'

const Http = axios.create({
    baseURL: '/api',
    withCredentials: true
})

export const requestCookie = async () => {
    return Cookies.get('XSRF-TOKEN') || await Http.get('/csrf-cookie')
}

export default Http