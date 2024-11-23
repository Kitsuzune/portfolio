import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Store";
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
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import Projects from './pages/Projects';

const AppRoutes = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Routes>
      {/* Not Found */}
      <Route path="*" element={<NotFound />} />

      {/* Public Routes */}
      <Route path="/" element={<About />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/Store" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route path="/profile" element={isAuthenticated? <Profile /> : <Navigate to="/login" />} />
      <Route path="/change-password" element={isAuthenticated ? <ChangePassword /> : <Navigate to="/login" />} />
      <Route path="/profile-picture" element={isAuthenticated ? <ProfilePicture /> : <Navigate to="/login" />} />
      <Route path="/market" element={isAuthenticated ? <Store /> : <Navigate to="/login" />} />
      <Route path="/market/flash-sale" element={isAuthenticated ? <FlashSale /> : <Navigate to="/login" />} />
      <Route path="/product/:id" element={isAuthenticated ? <Product /> : <Navigate to="/login" />} />
      <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" />} />
      <Route path="/orders" element={isAuthenticated ? <Order /> : <Navigate to="/login" />} />
      <Route path="/wishlist" element={isAuthenticated ? <WishList /> : <Navigate to="/login" />} />

      {/* Admin Routes */}
      <Route path="/admin/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
      <Route path="/admin/products" element={isAuthenticated ? <ProductAdmin /> : <Navigate to="/login" />} />
      <Route path="/admin/products/add" element={isAuthenticated ? <EditProduct /> : <Navigate to="/login" />} />
      <Route path="/admin/products/:productId" element={isAuthenticated ? <EditProduct /> : <Navigate to="/login" />} />
      <Route path="/admin/orders" element={isAuthenticated ? <AdminOrder /> : <Navigate to="/login" />} />
      <Route path="/admin/banner" element={isAuthenticated ? <AdminBanner /> : <Navigate to="/login" />} />
      <Route path="/admin/banner/:bannerId" element={isAuthenticated ? <EditBanner /> : <Navigate to="/login" />} />

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
  );
};

export default AppRoutes;