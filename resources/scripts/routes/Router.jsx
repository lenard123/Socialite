import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "@/scripts/pages/register";
import LoginPage from "@/scripts/pages/login";
import HomePage from "@/scripts/pages/home"
import useCurrentUser from "@/scripts/queries/useCurrentUser";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuead";


//Root Component
export default function Router() 
{
    const { isLoading } = useCurrentUser()

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AuthGuard />}>
                    <Route index element={<HomePage />} />
                </Route>

                <Route path='/' element={<GuestGuard />}>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}