import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadImageShape } from "tsparticles-shape-image";
import butterflyImage from "../assets/butterfly.png"; // VERIFIQUE SE A IMAGEM ESTÁ EM 'src/assets/butterfly.png'
import "../HeroTyping.css";
import "../NeonButton.css";

function Hero() {
  const [text, setText] = useState("");
  const fullText = "Papelaria pessoal, charme e funcionalidade";
  const typingSpeed = 100;

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [text, fullText]);

  // Função para inicializar o motor das partículas
  const particlesInit = useCallback(async (engine) => {
    // Carrega o motor completo e a forma de imagem
    await loadFull(engine);
    await loadImageShape(engine);
  }, []);

  // Opções das partículas (borboletas)
  const particleOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "#ffffff",
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          area: 800,
        },
      },
      shape: {
        type: "image",
        image: {
          src: butterflyImage,
          width: 32,
          height: 32,
        },
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
      },
      size: {
        value: { min: 15, max: 30 },
      },
      move: {
        enable: true,
        speed: 2,
        direction: "top",
        straight: false,
        outModes: {
          default: "out",
        },
      },
      links: {
        enable: false,
      },
    },
    detectRetina: true,
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden h-[90vh] flex items-center justify-center text-center"
    >
      {/* --- MUDANÇA IMPORTANTE AQUI --- */}
      <Particles
        id="tsparticles-hero"
        init={particlesInit}
        options={particleOptions}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
          <span className="typing-container">{text}</span>
        </h1>
        <div
          className={`transition-opacity duration-1000 ${
            text.length === fullText.length ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600">
            Perfeito em cada detalhe! Planeje com beleza e viva com leveza,
            produtos que transformam rotina de organização!
          </p>
          <a
            href="https://wa.me/message/UUG3ASGMKYAYE1"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button"
            data-text="Personalize Seu Sonho!"
          >
            Personalize Seu Sonho!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
