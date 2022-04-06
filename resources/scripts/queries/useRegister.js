import { message } from "antd"
import { register } from "../apis/authApi"
import useMutation from "../hooks/useMutation"

const useRegister = () => {
    return useMutation(register, {
        retry: 0,
        onSuccess: (_data) => {
            message.success('Registered Successfully')
        }
    })
}

export default useRegister