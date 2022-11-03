import Homepage from './Pages/Homepage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ProductPage from './Pages/ProductPage';
import ProductsPage from './Pages/ProductsPage';
import Cart from './Pages/Cart';

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
