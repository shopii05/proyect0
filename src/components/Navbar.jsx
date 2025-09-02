import React from "react";
import logo from "../assets/find-rate-logo.png"; // Asegúrate que esta imagen exista

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Find & Rate Logo" className="h-10 w-auto" />
        <span className="font-bold text-xl text-pink-500">Find & Rate</span>
      </div>

      {/* Links */}
      <div className="space-x-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-pink-500">Inicio</a>
        <a href="/conocenos" className="hover:text-pink-500">Conócenos</a>
        <a href="/perfil" className="text-pink-500 font-semibold">Perfil</a>
        <a href="/registro" className="hover:text-pink-500">Registro</a>
        <a href="/login" className="hover:text-pink-500">Login</a>
      </div>
    </nav>
  );
}
