import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import moment from 'moment'
import { Link } from "react-router-dom";

export default function Post({ post }) {

    const { author } = post

    return (
        <div className='max-w-xl mx-auto flex flex-col w-full sm:rounded-lg bg-white border border-solid p-4 pb-1 border-gray-300'>

            <div className='flex gap-2 items-center'>
                <Avatar size='large' src={author.avatar_url} />
                <div className='flex flex-grow justify-between'>
                    <div className='flex flex-col leading-3'>
                        <span className='font-bold'>{author.name}</span>
                        <span className='text-sm'>{moment(post.created_at).fromNow()}</span>
                    </div>
                    {/* <Options isBelongsToUser={isBelongsToUser} showDeleteModal={showDeleteModal} /> */}
                </div>
            </div>

            <div className='my-4 text-base'>
                {post.content}
            </div>

            <div className='text-xs flex justify-between py-1'>
                <span>2 Likes</span>
                <span>3 Comments</span>
            </div>

            <div className='flex gap-2 text-lg py-1 border-t border-gray-300'>
                <Link to={`/posts/${post.id}`} className='flex-grow py-1 text-center bg-white hover:bg-gray-100 rounded-full'><LikeOutlined /></Link>
                <Link to={`/posts/${post.id}`} className='flex-grow py-1 text-center bg-white hover:bg-gray-100 rounded-full'><CommentOutlined /></Link>
            </div>



        </div>
    )
}