import { message } from "antd"
import { login } from "../apis/authApi"
import useMutation from "../hooks/useMutation"

const useLogin = () => {
    return useMutation(login, {
        retry: 0,
        onSuccess: (_data) => {
            message.success('Login successfully')
        }
    })
}

export default useLogin