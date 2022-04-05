import { useMutation } from "react-query"
import { login } from "../apis/authApi"

const useLogin = () => {
    return useMutation(login, {
        retry: 0
    })
}

export default useLogin