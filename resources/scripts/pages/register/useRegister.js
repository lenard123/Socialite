import { message } from "antd"
import { register } from "@/scripts/apis/authApi"
import useMutation from "@/scripts/hooks/useMutation"
import useCurrentUserMutator from "@/scripts/states/mutators/useCurrentUserMutator"

const useRegister = () => {

    const mutateCurrentUser = useCurrentUserMutator()

    return useMutation(register, {
        retry: 0,
        onSuccess: (user) => {
            message.success('Registered Successfully')

            //This will also cause the page to redirect because of the Guest Guard
            mutateCurrentUser(user)
        }
    })
}

export default useRegister