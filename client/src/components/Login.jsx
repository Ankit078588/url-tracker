import axios from "axios";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate,  } from "react-router-dom";
import loginSound from '../assets/sounds/notification.wav'; // adjust path as needed
import { AuthContext } from "../contexts/AuthContext";
const BASE_URL = import.meta.env.VITE_BASE_URL;


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const { setIsAuthenticated, setUser} = useContext(AuthContext);


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(!email || !password) {
            return toast.error('All fields are required.');
        }

        try {
            const res = await axios.post(BASE_URL + '/api/auth/login', {email, password}, {
                withCredentials: true
            });
            toast.success('Login Successful!');
            const audio = new Audio(loginSound);
            audio.play();

            setIsAuthenticated(true);
            setUser(res.data.user);
            navigate('/dashboard');
        } catch(e) {
            toast.error(e?.response?.data?.message || 'Internal Server Error.')
        }
    }


  return (
    <main className="flex-1 bg-gray-50/10 relative z-10">
      {/* Dotted Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={ {backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "20px 20px"} }
      />

      {/* Login form */}
      <div className="max-w-md mx-auto px-6 py-24 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Login</h2>
        <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" placeholder="you@example.com" className="w-full  px-4 py-3 border rounded-md focus:outline-none  focus:ring-pink-500" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2"> Password </label>
            <input type="password" id="password" placeholder="••••••••" className="w-full px-4 py-3 border rounded-md focus:outline-none " value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-pink-900 text-white font-semibold px-4 py-3 rounded-md shadow hover:opacity-90 transition cursor-pointer" > Login </button>
        </form>

        <p className="text-center text-gray-700 mt-6"> Don’t have an account?{" "} 
            <Link to="/register" className="text-pink-700 font-medium hover:underline"> Sign up </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
