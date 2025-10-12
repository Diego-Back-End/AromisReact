import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Profile from "./components/Perfil";
import Login from "./components/Login";
import Register from "./components/Register";
import Catalogo from "./components/Catalogo"; 
function App() {
  return (
    <>
      <Navbar />
      
      {/* Aquí van las rutas */}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProductList />
            <Filters />
          </>
        } />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
