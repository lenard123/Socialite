import useCurrentUser from "@/scripts/queries/useCurrentUser";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard()
{
    const { data:currentUser, isSuccess } = useCurrentUser()
    const isLoggedIn = isSuccess && currentUser !== null;

    if (isLoggedIn) {
        return <Outlet />
    }

    return <Navigate to='/login' />
}