import { logout } from "@/scripts/apis/authApi"
import useCurrentUserMutator from "@/scripts/states/mutators/useCurrentUserMutator"
import { message } from "antd"
import { useMutation } from "react-query"

const useLogout = () => {
    const mutateCurrentUser = useCurrentUserMutator()

    return useMutation(logout, {
        onSuccess: () => {
            mutateCurrentUser(null)
            message.success('Logout Successfully')
        }
    })

}

export default useLogout