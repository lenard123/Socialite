import { fetchFeed } from "@/scripts/apis/userApi"
import { useInfiniteQuery } from "react-query"
import { map } from 'lodash'
import { useMemo } from 'react'

const fetch = ({pageParam = 1}) => {
    return fetchFeed(pageParam)
}

const useFeedQuery = () => {
    const query = useInfiniteQuery(['feed'],  fetch, {
        staleTime: 1000 * 60 * 5,
        getNextPageParam: (lastPage) => {
            if (lastPage.current_page < lastPage.last_page) {
                return lastPage.current_page + 1
            }
            return undefined
        }
    })
    const posts = useMemo(() => {
        if (!query.data) return []
        const { pages } = query.data
        return map(pages, 'data').flat()

    }, [query.data])

    return {
        ...query,
        posts
    }
}

export default useFeedQuery