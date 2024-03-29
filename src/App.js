
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import Categories from './Components/Categories/Categories';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import { toHaveFormValues } from '@testing-library/jest-dom/matchers';




let routes = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      {index: true, element: <Home />},
      {path: 'register', element: <Register />},
      {path: 'login', element: <Login />},
      {path: 'products', element: <Products />},
      {path: 'brands', element: <Brands />},
      {path: 'cart', element: <Cart />},
      {path: 'categories', element: <Categories />},
      {path: '*', element: <NotFound />},
    ]
  }
]);


function App() {
  return (
    <>
<RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
