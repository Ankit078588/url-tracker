import axios from "axios";
import { createContext, useEffect, useState } from "react";
const BASE_URL = import.meta.env.VITE_BASE_URL;


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    async function fetchData() {
        try {
            setIsLoading(true);
            const res = await axios.get(BASE_URL + '/api/auth/me', {
                withCredentials: true
            });
            
            setIsAuthenticated(true);
            setUser(res.data.user);
        // eslint-disable-next-line no-unused-vars
        } catch(e) {
            setUser(null);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    }

    
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <AuthContext.Provider value={ {user, setUser, isLoading, setIsLoading, isAuthenticated, setIsAuthenticated} }>
            {children}
        </AuthContext.Provider>
    )
}




// import { atom, selector } from 'recoil';

// export const userAtom = atom({
//   key: 'userAtom',
//   default: null,
// });

// export const isLoadingAtom = atom({
//   key: 'isLoadingAtom',
//   default: true,
// });

// // Selector — automatically derived from userAtom
// export const isAuthenticatedSelector = selector({
//   key: 'isAuthenticatedSelector',
//   get: ({ get }) => !!get(userAtom),
// });
