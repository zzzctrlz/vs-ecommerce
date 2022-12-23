import HomePage from './Pages/HomePage';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage';
import ProductsPage from './Pages/ProductsPage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import SuccessPage from ".Pages/SuccessPage";

import{
   BrowserRouter,
   Switch,
   Route,
   Redirect,
} from "react-router-dom";

import {useSelector} from "react-redux";




const App = () => {
   const user = useSelector((state)=>state.user.currentUser);
  //const user = null;
  return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" >
               <HomePage />
            </Route>
            <Route path="/register">
               {user ? <Redirect to="/" /> : <RegisterPage />}   
            </Route>
            <Route path="/login">
               {user ? <Redirect to="/" /> : <LoginPage />}   
            </Route>
            <Route path="/products/:category">
               <ProductsPage />   
            </Route>
            <Route path="/product/:id">
               <ProductPage />
            </Route>
            <Route path="/cart">
               <CartPage />   
            </Route>
            <Route path="/success">
               <SuccessPage />
            </Route>
         </Switch>
      </BrowserRouter> 
  );
};

export default App;
