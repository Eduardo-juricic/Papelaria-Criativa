import React, { useState, useEffect, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadHeartShape } from "tsparticles-shape-heart";
import "../HeroTyping.css";
import "../NeonButton.css";

function Hero() {
  const [text, setText] = useState("");
  const fullText = "Papelaria que Conta a Sua História";
  const typingSpeed = 100;

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeoutId = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeoutId);
    }
  }, [text, fullText]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    await loadHeartShape(engine);
  }, []);

  const particleOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "#ffffff", // Fundo branco
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      shape: {
        type: "heart", // Partículas de coração
      },
      opacity: {
        value: 0.7,
        random: true,
      },
      size: {
        value: { min: 3, max: 10 },
        animation: {
          enable: true,
          speed: 4,
          minimumValue: 1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: "top",
        straight: false,
        outModes: {
          default: "out",
        },
      },
      color: {
        value: ["#ff69b4", "#ff1493", "#ffc0cb"], // Tons de rosa
      },
      // --- A MUDANÇA ESTÁ AQUI ---
      // A propriedade 'links' foi removida para tirar o efeito de constelação
      links: {
        enable: false, // Desabilitando as linhas
      },
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
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
          {" "}
          {/* Texto escuro para fundo branco */}
          <span className="typing-container">{text}</span>
        </h1>
        <div
          className={`transition-opacity duration-1000 ${
            text.length === fullText.length ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-600">
            {" "}
            {/* Texto escuro para fundo branco */}
            Transformamos suas ideias em peças únicas: cadernos, topos de bolo,
            cadernetas e sonhos feitos à mão com carinho.
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
