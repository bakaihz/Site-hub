export interface LinkItem {
  id: string;
  title: string;
  link: string;
  description?: string;
  isDiscord?: boolean;
  status?: string;
}

export const DISCORD_INVITE_URL = "https://discord.gg/uWx57PvtE";

export const links: LinkItem[] = [
  { id: "tarefassp", title: "Tarefas sp", link: DISCORD_INVITE_URL },
  { id: "leiasp", title: "Leia Sp", link: DISCORD_INVITE_URL },
  { id: "matific", title: "Matific", link: DISCORD_INVITE_URL },
  { id: "khan", title: "Khan academy", link: DISCORD_INVITE_URL },
  { id: "profissional", title: "Educação profissional", link: DISCORD_INVITE_URL },
  { id: "saladofuturo", title: "Sala do futuro Hub", link: "https://bakai.shuziroastral.lol/" },
  { id: "apostilas", title: "Apostilas", link: "https://bakai.shuziroastral.lol/" },
  { id: "avaliacaodiagnostico", title: "Avaliação diagnóstico", link: "https://nocterisastral-diagnostica-prov.vercel.app/" },
  { id: "redacao", title: "Redação", link: DISCORD_INVITE_URL },
  { id: "alura", title: "Alura", link: DISCORD_INVITE_URL },
  { 
    id: "speak",
    title: "Speak sp", 
    link: DISCORD_INVITE_URL, 
    description: "SPEAK DISPONÍVEL SOMENTE NO DISCORD", 
    isDiscord: true 
  },
];
