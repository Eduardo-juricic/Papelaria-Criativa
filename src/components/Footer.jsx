import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    // 1. Cor de fundo e cor de texto principal alteradas aqui
    <footer className="bg-[#DDE8F5] text-[#5A5A5A] py-12 px-6 font-body">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* 2. Nome da empresa e slogan atualizados */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading font-bold mb-2">
              Artichi Papelaria Pessoal
            </h2>
            <p>Charme e funcionalidade em cada detalhe.</p>
          </div>

          {/* 3. Ícones e efeito hover ajustados */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/arthicipapelariapessoal?igsh=c2J4OWRqMGh2ZGc2&utm_source=qr" // <-- LINK DO INSTAGRAM ATUALIZADO
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="http://wa.me/5538999176677" // <-- LINK DO WHATSAPP ATUALIZADO
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-pink-500 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* 4. Cor do texto de direitos autorais ajustada */}
        <div className="text-center mt-10 pt-8 border-t border-gray-400/50">
          <p className="text-sm">
            © {new Date().getFullYear()} Artichi Papelaria Pessoal. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
