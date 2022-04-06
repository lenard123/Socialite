import useCurrentUser from "@/scripts/states/selectors/useCurrentUser";
import { LogoutOutlined } from "@ant-design/icons";
import { Avatar, Divider, Menu, Modal } from "antd";
import { Link } from "react-router-dom";
import useLogout from "./useLogout";

export default function DropdownMenu({setIsDropdownVisible})
{
    const { avatar_url, id, name } = useCurrentUser()
    const { mutateAsync } = useLogout()

    const menuClicked = ({ key }) => {
        setIsDropdownVisible(false)

        if (key === 'logout') {
            Modal.confirm({
                title: 'Confirm Logout',
                content: 'Are you sure to logout?',
                async onOk() {
                    await mutateAsync()
                }
            })
        }

    }

    return (
        <div className='bg-white p-4 pr-8 shadow'>
            <div className='flex items-center gap-4'>
                <Avatar src={avatar_url} size={60}/>
                <div className='flex flex-col leading-3 text-gray-700'>
                    <span className='text-lg font-bold'>{name}</span>
                    <Link to={`/profile/${id}`}>See your profile</Link>
                </div>
            </div>

            <Divider className='my-4'/>

            <Menu onClick={menuClicked} className='text-base'>
                <Menu.Item key='logout' icon={<LogoutOutlined />}>Logout</Menu.Item>
            </Menu>


        </div>
    )    
}