import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const CallToAction = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // Configuração com mais intensidade e corações vermelhos
  const intenseHeartOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 40, // <<-- AUMENTADO: Mais corações na tela
      },
      shape: {
        type: "char",
        options: {
          char: {
            value: ["❤️", "💖"], // <<-- COR: Coração vermelho e um toque de rosa
            font: "Verdana",
            style: "",
            weight: "400",
            fill: true,
          },
        },
      },
      move: {
        enable: true,
        speed: 2, // <<-- AUMENTADO: Movimento mais notável
        direction: "right",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      opacity: {
        value: { min: 0.3, max: 0.8 }, // <<-- AUMENTADO: Corações mais visíveis
      },
      size: {
        value: { min: 10, max: 25 }, // Tamanho um pouco maior para mais impacto
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
        },
        onClick: {
          enable: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    // Mantendo o fundo suave que combina com as cores
    <section className="relative bg-gradient-to-br from-pink-50 to-red-100 py-20 sm:py-28 text-center overflow-hidden">
      <Particles
        id="tsparticles-intense-hearts"
        init={particlesInit}
        options={intenseHeartOptions}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <h3 className="text-4xl sm:text-5xl font-heading font-bold mb-6 text-gray-800 leading-tight">
          Criatividade que pulsa em cada detalhe
        </h3>
        <p className="text-lg sm:text-xl mb-10 text-gray-600 font-body max-w-lg mx-auto">
          Deixe-nos fazer parte da sua história com produtos feitos com paixão e
          exclusividade.
        </p>
        <a
          href="https://arthicipapelariacriativa.lojavirtualnuvem.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full text-lg font-bold bg-pink-500 text-white shadow-lg hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 transition-all duration-300"
        >
          Personalize seu Sonho
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
