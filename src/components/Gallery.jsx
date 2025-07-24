import React, { useState } from "react";

// --- IMAGENS (nenhuma alteração aqui) ---
import agendasPersonalizadas from "../assets/agendas-personalizadas.jpg";
import cadernetaSaude from "../assets/caderneta-saude.jpg";
import planejadoresCalendarios from "../assets/planejadores-calendarios.jpg";
import mimosSucesso from "../assets/mimos-sucesso.jpg";
import diarioDevocional from "../assets/diario-devocional.jpg";
import prontosParaEncantar from "../assets/prontos-para-encantar.jpg";
import agendaatendimento from "../assets/agenda-atendimento.jpg";
import agendacarro from "../assets/agenda-carro.jpg";
import agendaserraazul from "../assets/agenda-serra-azul.jpg";
import agendadaescola from "../assets/agenda-da-escola.jpg";
import agendapreescola from "../assets/agenda-pre-escola.jpg";
import agendafloral from "../assets/agenda-floral.jpg";
import agendaadriana from "../assets/agenda-adriana.jpg";
import agendapoker from "../assets/agenda-poker.jpg";
import agendagirafa from "../assets/agenda-girafa.jpg";
import agendadavi from "../assets/agenda-davi.jpg";
import agendasaude from "../assets/agenda-saude.jpg";
import cadernetadesaude from "../assets/caderneta-de-saude.jpg";
import cadernetasaudeminie from "../assets/caderneta-saude-minie.jpg";
import cadernetaursinho from "../assets/caderneta-ursinho.jpg";
import albumdefotos from "../assets/album-de-fotos.jpg";
import cadernetaursinha from "../assets/caderneta-ursinha.jpg";
import cadernetaesmeralda from "../assets/caderneta-esmeralda.jpg";
import cadernetahelena from "../assets/caderneta-helena.jpg";
import livrocaixa from "../assets/livro-caixa.jpg";
import duoplanner from "../assets/duo-planner.jpg";
import plannerserraazul from "../assets/planner-serra-azul.jpg";
import plannerempreenda from "../assets/planner-empreenda.jpg";
import plannerestudo from "../assets/planner-estudo.jpg";
import plannermodular from "../assets/planner-modular.jpg";
import plannernoiva from "../assets/planner-noiva.jpg";
import plannerorganizacao from "../assets/planner-organizacao.jpg";
import plannerpedagogico from "../assets/planner-pedagogico.jpg";
import blocoformando from "../assets/bloco-formando.jpg";
import blocoa6 from "../assets/bloco-a6.jpg";
import bloquinho from "../assets/bloquinho.jpg";
import cadernoigreja from "../assets/caderno-igreja.jpg";
import calendariospequenos from "../assets/calendarios-pequenos.jpg";
import chaveiroacrilico from "../assets/chaveiro-acrilico.jpg";
import chaveiropost from "../assets/chaveiro-post.jpg";
import lousamagica from "../assets/lousa-magica.jpg";
import marcapagina from "../assets/marca-pagina.jpg";
import cadernocapamaleavel from "../assets/caderno-capa-maleavel.jpg";
import cadernoleitura from "../assets/caderno-leitura.jpg";
import cadernodereceitas from "../assets/caderno-de-receitas.jpg";
import cadernodeversiculos from "../assets/caderno-de-versiculos.jpg";
import cadernodeanotacoes from "../assets/caderno-anotacoes.jpg";
import devocional from "../assets/devocional.jpg";
import diariodesonhos from "../assets/diario-de-sonhos.jpg";
import listadecompras from "../assets/lista-de-compras.jpg";
import blocoorganizador from "../assets/bloco-organizador.jpg";
import bloquinhos from "../assets/bloquinhos.jpg";
import cadernetasdeanotacao from "../assets/cadernetas-de-anotacao.jpg";
import cadernoanotacao from "../assets/caderno-anotacao.jpg";
import cadernodeadesivos from "../assets/caderno-de-adesivos.jpg";
import duodeterminada from "../assets/duo-determinada.jpg";
import listinhas from "../assets/listinhas.jpg";
import trioanotacao from "../assets/trio-anotacao.jpg";

