import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "./Loader";


const PublicRoute = ({children}) => {
    const { isLoading, isAuthenticated } = useContext(AuthContext);
    
    if(isLoading) return <Loader />
    if(isAuthenticated) return <Navigate to='/dashboard' />

    return children;
}

export default PublicRoute;