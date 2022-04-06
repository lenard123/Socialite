import Http, { requestCookie } from "../utils/Http";

export const createPost = async (content) => {
    await requestCookie();
    return Http.post('/posts', { content })
}