// --- LISTA DE PRODUTOS (nenhuma alteração aqui) ---
const products = [
  {
    id: 1,
    category: "prontos-para-encantar",
    name: "Agendas Personalizadas",
    image: agendasPersonalizadas,
  },
  {
    id: 2,
    category: "maternidade",
    name: "Caderneta de Saúde",
    image: cadernetaSaude,
  },
  {
    id: 3,
    category: "planejadores-e-calendarios",
    name: "Planejadores e Calendários",
    image: planejadoresCalendarios,
  },
  {
    id: 4,
    category: "mimos-de-sucesso",
    name: "Bloquinhos de Colorir",
    image: mimosSucesso,
  },
  {
    id: 5,
    category: "organizacao-e-inspiracao",
    name: "Diário Devocional",
    image: diarioDevocional,
  },
  {
    id: 6,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: prontosParaEncantar,
  },
  {
    id: 7,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendaatendimento,
  },
  {
    id: 8,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendacarro,
  },
  {
    id: 9,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendaserraazul,
  },
  {
    id: 10,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendadaescola,
  },
  {
    id: 11,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendapreescola,
  },
  {
    id: 12,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendafloral,
  },
  {
    id: 13,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendaadriana,
  },
  {
    id: 14,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendapoker,
  },
  {
    id: 15,
    category: "agendas-personalizadas",
    name: "Agendas para Eventos",
    image: agendagirafa,
  },
  {
    id: 16,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: agendadavi,
  },
  {
    id: 17,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: agendasaude,
  },
  {
    id: 18,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: cadernetadesaude,
  },
  {
    id: 19,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: cadernetasaudeminie,
  },
  {
    id: 20,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: cadernetaursinho,
  },
  {
    id: 21,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: albumdefotos,
  },
  {
    id: 22,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: cadernetaursinha,
  },
  {
    id: 23,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: cadernetaesmeralda,
  },
  {
    id: 24,
    category: "maternidade",
    name: "Agendas para Eventos",
    image: cadernetahelena,
  },
  {
    id: 25,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: livrocaixa,
  },
  {
    id: 26,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: duoplanner,
  },
  {
    id: 27,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: plannerserraazul,
  },
  {
    id: 28,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: plannerempreenda,
  },
  {
    id: 29,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: plannerestudo,
  },
  {
    id: 30,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: plannermodular,
  },
  {
    id: 31,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: plannernoiva,
  },
  {
    id: 32,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: plannerorganizacao,
  },
  {
    id: 33,
    category: "planejadores-e-calendarios",
    name: "Agendas para Eventos",
    image: plannerpedagogico,
  },
  {
    id: 34,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: blocoformando,
  },
  {
    id: 35,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: blocoa6,
  },
  {
    id: 36,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: bloquinho,
  },
  {
    id: 37,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: cadernoigreja,
  },
  {
    id: 38,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: calendariospequenos,
  },
  {
    id: 39,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: chaveiroacrilico,
  },
  {
    id: 40,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: chaveiropost,
  },
  {
    id: 41,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: lousamagica,
  },
  {
    id: 42,
    category: "mimos-de-sucesso",
    name: "Agendas para Eventos",
    image: marcapagina,
  },
  {
    id: 43,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: cadernocapamaleavel,
  },
  {
    id: 44,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: cadernoleitura,
  },
  {
    id: 45,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: cadernodereceitas,
  },
  {
    id: 46,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: cadernodeversiculos,
  },
  {
    id: 47,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: cadernodeanotacoes,
  },
  {
    id: 48,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: devocional,
  },
  {
    id: 49,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: diariodesonhos,
  },
  {
    id: 50,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: listadecompras,
  },
  {
    id: 51,
    category: "organizacao-e-inspiracao",
    name: "Agendas para Eventos",
    image: livrocaixa,
  },
  {
    id: 52,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: blocoorganizador,
  },
  {
    id: 53,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: bloquinhos,
  },
  {
    id: 54,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: mimosSucesso,
  },
  {
    id: 55,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: cadernetasdeanotacao,
  },
  {
    id: 56,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: cadernoanotacao,
  },
  {
    id: 57,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: cadernodeadesivos,
  },
  {
    id: 58,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: duodeterminada,
  },
  {
    id: 59,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: listinhas,
  },
  {
    id: 60,
    category: "prontos-para-encantar",
    name: "Agendas para Eventos",
    image: trioanotacao,
  },
];

function Gallery() {
  // --- ALTERAÇÃO 1: O estado inicial agora é a primeira categoria da lista ---
  const [filter, setFilter] = useState("agendas-personalizadas");

  // A lógica de filtragem continua a mesma, mas agora não existe mais o "all"
  const filteredProducts = products.filter((product) => {
    return product.category === filter;
  });

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Nossa Galeria de Encantamento
        </h2>

        {/* --- ALTERAÇÃO 2: O botão "Todos" foi removido do array --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            {
              value: "agendas-personalizadas",
              label: "Agendas Personalizadas",
            },
            { value: "maternidade", label: "Maternidade" },
            {
              value: "planejadores-e-calendarios",
              label: "Planejadores e Calendários",
            },
            { value: "mimos-de-sucesso", label: "Mimos de Sucesso" },
            {
              value: "organizacao-e-inspiracao",
              label: "Organização e Inspiração",
            },
            { value: "prontos-para-encantar", label: "Prontos para Encantar" },
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-semibold transition duration-300
                ${
                  filter === cat.value
                    ? "bg-pink-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* --- GRID DE IMAGENS --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-200 flex flex-col"
            >
              <div className="relative w-full h-96 overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex-grow flex flex-col justify-center items-center">
                <a
                  href="https://arthicipapelariacriativa.lojavirtualnuvem.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-6 py-2 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
                >
                  Ver na Loja
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 text-lg mt-8">
            Nenhum produto nesta categoria ainda.
          </p>
        )}
      </div>
    </section>
  );
}

export default Gallery;
