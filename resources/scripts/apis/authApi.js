import Http, { requestCookie } from "../utils/Http";

export const login = async ({ email, password }) => {
    await requestCookie()
    return await Http.post('/login', { email, password })
}

export const register = async ({ email, name, password, password_confirmation }) => {
    await requestCookie()
    return await Http.post('/register', {
        email,
        name,
        password,
        password_confirmation
    })
}