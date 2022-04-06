import { CameraFilled, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Input, message } from 'antd'
import { useState } from 'react'
import useCreatePost from './useCreatePost'

export default function WritePost({ className }) {

    const { isLoading, mutate, content, setContent } = useCreatePost()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isLoading) return;
        mutate(content)
    }
    
    return (
        <div className={`max-w-xl w-full mx-auto ${className}`}>
            <div className='flex gap-2 sm:rounded-lg bg-white border border-solid p-4 border-gray-300'>
                <Avatar size='large' icon={<UserOutlined />} />
                <form onSubmit={handleSubmit} className='flex-grow flex flex-col gap-2'>
                    <Input.TextArea onChange={e => setContent(e.target.value)} value={content} className='rounded-lg' rows={2} placeholder='Write something...' />
                    <div className='flex justify-between'>
                        <div className='space-x-2'>
                            <CameraFilled />
                            <span>Attach a photo</span>
                        </div>
                        <Button loading={isLoading} htmlType='submit' className='btn-green'>Share</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}