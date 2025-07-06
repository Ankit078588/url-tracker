import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;



const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if(!name || !email || !password) {
            return toast.error('All fields are required.');
        }

        try {
            await axios.post(BASE_URL + '/api/auth/register', {name, email, password});
            toast.success('Signup Successful.');
            navigate('/login');
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

        {/* Register form */}
        <div className="max-w-md mx-auto px-6 py-24 relative z-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Register</h2>
            <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <div>
                <label htmlFor="text" className="block text-gray-700 font-medium mb-2">Name</label>
                <input type="text" id="name" placeholder="Name" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" name="name" value={name} onChange={(e) => {setName(e.target.value)} }/>
            </div> 
            <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" name={email} value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2"> Password </label>
                <input type="password" id="password" placeholder="••••••••" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="submit" className="w-full cursor-pointer bg-gradient-to-r from-pink-500 to-pink-900 text-white font-semibold px-4 py-3 rounded-md shadow hover:opacity-90 transition" > Register </button>
            </form>

            <p className="text-center text-gray-700 mt-6"> Don’t have an account?{" "} 
                <Link to="/login" className="text-pink-700 font-medium hover:underline">Login </Link>
            </p>
        </div>
        </main>
    );
};

export default Register;
