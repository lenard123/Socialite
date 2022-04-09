import { useQueryClient } from "react-query"

const mapPosts = (posts, newPost) => {
    return posts.map(post => newPost.id === post.id ? newPost : post)
}

const mapPages = (pages, post) => {
    return pages.map( ({data, ...page}) => (
        {
            data: mapPosts(data, post),
            ...page
        }
    ))
}

const paginationUpdateReducer = ( {pages, ...rest} , newPost) => {
    return {
        pages: mapPages(pages, newPost),
        ...rest
    }
}

const paginationPrependReducer = ({pages, ...rest}, post) => {
    const newPages = pages.map( (page, index) => {
        if(index === 0) {
            return { page, data: [post, ...page.data] }
        }
        return page
    })
    return {
        pages: newPages,        
        ...rest
    }
}

const usePostMutator = () => {
    const queryClient = useQueryClient()

    const updatePost = (post) => {
        queryClient.setQueriesData(['posts', 'feed'], (previous) => {
            return paginationUpdateReducer(previous, post)
        })
    }

    const prependPost = (post) => {
        queryClient.setQueriesData(['posts', 'feed'], (previous) => {
            return paginationPrependReducer(previous, post)
        })
    }

    return {
        updatePost,
        prependPost
    }
}

export default usePostMutator