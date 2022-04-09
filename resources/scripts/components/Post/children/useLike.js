import { likePost, unlikePost } from "@/scripts/apis/likeApi"
import useMutation from "@/scripts/hooks/useMutation"
import usePostMutator from "@/scripts/states/mutators/usePostMutator"


const action = async ({id, is_like}) => {
    if (is_like) {
        return await unlikePost(id)
    }
    return await likePost(id)
}

const useLike = (post) => {
    const { updatePost } = usePostMutator()
    const mutation = useMutation(action, {
        onSuccess: (data) => {
            updatePost({
                ...post,
                likers_count: data.likers_count,
                is_like: data.is_like
            })
        }
    })

    const handleSubmit = () => {
        if (mutation.isLoading) return;
        mutation.mutate({
            id: post.id,
            is_like: post.is_like
        })
    }

    return {
        ...mutation,
        handleSubmit
    }
}

export default useLike