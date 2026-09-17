import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import { DiscordIcon } from "./components/DiscordIcon";
import { Search, Sparkles, ShieldCheck, X } from "lucide-react";

export const DISCORD_INVITE_URL = "https://discord.gg/shuziroastral";

interface LinkItem {
  title: string;
  link: string;
  description?: string;
  isDiscord?: boolean;
  status?: string;
  onClick?: () => void;
}

const links: LinkItem[] = [
  { title: "Tarefas sp", link: DISCORD_INVITE_URL },
  { title: "Leia Sp", link: DISCORD_INVITE_URL },
  { title: "Matific", link: DISCORD_INVITE_URL },
  { title: "Khan academy", link: DISCORD_INVITE_URL },
  { title: "Educação profissional", link: DISCORD_INVITE_URL },
  { title: "Sala do futuro Hub", link: "https://bakai.shuziroastral.lol/" },
  { title: "Apostilas", link: "https://bakai.shuziroastral.lol/" },
  { title: "Avaliação diagnóstico", link: "https://nocteris-diagnostica-astral.vercel.app/" },
  { title: "Redação", link: DISCORD_INVITE_URL },
  { title: "Alura", link: DISCORD_INVITE_URL, status: "Em desenvolvimento" },
  { 
    title: "Speak sp", 
    link: DISCORD_INVITE_URL, 
    description: "SPEAK DISPONÍVEL SOMENTE NO DISCORD", 
    isDiscord: true 
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDiagnosticModal, setShowDiagnosticModal] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!showDiagnosticModal) return;
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [showDiagnosticModal, countdown]);

  const handleOpenDiagnosticModal = () => {
    setCountdown(5);
    setShowDiagnosticModal(true);
  };

  const filteredLinks = links.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-monochrome-grid p-4 sm:p-6 md:p-10 text-white flex flex-col items-center">
      {/* Header */}
      <header className="mb-10 text-center w-full max-w-4xl pt-6 sm:pt-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-inner">
          <Sparkles size={14} className="text-white" />
          <span>Central de Links & Comunidade</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          ShuziroAstral <span className="text-zinc-500">Hub</span>
        </h1>
        
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed">
          Acesse recursos, ferramentas e plataformas de estudo através do nosso servidor oficial no Discord.
        </p>

        {/* Search Bar */}
        <div className="mt-8 relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
          <input
            type="text"
            placeholder="Buscar plataforma..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-900/80 border border-zinc-800 focus:border-white text-white placeholder-zinc-500 rounded-full py-3 pl-11 pr-4 text-sm transition-all outline-none focus:ring-1 focus:ring-white/20 backdrop-blur-md"
          />
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto w-full flex-grow space-y-12">
        {/* Grid of Cards */}
        {filteredLinks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredLinks.map((item, index) => (
              <Card 
                key={index}
                title={item.title} 
                link={item.link} 
                description={item.description}
                isDiscord={item.isDiscord}
                status={item.status}
                onClick={
                  item.title === "Avaliação diagnóstico" 
                    ? handleOpenDiagnosticModal 
                    : undefined
                }
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl max-w-md mx-auto">
            <p className="text-zinc-400 text-sm">Nenhuma plataforma encontrada com "{searchTerm}"</p>
            <button 
              onClick={() => setSearchTerm("")}
              className="mt-3 text-xs text-white underline hover:text-zinc-300 transition-colors"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Modal for Avaliação diagnóstico notice */}
        {showDiagnosticModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center space-y-6">
              {/* Top line highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none rounded-t-3xl" />
              
              {/* Close button */}
              <button 
                onClick={() => setShowDiagnosticModal(false)}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              {/* Discord Icon / Badge */}
              <div className="p-4 rounded-2xl bg-zinc-800 border border-zinc-700 text-white shadow-inner mt-2">
                <DiscordIcon size={36} />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">Aviso Importante</h3>
                <p className="text-zinc-300 text-sm leading-relaxed font-medium">
                  Entre na nossa comunidade do Discord para receber atualizações sobre scripts e gabaritos
                </p>
              </div>

              <div className="w-full space-y-3 pt-2">
                <a 
                  href={DISCORD_INVITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold flex items-center justify-center gap-2.5 transition-colors text-sm border border-zinc-700 cursor-pointer"
                >
                  <DiscordIcon size={18} />
                  Entrar no Discord
                </a>

                {countdown > 0 ? (
                  <button
                    disabled
                    className="w-full py-3.5 px-6 rounded-xl bg-zinc-800 text-zinc-400 font-bold text-center text-sm border border-zinc-700/60 cursor-not-allowed flex items-center justify-center gap-2 select-none opacity-80"
                  >
                    Aguarde {countdown}s para entrar...
                  </button>
                ) : (
                  <a 
                    href="https://nocteris-diagnostica-astral.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowDiagnosticModal(false)}
                    className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-center transition-all text-sm shadow-lg flex items-center justify-center gap-2 cursor-pointer animate-in fade-in duration-300"
                  >
                    Entrar
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Discord Featured Hero Section */}
        <div className="relative overflow-hidden bg-zinc-900/90 border border-zinc-800 backdrop-blur-2xl p-8 sm:p-12 md:p-16 rounded-3xl flex flex-col items-center text-center gap-6 shadow-2xl hover:border-zinc-700 transition-all duration-300 mt-12 max-w-4xl mx-auto w-full">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
          
          <div className="p-4 rounded-2xl bg-white text-black shadow-lg">
            <DiscordIcon size={40} />
          </div>
          
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs text-zinc-400 font-medium uppercase tracking-widest">
              <ShieldCheck size={14} className="text-zinc-300" />
              <span>Comunidade Oficial</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Entre no Nosso Servidor no Discord
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Junte-se à nossa comunidade para acessar todas as plataformas, tirar dúvidas, interagir com os membros e receber atualizações em primeira mão.
            </p>
          </div>
          
          <a 
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 bg-white hover:bg-zinc-200 text-black font-bold py-3.5 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 flex items-center gap-3 text-sm sm:text-base cursor-pointer"
          >
            <DiscordIcon size={22} />
            ENTRAR NO DISCORD
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center text-zinc-600 border-t border-zinc-900 pt-8 pb-10 w-full max-w-4xl text-sm">
        Feito por bakai
      </footer>
    </div>
  );
}
