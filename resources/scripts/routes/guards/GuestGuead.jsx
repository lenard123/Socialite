import useCurrentUser from "@/scripts/queries/useCurrentUser";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestGuard()
{
    const { data:currentUser } = useCurrentUser()
    const isLoggedIn = currentUser !== null

    if (isLoggedIn) {
        console.log('test 1')
        return <Navigate to='/' />
    }

    return <Outlet />
}