import useCurrentUser from "@/scripts/states/selectors/useCurrentUser";
import { Navigate, Outlet } from "react-router-dom";

export default function GuestGuard()
{
    const currentUser = useCurrentUser()
    const isLoggedIn = currentUser !== null

    if (isLoggedIn) {
        return <Navigate to='/' />
    }

    return <Outlet />
}