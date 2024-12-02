import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin/AdminLayout";
import AdminHome from "./pages/admin/AdminHome";
import AdminCategory from "./pages/admin/CategoryPage/AdminCategory";
import AdminProduct from "./pages/admin/ProductPage/AdminProduct";
import AdminOrders from "./pages/admin/OrderPage/AdminOrders";
import Layout from "./components/client/Layout";
import Home from "./pages/client/Home";
import Shop from "./pages/client/Shop";
import Cart from "./pages/client/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/client/Checkout";
import AdminUsers from "./pages/admin/UserPage/AdminUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={< AdminHome/>} />
          <Route path="category" element={< AdminCategory/>} />
          <Route path="product" element={< AdminProduct/>} />
          <Route path="orders" element={< AdminOrders/>} />
          <Route path="users" element={< AdminUsers/>} />
        </Route>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="check-out" element={<Checkout/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
