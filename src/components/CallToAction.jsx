import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const CallToAction = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleOptions = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "#0d1117", // Um preto um pouco mais suave
      },
    },
    particles: {
      number: { value: 60, density: { enable: true, area: 800 } },
      color: { value: "#ffffff" },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
      opacity: { value: 0.3 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <section className="relative bg-slate-900 text-white py-20 sm:py-28 text-center overflow-hidden">
      {/* --- MUDANÇA IMPORTANTE AQUI --- */}
      <Particles
        id="tsparticles-cta"
        init={particlesInit}
        options={particleOptions}
        className="absolute inset-0"
      />
      <div className="relative z-10 max-w-xl mx-auto px-6">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in-up leading-tight">
          Transforme suas ideias em realidade brilhante ✨
        </h3>
        <p
          className="text-base sm:text-lg md:text-2xl mb-8 opacity-90 animate-fade-in max-w-md mx-auto"
          style={{ animationDelay: "0.3s", animationFillMode: "both" }}
        >
          Produtos artesanais feitos para encantar e emocionar.
        </p>
        <a
          href="https://wa.me/message/UUG3ASGMKYAYE1"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-block w-full sm:w-auto px-8 sm:px-10 py-4 rounded-full text-lg font-bold bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg hover:scale-105 transition-transform duration-300 animate-pulse"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          Faça sua Personalização
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
