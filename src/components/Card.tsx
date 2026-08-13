import React from 'react';
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { DiscordIcon } from "./DiscordIcon";

interface CardProps {
  title: string;
  link: string;
  description?: string;
  isDiscord?: boolean;
  status?: string;
}

const Card: React.FC<CardProps> = ({ title, link, description, isDiscord, status }) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`
        group relative overflow-hidden p-6 rounded-2xl backdrop-blur-xl transition-all duration-300
        border border-zinc-800/80 bg-zinc-900/40 hover:bg-zinc-900/80
        hover:border-zinc-600 shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)] flex flex-col justify-between h-full
      `}
    >
      {/* Top subtle highlight line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      
      <div>
        <div className="flex items-start justify-between mb-4 gap-3">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-zinc-800/80 border border-zinc-700/60 text-white group-hover:bg-white group-hover:text-black transition-colors duration-300 shadow-sm">
              {isDiscord ? <DiscordIcon size={22} /> : <ArrowUpRight size={22} />}
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-zinc-100 transition-colors tracking-tight">
              {title}
            </h3>
          </div>
          {status && (
            <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-zinc-800/90 text-zinc-300 border border-zinc-700/80 shrink-0">
              {status}
            </span>
          )}
        </div>
        
        {description && (
          <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      
      <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
        <span>Acessar plataforma</span>
        <div className="w-7 h-7 rounded-full bg-zinc-800/60 border border-zinc-700/60 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
      
      {/* Make entire card clickable to Discord link */}
      <a href={link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-20">
        <span className="sr-only">Acessar {title}</span>
      </a>
    </motion.div>
  );
};

export default Card;
