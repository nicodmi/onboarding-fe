import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductList from './pages/products/ProductList';
import ProductCreate from './pages/products/ProductCreate';
import CustomerList from './pages/cutomers/CustomerList';
import CustomerCreate from './pages/cutomers/CustomerCreate';
import CartList from './pages/carts/CartList';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/product-list">
            <ProductList />
          </Route>
          <Route path="/product-create">
            <ProductCreate />
          </Route>
          <Route path="/customer-list">
            <CustomerList />
          </Route>
          <Route path="/customer-create">
            <CustomerCreate />
          </Route>
          <Route path="/cart-list">
            <CartList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
