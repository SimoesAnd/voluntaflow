import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden font-sans">
      {/* Vídeo de Fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* Overlay Escuro com Blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Acesso Admin Discreto no Topo Direito */}
      <div className="absolute top-6 right-6 z-20">
        <Link 
          href="/painel" 
          className="text-sm font-bold text-white/70 hover:text-white px-4 py-2 rounded-lg border border-transparent hover:border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          Painel Admin
        </Link>
      </div>

      {/* Conteúdo Principal */}
      <section className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <header>
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight md:text-8xl drop-shadow-lg">
            Volunta<span className="text-blue-500">Flow</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg md:text-2xl text-gray-200 drop-shadow-md">
            Unindo forças para superar as águas. Conectamos quem precisa de ajuda 
            com quem está pronto para agir em todo o Brasil.
          </p>
        </header>

        <div className="flex w-full flex-col gap-4 px-4 sm:w-auto sm:flex-row">
          <Link 
            href="/conheca-mais" 
            className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-700 sm:w-auto"
          >
            Conheça mais
          </Link>
          
          <Link 
            href="/voluntarios" 
            className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-white hover:text-black sm:w-auto"
          >
            Seja um Voluntário <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="absolute bottom-6 w-full text-center text-sm font-medium text-gray-300 drop-shadow-md">
        © 2026 VoluntaFlow - Conectando Corações, Salvando Vidas. Todos os direitos reservados.
      </footer>
    </main>
  );
}