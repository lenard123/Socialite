import { BellOutlined, MenuOutlined, MessageOutlined, SearchOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Input } from "antd";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import NavLink from "./NavLink";
import { useState } from 'react'
import { useCurrentUserAvatar } from "@/scripts/states/selectors/useCurrentUser";

export default function Header() {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false)
    const currentUserAvatar = useCurrentUserAvatar()

    return (
        <header className='sticky top-0 z-[1] w-full bg-white header-height shadow px-4'>

            {/* Container */}
            <div className='max-w-5xl mx-auto h-full flex justify-between items-center'>
                {/* Left */}
                <div className='flex w-full lg:w-auto'>
                    {/* Logo */}
                    <div className='flex w-full lg:w-auto justify-between items-center'>
                        <Link to='/' className='flex gap-2 items-center'>
                            <span className='font-bold text-xl'>Socialite</span>
                        </Link>
                        <Button className='lg:hidden' icon={<MenuOutlined />} />
                    </div>{/* End Logo */}
                    {/* Searchbox */}
                    <div className='ml-8 hidden lg:block'>
                        <Input
                            prefix={<SearchOutlined className='text-gray-400' />}
                            className='rounded-lg'
                            size='large'
                            placeholder='Search for users or post'
                        />
                    </div>{/* End Searchbox */}
                </div>{/* End Left */}

                {/* Right */}
                <div className='hidden lg:flex justify-end items-center gap-8'>
                    <nav className='flex gap-2'>
                        <NavLink to='/messages' title='Message' icon={<MessageOutlined className='text-gray-500' />} />
                        <NavLink to='/notifications' title='Notifications' icon={<BellOutlined className='text-gray-500' />} />
                    </nav>

                    <Dropdown onVisibleChange={setIsDropdownVisible} visible={isDropdownVisible} trigger={['click']} placement='bottomRight' overlay={<DropdownMenu setIsDropdownVisible={setIsDropdownVisible}/>}>
                        <Avatar size='large' src={currentUserAvatar} />
                    </Dropdown>
                </div>{/* End Right */}

            </div>{/* End Container */}

        </header >
    )
}