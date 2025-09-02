import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Conocenos from "./pages/Conocenos";
import Profile from "./pages/Profile";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import logo from "./assets/find-rate-logo.png"; // Asegúrate que el logo esté en esta ruta

function App() {
  return (
    <Router>
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 shadow-sm bg-white">
        {/* Logo con link a inicio */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Find & Rate Logo" className="h-25 w-auto" />
          <span className="sr-only">Inicio</span> {/* accesibilidad */}
        </Link>

        {/* Menú de navegación */}
        <nav className="flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-pink-600">Inicio</Link>
          <Link to="/conocenos" className="hover:text-pink-600">Conócenos</Link>
          <Link to="/profile" className="hover:text-pink-600">Perfil</Link>
          <Link to="/registro" className="hover:text-pink-600">Registro</Link>
          <Link to="/login" className="hover:text-pink-600">Login</Link>
        </nav>
      </header>

      {/* Rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
