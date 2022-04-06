import Http, { requestCookie } from "../utils/Http";

export const logout = async () => {
    await requestCookie()
    await Http.post('/logout')
}

export const login = async ({ email, password }) => {
    await requestCookie()
    await logout()
    return await Http.post('/login', { email, password })
}

export const register = async ({ email, name, password, password_confirmation }) => {
    await requestCookie()
    await logout()
    return await Http.post('/register', {
        email,
        name,
        password,
        password_confirmation
    })
}

export const fetchCurrentUser = async () => {
    await requestCookie()
    return await Http.get('/user')
}