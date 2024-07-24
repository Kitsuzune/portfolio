import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/Forgot";
import NotFound from "./pages/404";
import Profile from "./pages/User/Menu/Profile";
import ChangePassword from "./pages/User/Menu/ChangePassword";
import ProfilePicture from "./pages/User/Menu/ProfilePicture";
import Store from "./pages/Marketplace/Store";
import FlashSale from "./pages/Marketplace/FlashSale";
import Product from "./pages/Marketplace/Detail.jsx/Product";
import Cart from "./pages/Transaction/Cart";
import Dashboard from "./pages/Admin/Menu/Dashboard/Dashboard";
import ProductAdmin from "./pages/Admin/Menu/Product/Product";
import EditProduct from "./pages/Admin/Menu/Product/EditProduct";
import Order from "./pages/User/Menu/Order";
import AdminOrder from "./pages/Admin/Menu/Orders/Order";
import WishList from "./pages/User/Menu/WishList";
import AdminBanner from "./pages/Admin/Menu/Banner/Banner";
import EditBanner from "./pages/Admin/Menu/Banner/EditBanner";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/profile-picture" element={<ProfilePicture />} />

        {/* Store */}
        <Route path="/market" element={<Store />} />
        <Route path="/market/flash-sale" element={<FlashSale />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/wishlist" element={<WishList />} />

        {/* Admin */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<ProductAdmin />} />
        <Route path="/admin/products/add" element={<EditProduct />} />
        <Route path="/admin/products/:productId" element={<EditProduct />} />
        <Route path="/admin/orders" element={<AdminOrder />} />
        <Route path="/admin/banner" element={<AdminBanner />} />
        <Route path="/admin/banner/:bannerId" element={<EditBanner />} />

        {/* Unused */}
        {/* <Route path='/old' element={<IndexOld />} /> */}
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
