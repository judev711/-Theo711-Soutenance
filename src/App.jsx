import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Acceuil from "./components/Acceuil";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/" element={<Acceuil/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
