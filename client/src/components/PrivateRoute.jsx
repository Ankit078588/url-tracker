import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Loader from "./Loader";


const PrivateRoute = ({children}) => {
    const { isLoading, isAuthenticated } = useContext(AuthContext);
    
    if(isLoading) return <Loader />
    if(!isAuthenticated)  return  <Navigate to='/login' />

    return children
}

export default PrivateRoute;