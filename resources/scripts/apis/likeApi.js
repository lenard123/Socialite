import Http, { requestCookie } from "../utils/Http";

const like = async(likeable_type, id) => {
    await requestCookie()
    return await Http.post('/like', {
        likeable_type,
        id
    })
}

const unlike = async(likeable_type, id) => {
    await requestCookie()
    return await Http.delete('/like', {
        data: { likeable_type, id }
    })
}

export const likePost = async(postId) => {
    return await like('App\\Models\\Post', postId)
}

export const unlikePost = async(postId) => {
    return await unlike('App\\Models\\Post', postId)
}