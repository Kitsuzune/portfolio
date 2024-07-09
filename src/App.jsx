import { BrowserRouter, Route, Routes } from "react-router-dom";
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


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/change-password' element={<ChangePassword />} />
          <Route path='/profile-picture' element={<ProfilePicture />} />
          <Route path='*' element={<NotFound />} />
          {/* <Route path='/old' element={<IndexOld />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
