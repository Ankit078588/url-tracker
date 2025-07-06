import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "./layouts/HomeLayout";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PublicRoute from "./components/PublicRoute";
import PrivateRoute from "./components/PrivateRoute";


const App = () => {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLayout />}>
              <Route path='/' element={<Hero />} />
              <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
              <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
              <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path='/:id' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;



