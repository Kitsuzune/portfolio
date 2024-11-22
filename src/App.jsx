import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Store";
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
import About from "./pages/About";
import Contact from "./pages/Contact";
import ImageGen from "./pages/AiCorner/image/ImageGen";
import AiSelection from "./pages/AiCorner/Selection";
import GameSelection from "./pages/Games/Selection";
import GameBird from "./pages/Games/JumpingBird/Index";
import SpacePoint from "./pages/Games/SpacePoint/SpacePoint";

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
        <Route path="/Store" element={<Home />} />

        {/* About */}
        <Route path="/" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

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

        {/* AI */}
        <Route path="/ai/v1" element={<AiSelection />} />
        <Route path="/ai/v1/image-gen" element={<ImageGen />} />

        {/* Game */}
        <Route path="/itsu-game/v1/corner" element={<GameSelection />} />
        <Route path="/itsu-game/v1/jumping-bird/" element={<GameBird />} />

        <Route path="/itsu-game/v1/space-point" element={<SpacePoint />} />

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
