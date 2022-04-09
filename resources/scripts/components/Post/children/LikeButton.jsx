import { LikeFilled, LikeOutlined } from "@ant-design/icons"
import { Spin } from "antd"
import useLike from "./useLike"


export default function LikeButton({ post })
{
    const { is_like } = post
    const { handleSubmit, isLoading } = useLike(post)
    return (
        <button onClick={handleSubmit} className='cursor-pointer flex-grow py-1 bg-white hover:bg-gray-100 rounded-full'>
            <Spin spinning={isLoading}>
                {is_like
                    ? <LikeFilled className='text-blue-500'/> 
                    : <LikeOutlined />
                }
            </Spin>
        </button>
    )
}