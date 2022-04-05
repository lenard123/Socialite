import Http, { requestCookie } from "../utils/Http";

export const login = async ({ email, password }) => {
    await requestCookie()
    const { data } = await Http.post('/login', { email, password })
    return data   
}
