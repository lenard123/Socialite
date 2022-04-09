import { createPost } from "@/scripts/apis/postApi"
import useMutation from "@/scripts/hooks/useMutation"
import usePostMutator from "@/scripts/states/mutators/usePostMutator"
import { message } from "antd"
import { useState } from 'react'

const useCreatePost = () => {
    const [content, setContent] = useState('')
    const { prependPost } = usePostMutator()
    const mutation = useMutation(createPost, {
        retry: 0,
        onSuccess: (_data) => {
            prependPost(_data)
            setContent('')
            message.success('Posted successfully')
        }
    })

    return {
        ...mutation,
        content,
        setContent
    }
}

export default useCreatePost