import { createPost } from "@/scripts/apis/postApi"
import useMutation from "@/scripts/hooks/useMutation"
import { message } from "antd"
import { useState } from 'react'
import { useQueryClient } from "react-query"

const useCreatePost = () => {
    const [content, setContent] = useState('')
    const queryClient = useQueryClient()
    const mutation = useMutation(createPost, {
        retry: 0,
        onSuccess: (_data) => {
            queryClient.invalidateQueries(['posts', 'feed'])
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