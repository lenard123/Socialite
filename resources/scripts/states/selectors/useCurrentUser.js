import useCurrentUserQuery from "../queries/useCurrentUserQuery"

const useCurrentUser = () => {
    const { data } = useCurrentUserQuery()
    return data
}

export const useCurrentUserAvatar = () => {
    const { avatar_url } = useCurrentUser()
    return avatar_url
}

export const useCurrentUserId = () => {
    const { id } = useCurrentUser()
    return id
}

export default useCurrentUser