import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexOld from "./pages/IndexOld";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/old' element={<IndexOld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
