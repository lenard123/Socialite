import { message } from "antd"
import { login } from "@/scripts/apis/authApi"
import useMutation from "@/scripts/hooks/useMutation"
import { useQueryClient } from "react-query"

const useLogin = () => {

    const queryClient = useQueryClient()

    return useMutation(login, {
        retry: 0,
        onSuccess: (user) => {
            message.success('Login successfully')

            //This will also cause the page to redirect because of the Guest Guard
            queryClient.setQueryData('currentUser', user)
        }
    })
}

export default useLogin