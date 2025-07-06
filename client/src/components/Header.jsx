import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
const BASE_URL = import.meta.env.VITE_BASE_URL;


const Header = () => {
    const { setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleLogout() {
        try {
            await axios.get(BASE_URL + '/api/auth/logout', {
                withCredentials: true
            });
            toast.success('Logged out successfully.');
            setUser(null);
            setIsAuthenticated(false);

            setTimeout(() => { navigate('/') }, 0);
        } catch(e) {
            toast.error( e?.response?.data?.message || 'Internal server error.');
        }
    }

    return (
      <header className="w-full relative z-10 shadow-md backdrop-blur bg-white/70">
        {/* Colored Blurred Gradient Top Overlay - light pink bkg */}
        <div className="absolute -top-1/2 left-0 transform -translate-x-[30%] -translate-y-[5%] z-0 w-[450px] h-[450px] sm:w-[700px] sm:h-[700px] blur-3xl opacity-50"  style={ {background: "radial-gradient(ellipse at center, #a61b5d 0%, transparent 80%)"} } />

        {/* Header section */}
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-pink-700 cursor-pointer">Shortly</h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <Link to='/'><span className="hover:text-pink-900">Home</span></Link>
            <Link to='/dashboard'><span className="hover:text-pink-900">Dashboard</span></Link>
            {
                !isAuthenticated && <Link to='/login'><span className="px-4 py-[8px] rounded-md border-2 border-pink-600 text-pink-600">Login</span></Link>
            }
            
            {
                isAuthenticated? 
                <button onClick={handleLogout} className="px-4 py-[8px] rounded-md bg-red-800 text-white cursor-pointer">Logout</button>
                :
                <Link to='/register'><span className="px-4 py-[10px] rounded-md bg-gradient-to-r from-pink-500 to-pink-900 text-white">Signup</span></Link> 
            }
          </nav>
        </div>
      </header>
    );
};


export default Header;

