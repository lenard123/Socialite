import Http, { requestCookie } from "../utils/Http";

export const fetchFeed = async(page = 1) => {
    await requestCookie()
    return await Http.get('/user/feed', {params: {page}})
}