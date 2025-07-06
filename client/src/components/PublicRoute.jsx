import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";


const PublicRoute = ({children}) => {
    const { isLoading, isAuthenticated } = useContext(AuthContext);
    
    if(isLoading) return (<div className="h-screen"><p>Loading...</p></div>)
    if(isAuthenticated) return <Navigate to='/dashboard' />

    return children;
}

export default PublicRoute;