// App.jsx
import { Routes, Route } from "react-router-dom"; 
// 🔹 Importa las herramientas para manejar rutas (URLs) en la app

// Components
import Navbar from "./components/Navbar";      //  Barra de navegación
import Hero from "./components/Hero";          //  Sección principal de bienvenida
import ProductList from "./components/ProductList"; //  Lista de productos destacados
import Filters from "./components/Filters";    //  Filtros para buscar productos
import Footer from "./components/Footer";      //  Pie de página
import Profile from "./components/Perfil";     //  Página de perfil de usuario
import Login from "./components/Login";        //  Página de login
import Register from "./components/Register";  //  Página de registro
import Catalogo from "./components/Catalogo";  //  Página de catálogo completo
import Carrito from "./components/Carrito";    //  Página del carrito de compras

// Hooks
import { useCart } from "./hooks/useCart";     //  Hook personalizado para manejar el carrito

function App() {
  //  Extrae funciones y datos del carrito usando el hook
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  return (
    <>
      <Navbar /> {/*  Siempre visible: navegación en toda la app */}
      
      <Routes>
        {/* Home Route */}
        <Route 
          path="/" 
          element={
            <>
              <Hero />                     {/*  Bienvenida / banner principal */}
              <ProductList addToCart={addToCart} /> {/*  Productos destacados, se puede agregar al carrito */}
              <Filters />                  {/*  Filtros rápidos de productos */}
            </>
          } 
        />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />     {/*  Página para iniciar sesión */}
        <Route path="/register" element={<Register />} /> {/*  Página para registrarse */}
        
        {/* User Routes */}
        <Route path="/perfil" element={<Profile />} />  {/*  Perfil del usuario */}
        
        {/* Product Routes */}
        <Route 
          path="/catalogo" 
          element={<Catalogo addToCart={addToCart} />} // Catálogo completo, también se puede agregar al carrito
        />
        
        {/* Cart Route */}
        <Route 
          path="/carrito" 
          element={
            <Carrito 
              cart={cart}               //  Lista de productos en el carrito
              removeFromCart={removeFromCart} //  Función para eliminar productos
              clearCart={clearCart}     //  Función para vaciar el carrito
            />
          } 
        />
      </Routes>
      
      <Footer /> {/*  Siempre visible: pie de página */}
    </>
  );
}

export default App; 
//  Exporta la app principal para que React la ejecute
