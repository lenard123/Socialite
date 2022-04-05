import { useMutation } from "react-query"
import { register } from "../apis/authApi"

const useRegister = () => {
    return useMutation(register)
}

export default useRegister