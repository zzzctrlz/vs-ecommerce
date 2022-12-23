import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ProductPage from './Pages/ProductPage';
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';

import{
   BrowserRouter,
   Switch,
   Route,
} from "react-router-dom";

const App = () => {
  
  //const user = null;

  return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/" >
               <Homepage />
            </Route>
            <Route path="/products">
               <ProductsPage />   
            </Route>
            <Route path="/product">
               <ProductPage />
            </Route>
            <Route path="/cart">
               <Cart />   
            </Route>
            <Route path="/login">
               <Login />   
            </Route>
            <Route path="/register">
               <Register />   
            </Route>
         </Switch>
      </BrowserRouter>
      
  );
};

export default App;
