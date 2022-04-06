import { message } from "antd"
import { login } from "@/scripts/apis/authApi"
import useMutation from "@/scripts/hooks/useMutation"
import useCurrentUserMutator from "@/scripts/states/mutators/useCurrentUserMutator"

const useLogin = () => {

    const mutateCurrentUser = useCurrentUserMutator()

    return useMutation(login, {
        retry: 0,
        onSuccess: (user) => {
            message.success('Login successfully')

            //This will also cause the page to redirect because of the Guest Guard
            mutateCurrentUser(user)
        }
    })
}

export default useLogin