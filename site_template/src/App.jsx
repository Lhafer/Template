import { About } from "./components/sections/home/about";
import { Products } from "./components/sections/home/products";
import { Reviews } from "./components/sections/home/reviews";
import { NavBar } from "./components/navBar";
import { Routes, Route } from "react-router-dom";
import { Admin } from "./screens/admin";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              <NavBar></NavBar>
              <About></About>
              <Products></Products>
              <Reviews></Reviews>
            </div>
          }
        ></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
      </Routes>
    </>
  );
}

export default App;
