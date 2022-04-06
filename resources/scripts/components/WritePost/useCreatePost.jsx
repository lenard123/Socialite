import { createPost } from "@/scripts/apis/postApi"
import useMutation from "@/scripts/hooks/useMutation"
import { message } from "antd"
import { useState } from 'react'

const useCreatePost = () => {
    const [content, setContent] = useState('')
    const mutation = useMutation(createPost, {
        retry: 0,
        onSuccess: (data) => {
            console.log(data)
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