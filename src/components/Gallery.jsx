import React, { useState } from "react";

// --- IMAGENS (nenhuma alteração aqui) ---
import agendasPersonalizadas from "../assets/agendas-personalizadas.jpg";
import cadernetaSaude from "../assets/caderneta-saude.jpg";
import planejadoresCalendarios from "../assets/planejadores-calendarios.jpg";
import mimosSucesso from "../assets/mimos-sucesso.jpg";
import diarioDevocional from "../assets/diario-devocional.jpg";
import prontosParaEncantar from "../assets/prontos-para-encantar.jpg"; // A imagem ainda pode ser usada
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

// --- LISTA DE PRODUTOS (CATEGORIA ATUALIZADA) ---
const products = [
  {
    id: 1,
    category: "agendas-personalizadas",
    name: "Agendas Personalizadas",
    image: agendasPersonalizadas,
  },
  {
    id: 21,
    category: "maternidade",
    name: "Álbum de Fotos",
    image: albumdefotos,
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
    name: "Mimos de Sucesso",
    image: mimosSucesso,
  },
  {
    id: 5,
    category: "organizacao-e-inspiracao",
    name: "Diário Devocional",
    image: diarioDevocional,
  },
  // --- ALTERAÇÕES NESTE BLOCO ---
  {
    id: 6,
    category: "pronta-entrega",
    name: "Itens a Pronta Entrega",
    image: prontosParaEncantar,
  },
  {
    id: 52,
    category: "pronta-entrega",
    name: "Bloco Organizador",
    image: blocoorganizador,
  },
  {
    id: 53,
    category: "pronta-entrega",
    name: "Bloquinhos",
    image: bloquinhos,
  },
  {
    id: 54,
    category: "pronta-entrega",
    name: "Mimos de Sucesso",
    image: mimosSucesso,
  },
  {
    id: 55,
    category: "pronta-entrega",
    name: "Cadernetas de Anotação",
    image: cadernetasdeanotacao,
  },
  {
    id: 56,
    category: "pronta-entrega",
    name: "Caderno de Anotação",
    image: cadernoanotacao,
  },
  {
    id: 57,
    category: "pronta-entrega",
    name: "Caderno de Adesivos",
    image: cadernodeadesivos,
  },
  {
    id: 58,
    category: "pronta-entrega",
    name: "Duo Determinada",
    image: duodeterminada,
  },
  {
    id: 59,
    category: "pronta-entrega",
    name: "Listinhas",
    image: listinhas,
  },
  {
    id: 60,
    category: "pronta-entrega",
    name: "Trio de Anotação",
    image: trioanotacao,
  },
  // --- FIM DO BLOCO DE ALTERAÇÕES ---
  {
    id: 7,
    category: "agendas-personalizadas",
    name: "Agenda de Atendimento",
    image: agendaatendimento,
  },
  {
    id: 8,
    category: "agendas-personalizadas",
    name: "Agenda Automotiva",
    image: agendacarro,
  },
  {
    id: 9,
    category: "agendas-personalizadas",
    name: "Agenda Serra Azul",
    image: agendaserraazul,
  },
  {
    id: 10,
    category: "agendas-personalizadas",
    name: "Agenda Escolar",
    image: agendadaescola,
  },
  {
    id: 11,
    category: "agendas-personalizadas",
    name: "Agenda Pré-Escola",
    image: agendapreescola,
  },
  {
    id: 12,
    category: "agendas-personalizadas",
    name: "Agenda Floral",
    image: agendafloral,
  },
  {
    id: 13,
    category: "agendas-personalizadas",
    name: "Agenda Personalizada",
    image: agendaadriana,
  },
  {
    id: 14,
    category: "agendas-personalizadas",
    name: "Agenda Tema Poker",
    image: agendapoker,
  },
  {
    id: 15,
    category: "agendas-personalizadas",
    name: "Agenda Infantil Girafa",
    image: agendagirafa,
  },
  {
    id: 16,
    category: "maternidade",
    name: "Agenda Infantil Davi",
    image: agendadavi,
  },
  {
    id: 17,
    category: "maternidade",
    name: "Agenda da Saúde",
    image: agendasaude,
  },
  {
    id: 18,
    category: "maternidade",
    name: "Caderneta de Saúde",
    image: cadernetadesaude,
  },
  {
    id: 19,
    category: "maternidade",
    name: "Caderneta de Saúde Minnie",
    image: cadernetasaudeminie,
  },
  {
    id: 20,
    category: "maternidade",
    name: "Caderneta Ursinho",
    image: cadernetaursinho,
  },
  {
    id: 22,
    category: "maternidade",
    name: "Caderneta Ursinha",
    image: cadernetaursinha,
  },
  {
    id: 23,
    category: "maternidade",
    name: "Caderneta Esmeralda",
    image: cadernetaesmeralda,
  },
  {
    id: 24,
    category: "maternidade",
    name: "Caderneta Helena",
    image: cadernetahelena,
  },
  {
    id: 25,
    category: "planejadores-e-calendarios",
    name: "Livro Caixa",
    image: livrocaixa,
  },
  {
    id: 26,
    category: "planejadores-e-calendarios",
    name: "Duo Planner",
    image: duoplanner,
  },
  {
    id: 27,
    category: "planejadores-e-calendarios",
    name: "Planner Serra Azul",
    image: plannerserraazul,
  },
  {
    id: 28,
    category: "planejadores-e-calendarios",
    name: "Planner Empreenda",
    image: plannerempreenda,
  },
  {
    id: 29,
    category: "planejadores-e-calendarios",
    name: "Planner de Estudo",
    image: plannerestudo,
  },
  {
    id: 30,
    category: "planejadores-e-calendarios",
    name: "Planner Modular",
    image: plannermodular,
  },
  {
    id: 31,
    category: "planejadores-e-calendarios",
    name: "Planner da Noiva",
    image: plannernoiva,
  },
  {
    id: 32,
    category: "planejadores-e-calendarios",
    name: "Planner de Organização",
    image: plannerorganizacao,
  },
  {
    id: 33,
    category: "planejadores-e-calendarios",
    name: "Planner Pedagógico",
    image: plannerpedagogico,
  },
  {
    id: 34,
    category: "mimos-de-sucesso",
    name: "Bloco Formando",
    image: blocoformando,
  },
  {
    id: 35,
    category: "mimos-de-sucesso",
    name: "Bloco de Notas A6",
    image: blocoa6,
  },
  {
    id: 36,
    category: "mimos-de-sucesso",
    name: "Bloquinho",
    image: bloquinho,
  },
  {
    id: 37,
    category: "mimos-de-sucesso",
    name: "Caderno para Igreja",
    image: cadernoigreja,
  },
  {
    id: 38,
    category: "mimos-de-sucesso",
    name: "Calendários Pequenos",
    image: calendariospequenos,
  },
  {
    id: 39,
    category: "mimos-de-sucesso",
    name: "Chaveiro de Acrílico",
    image: chaveiroacrilico,
  },
  {
    id: 40,
    category: "mimos-de-sucesso",
    name: "Chaveiro Post",
    image: chaveiropost,
  },
  {
    id: 41,
    category: "mimos-de-sucesso",
    name: "Lousa Mágica",
    image: lousamagica,
  },
  {
    id: 42,
    category: "mimos-de-sucesso",
    name: "Marca Página",
    image: marcapagina,
  },
  {
    id: 43,
    category: "organizacao-e-inspiracao",
    name: "Caderno com Capa Maleável",
    image: cadernocapamaleavel,
  },
  {
    id: 44,
    category: "organizacao-e-inspiracao",
    name: "Caderno de Leitura",
    image: cadernoleitura,
  },
  {
    id: 45,
    category: "organizacao-e-inspiracao",
    name: "Caderno de Receitas",
    image: cadernodereceitas,
  },
  {
    id: 46,
    category: "organizacao-e-inspiracao",
    name: "Caderno de Versículos",
    image: cadernodeversiculos,
  },
  {
    id: 47,
    category: "organizacao-e-inspiracao",
    name: "Caderno de Anotações",
    image: cadernodeanotacoes,
  },
  {
    id: 48,
    category: "organizacao-e-inspiracao",
    name: "Devocional",
    image: devocional,
  },
  {
    id: 49,
    category: "organizacao-e-inspiracao",
    name: "Diário de Sonhos",
    image: diariodesonhos,
  },
  {
    id: 50,
    category: "organizacao-e-inspiracao",
    name: "Lista de Compras",
    image: listadecompras,
  },
  {
    id: 51,
    category: "organizacao-e-inspiracao",
    name: "Livro Caixa",
    image: livrocaixa,
  },
];

function Gallery() {
  const [filter, setFilter] = useState("agendas-personalizadas");

  const filteredProducts = products.filter((product) => {
    return product.category === filter;
  });

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Nossa Galeria de Encantamento
        </h2>

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
            // --- ALTERAÇÃO FEITA AQUI ---
            { value: "pronta-entrega", label: "Pronta Entrega" },
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
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
