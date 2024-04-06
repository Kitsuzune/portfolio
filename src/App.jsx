import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexMain from "./pages/IndexMain";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
