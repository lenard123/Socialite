import { Outlet } from "react-router-dom";
import Header from "./children/Header";


export default function MainLayout()
{
    return (
        <div className='bg-gray-50 min-h-screen text-gray-700 flex flex-col'>
            <Header/>
            <Outlet />
        </div>
    )
}