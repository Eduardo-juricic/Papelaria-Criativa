import React, { useState } from "react";
// Verifique se o caminho da importação da sua logo está correto
import logoComPrimor from "../assets/papelaria-pessoal-logo.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg py-6 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo da Marca */}
        <a href="#" className="flex items-center">
          <img
            src={logoComPrimor}
            alt="Logo Com Primor"
            className="h-20 w-auto rounded-lg"
          />
        </a>

        {/* --- NAVEGAÇÃO PARA DESKTOP --- */}
        <nav className="hidden md:flex">
          <ul className="flex flex-row space-x-8">
            <li>
              <a
                href="#hero"
                className="text-lg font-medium text-gray-700 hover:text-custom-pink transition duration-300"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-lg font-medium text-gray-700 hover:text-custom-pink transition duration-300"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="text-lg font-medium text-gray-700 hover:text-custom-pink transition duration-300"
              >
                Galeria
              </a>
            </li>
          </ul>
        </nav>

        {/* --- BOTÃO HAMBURGUER PARA MOBILE --- */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* --- MENU EXPANSÍVEL PARA MOBILE --- */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="py-4 px-6">
          <ul className="flex flex-col space-y-4">
            <li>
              <a
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-custom-pink"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#features"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-custom-pink"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-700 hover:text-custom-pink"
              >
                Galeria
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
