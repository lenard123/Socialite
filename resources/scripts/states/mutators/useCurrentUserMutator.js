import { useQueryClient } from "react-query"

const useCurrentUserMutator = () => {
    const queryClient = useQueryClient()

    const mutate = (user) => {
        queryClient.setQueryData('currentUser', user)
    }

    return mutate
}

export default useCurrentUserMutator