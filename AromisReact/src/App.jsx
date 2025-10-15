// App.jsx
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Profile from "./components/Perfil";
import Login from "./components/Login";
import Register from "./components/Register";
import Catalogo from "./components/Catalogo";
import Carrito from "./components/Carrito";

// Hooks
import { useCart } from "./hooks/useCart";

function App() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Navbar />
      
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <ProductList addToCart={addToCart} />
              <Filters />
            </>
          } 
        />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* User Routes */}
        <Route path="/perfil" element={<Profile />} />
        
        {/* Product Routes */}
        <Route 
          path="/catalogo" 
          element={<Catalogo addToCart={addToCart} />} 
        />
        
        {/* Cart Route */}
        <Route 
          path="/carrito" 
          element={
            <Carrito 
              cart={cart} 
              removeFromCart={removeFromCart} 
              clearCart={clearCart} 
            />
          } 
        />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;