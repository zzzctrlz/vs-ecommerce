import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import AboutPage from "./Pages/AboutPage";
import ProductsPage from './Pages/ProductsPage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import SuccessPage from "./Pages/SuccessPage";

import{
   BrowserRouter,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";

import {useSelector} from "react-redux";
//import { NavigateBefore } from '@mui/icons-material';




const App = () => {
   const user = useSelector((state)=>state.user.currentUser);
  //const user = null;
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="register" element={user ? <Navigate to="/" replace /> : <RegisterPage />} />
            <Route path="login" element={user ? <Navigate to="/" replace /> : <LoginPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products/:category?" element={<ProductsPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="success" element={<SuccessPage />} />
         </Routes>
      </BrowserRouter> 
  );
};

export default App;
