import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../HeroTyping.css"; // Estilo para o cursor de digitação
import "../NeonButton.css"; // Vamos criar este arquivo para o estilo do botão

function Hero() {
  const [text, setText] = useState("");
  const fullText = "Papelaria que Conta a Sua História";
  const typingSpeed = 100;

  // Lógica do efeito de digitação
  useEffect(() => {
    if (text.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [text, fullText]);

  // Função para carregar o motor de partículas
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Configuração das partículas
  const particleOptions = {
    fullScreen: { enable: false },
    background: { color: { value: "#0d1117" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: ["#ff69b4", "#00bfff"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 1,
        straight: false,
      },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden h-[90vh] flex items-center justify-center text-center"
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleOptions}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          <span className="typing-container">{text}</span>
        </h1>
        <div
          className={`transition-opacity duration-1000 ${
            text.length === fullText.length ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
            Transformamos suas ideias em peças únicas: cadernos, topos de bolo,
            cadernetas e sonhos feitos à mão com carinho.
          </p>

          {/* AQUI ESTÁ A MUDANÇA: O botão agora usa a classe 'neon-button' */}
          <a
            href="https://wa.me/message/UUG3ASGMKYAYE1"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button" // Trocamos todas as classes do Tailwind por esta
            data-text="Personalize Seu Sonho!" // Usado para criar o reflexo
          >
            Personalize Seu Sonho!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
