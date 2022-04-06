import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
import Router from "./routes/Router";

const queryClient = new QueryClient()

//Root Component
export default function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <Router />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}