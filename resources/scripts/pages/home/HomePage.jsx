import WritePost from '@/scripts/components/WritePost'
import useFeedQuery from '@/scripts/states/queries/useFeedQuery'
import { Helmet } from 'react-helmet'
import Post from '@/scripts/components/Post'
import { Button, List } from 'antd'

export default function HomePage() {

    const { posts, hasNextPage, isLoading, fetchNextPage,  isFetchingNextPage } = useFeedQuery()

    return (
        <div className='sm:p-4'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className='max-w-5xl mx-auto w-full grid grid-cols-3 lg:grid-cols-5'>

                <div className='col-span-3 space-y-4'>
                    <WritePost />

                    <List
                        dataSource={posts}
                        loading={isLoading}
                        loadMore={
                                <div className='text-center leading-8 mt-3 h-8'>
                                    {
                                        hasNextPage 
                                            ? <Button loading={isFetchingNextPage} disabled={isFetchingNextPage} onClick={fetchNextPage}>See more</Button>
                                            : <span>Follow more people to see more</span>
                                    }
                                </div>
                        }
                        renderItem={post => (
                            <List.Item key={post.id}>
                                <Post post={post} />
                            </List.Item>
                        )}
                    />
                    {/* <div className='flex flex-col gap-4'>
                        {
                            posts.map(post => (
                                <Post post={post} key={post.id} />
                            ))
                        }
                    </div>
                    <button onClick={fetchNextPage} disabled={!hasNextPage}>load more</button>
                    { isFetchingNextPage ? 'fetching':null } */}
                </div> 

                <div className='p-8 bg-green-500 col-span-2 hidden lg:block'>
                    a
                </div>

            </div>
        </div>
    )
}