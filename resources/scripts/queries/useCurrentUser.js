import { useQuery, useQueryClient } from "react-query"
import { fetchCurrentUser } from "../apis/authApi"


const useCurrentUser = () => {
    const queryClient = useQueryClient()
    return useQuery('currentUser', fetchCurrentUser, {
        staleTime: 1000 * 60 * 60 * 2,
        onError: () => {
            queryClient.setQueryData('currentUser', null)
        },
        retry: (failureCount, error) => {
            if (failureCount >= 3) return false

            if (error?.response.status === 401) {
                return false
            }

            return true

        }
    })
}

export default useCurrentUser