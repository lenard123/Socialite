import { message } from "antd"
import { register } from "@/scripts/apis/authApi"
import useMutation from "@/scripts/hooks/useMutation"
import { useQueryClient } from "react-query"

const useRegister = () => {

    const queryClient = useQueryClient()

    return useMutation(register, {
        retry: 0,
        onSuccess: (user) => {
            message.success('Registered Successfully')

            //This will also cause the page to redirect because of the Guest Guard
            queryClient.setQueryData('currentUser', user)
        }
    })
}

export default useRegister