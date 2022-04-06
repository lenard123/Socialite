import useCurrentUser from "@/scripts/states/selectors/useCurrentUser";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard()
{
    const currentUser = useCurrentUser()
    const isLoggedIn = currentUser !== null;

    if (isLoggedIn) {
        return <Outlet />
    }

    return <Navigate to='/login' />
}