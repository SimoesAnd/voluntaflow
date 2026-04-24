'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, CloudRain, 
  Building2, ShieldAlert, Activity, 
  ThermometerSun, Droplets, HeartHandshake,
  MapPin, AlertTriangle, CloudLightning,
  Siren, Stethoscope, Heart, Info, Home, 
  PackagePlus, ZapOff
} from 'lucide-react';

// Importando o nosso componente de Mapa Interativo
import MapaBrasil from '../../components/MapaBrasil';

// Em Next.js App Router com "use client", o metadata precisa ir para um layout.js separado.
// Removi o export const metadata daqui para não dar erro na build.

export default function ConhecaMais() {
  const [activeTab, setActiveTab] = useState('emergencia');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header Minimalista e Alinhado */}
      <header className="sticky top-0 z-50 w-full bg-white/90 px-6 py-4 backdrop-blur-md border-b border-gray-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-blue-600">
            <ArrowLeft size={18} />
            Voltar ao início
          </Link>
          <span className="font-bold text-xl tracking-tight">Volunta<span className="text-blue-600">Flow</span></span>
        </div>
      </header>

      <main className="pb-20">
        {/* Seção 1: Hero (Introdução de Impacto) */}
        <section className="px-6 py-20 md:py-32 text-center bg-gray-50">
          <div className="mx-auto max-w-4xl flex flex-col items-center">
            <h1 className="mb-6 text-5xl font-extrabold text-gray-900 md:text-7xl tracking-tight">
              A água que <span className="text-blue-600">transforma</span> realidades.
            </h1>
            <p className="max-w-2xl text-xl text-gray-600 leading-relaxed text-center">
              Com mais de 8 milhões de brasileiros impactados por desastres naturais na última década, entender o problema é o primeiro passo estrutural para a prevenção.
            </p>
          </div>
        </section>

        {/* Barra de Estatísticas Linear (Perfeitamente Alinhada) */}
        <section className="mx-auto max-w-5xl px-6 -mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-gray-100 rounded-2xl p-1 shadow-lg">
            <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center h-full">
              <CloudRain size={32} className="mb-4 text-blue-500" />
              <h3 className="text-3xl font-black text-gray-900">8.2M+</h3>
              <p className="text-sm font-medium text-gray-500 mt-1">Pessoas Afetadas</p>
            </div>
            <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center h-full">
              <Activity size={32} className="mb-4 text-orange-500" />
              <h3 className="text-3xl font-black text-gray-900">1.900+</h3>
              <p className="text-sm font-medium text-gray-500 mt-1">Municípios em Risco</p>
            </div>
            <div className="bg-white p-8 rounded-xl flex flex-col items-center justify-center text-center h-full">
              <Droplets size={32} className="mb-4 text-blue-500" />
              <h3 className="text-3xl font-black text-gray-900">100mm+</h3>
              <p className="text-sm font-medium text-gray-500 mt-1">Chuva em poucas horas</p>
            </div>
          </div>
        </section>

        {/* --- NOVA SEÇÃO: MANUAL DE SOBREVIVÊNCIA E APOIO --- */}
        <section className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <ShieldAlert size={40} className="mb-6 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manual de Sobrevivência</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Informações vitais para agir rápido. Saiba o que fazer antes, durante e depois de uma enchente, e como ajudar quem perdeu tudo.
            </p>
          </div>

          {/* Menu de Tabs (Abas) */}
          <div className="flex flex-wrap gap-2 justify-center bg-gray-50 p-2 rounded-2xl border border-gray-100 mb-8">
            <button 
              onClick={() => setActiveTab('emergencia')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition ${activeTab === 'emergencia' ? 'bg-red-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <Siren size={18} /> Durante a Enchente
            </button>
            <button 
              onClick={() => setActiveTab('recuperacao')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition ${activeTab === 'recuperacao' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <Stethoscope size={18} /> Pós-Enchente
            </button>
            <button 
              onClick={() => setActiveTab('prevencao')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition ${activeTab === 'prevencao' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <PackagePlus size={18} /> Prevenção (Kit)
            </button>
            <button 
              onClick={() => setActiveTab('doacoes')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition ${activeTab === 'doacoes' ? 'bg-green-600 text-white shadow-md' : 'text-gray-500 hover:bg-gray-200'}`}
            >
              <Heart size={18} /> Como Doar
            </button>
          </div>

          {/* Conteúdo Dinâmico das Tabs */}
          <div className="min-h-[350px]">
            {activeTab === 'emergencia' && (
              <div className="animate-in fade-in duration-500 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                  <h2 className="text-2xl font-black text-red-700 mb-6 flex items-center gap-2"><AlertTriangle /> O que NÃO Fazer</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-red-900 font-medium">
                      <span className="text-red-500 font-bold">✕</span> Nunca atravesse ruas alagadas. Apenas 30cm de água corrente arrastam um veículo.
                    </li>
                    <li className="flex gap-3 text-red-900 font-medium">
                      <span className="text-red-500 font-bold">✕</span> Não deixe crianças brincarem na água da enchente (risco de leptospirose).
                    </li>
                    <li className="flex gap-3 text-red-900 font-medium">
                      <span className="text-red-500 font-bold">✕</span> Não use equipamentos elétricos se você estiver molhado ou descalço.
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2"><ZapOff className="text-blue-500"/> Ações Imediatas</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-gray-700 font-medium">
                      <span className="text-green-500 font-bold">✓</span> Desligue o quadro geral de energia (disjuntores) e o gás.
                    </li>
                    <li className="flex gap-3 text-gray-700 font-medium">
                      <span className="text-green-500 font-bold">✓</span> Pegue seus documentos e remédios essenciais.
                    </li>
                    <li className="flex gap-3 text-gray-700 font-medium">
                      <span className="text-green-500 font-bold">✓</span> Ligue 199 (Defesa Civil) ou 193 (Bombeiros).
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'recuperacao' && (
              <div className="animate-in fade-in duration-500 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                  <h2 className="text-2xl font-black text-orange-700 mb-6 flex items-center gap-2"><Home /> Retorno para Casa</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-orange-900 font-medium">
                      <span className="text-orange-500 font-bold">!</span> <strong>Estrutura:</strong> Verifique rachaduras grandes (risco de desabamento).
                    </li>
                    <li className="flex gap-3 text-orange-900 font-medium">
                      <span className="text-orange-500 font-bold">!</span> <strong>Animais:</strong> Cuidado com cobras e aranhas escondidas em locais secos.
                    </li>
                    <li className="flex gap-3 text-orange-900 font-medium">
                      <span className="text-orange-500 font-bold">!</span> <strong>Eletricidade:</strong> Não ligue a luz sem ter certeza de que as tomadas secaram.
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2"><Droplets className="text-blue-500"/> Limpeza e Saúde</h2>
                  <ul className="space-y-4">
                    <li className="flex gap-3 text-gray-700 font-medium">
                      <span className="text-blue-500 font-bold">✓</span> Use SEMPRE botas de borracha e luvas (a lama é altamente tóxica).
                    </li>
                    <li className="flex gap-3 text-gray-700 font-medium">
                      <span className="text-blue-500 font-bold">✓</span> Descarte alimentos que tiveram contato com a água.
                    </li>
                    <li className="flex gap-3 text-gray-700 font-medium">
                      <span className="text-blue-500 font-bold">✓</span> Lave paredes e chão com água sanitária.
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'prevencao' && (
              <div className="animate-in fade-in duration-500 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 bg-blue-600 text-white p-8 rounded-3xl flex flex-col justify-center text-center">
                  <Info size={48} className="mx-auto mb-4 text-blue-200" />
                  <h3 className="text-2xl font-bold mb-2">Alerta SMS (Grátis)</h3>
                  <p className="mb-6 font-medium text-blue-100">A Defesa Civil avisa sobre chuvas fortes.</p>
                  <div className="bg-white text-blue-900 p-4 rounded-xl font-bold text-lg">
                    Envie seu CEP para:<br/><span className="text-2xl font-black block mt-1">40199</span>
                  </div>
                </div>
                <div className="w-full md:w-2/3 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2"><PackagePlus className="text-blue-500"/> Kit de Emergência</h2>
                  <p className="text-gray-600 font-medium mb-6">Mantenha esses itens em uma mochila de fácil acesso:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-700 font-bold flex items-center gap-2">📄 Documentos em plástico</div>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-700 font-bold flex items-center gap-2">💊 Remédios diários</div>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-700 font-bold flex items-center gap-2">🔦 Lanterna e pilhas</div>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-700 font-bold flex items-center gap-2">💧 Água potável</div>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-700 font-bold flex items-center gap-2">🔋 Powerbank</div>
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-700 font-bold flex items-center gap-2">📻 Rádio a pilha</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'doacoes' && (
              <div className="animate-in fade-in duration-500 bg-white p-10 rounded-3xl border border-gray-100 shadow-lg text-center max-w-3xl mx-auto">
                <Heart size={48} className="mx-auto mb-4 text-green-500" />
                <h2 className="text-3xl font-black text-gray-900 mb-4">Como ajudar de longe?</h2>
                <p className="text-lg text-gray-600 mb-8">
                  As doações financeiras para instituições oficiais são a forma mais rápida de fazer suprimentos chegarem a quem precisa.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 border-2 border-gray-100 rounded-2xl">
                    <h4 className="font-bold text-xl text-gray-900 mb-2">CUFA Brasil</h4>
                    <p className="text-sm text-gray-500 mb-4">Central Única das Favelas</p>
                    <div className="bg-gray-100 p-3 rounded-lg font-mono text-sm font-bold select-all">
                      PIX: doacoes@cufa.org.br
                    </div>
                  </div>
                  <div className="p-6 border-2 border-gray-100 rounded-2xl">
                    <h4 className="font-bold text-xl text-gray-900 mb-2">Defesa Civil Nacional</h4>
                    <p className="text-sm text-gray-500 mb-4">Fundo de Amparo a Desastres</p>
                    <a 
                      href="https://pndc.com.br/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Acessar o site oficial da Defesa Civil Nacional em nova aba"
                      className="inline-block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition text-center"
                    >
                      Ver site oficial
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Seção 2 Original: O Mapa do Risco */}
        <section className="mx-auto max-w-7xl px-6 py-24 border-t border-gray-100">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <MapPin size={40} className="mb-6 text-red-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">O Mapa do Risco no Brasil</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              As enchentes e deslizamentos não ocorrem por acaso. O Sudeste e o Norte apresentam altíssima vulnerabilidade devido à combinação de chuvas intensas e ocupação de áreas de risco. Passe o mouse sobre os estados para explorar os detalhes.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 rounded-3xl p-4 border border-gray-100 shadow-inner">
                <MapaBrasil />
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-50 text-red-500 rounded-xl">
                    <AlertTriangle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Capitais Críticas</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Liderando o número de pessoas vivendo em áreas suscetíveis, destacam-se <strong>Salvador (BA)</strong>, seguida de perto por <strong>São Paulo (SP)</strong>, <strong>Rio de Janeiro (RJ)</strong>, <strong>Belo Horizonte (MG)</strong> e <strong>Recife (PE)</strong>.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-orange-50 text-orange-500 rounded-xl">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Zonas de Alerta Regional</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Minas Gerais</strong> concentra o maior número de municípios em alerta (283 cidades), incluindo a Zona da Mata. Em São Paulo, o litoral e o interior sofrem com eventos extremos frequentes.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-50 text-blue-500 rounded-xl">
                    <CloudLightning size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Recordistas de Volume</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Historicamente, <strong>Tabatinga (AM)</strong> registra algumas das maiores precipitações do país, junto a <strong>Belém (PA)</strong>. No Sul e Sudeste, cidades como <strong>Passo Fundo (RS)</strong> enfrentam acumulados altíssimos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção 3 Original: A Ciência */}
        <section className="bg-gray-50 py-24 border-t border-gray-100">
          <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-stretch gap-12">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <ThermometerSun size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">O Fator Climático</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                A ciência é clara: o aquecimento global aumenta a evaporação e a capacidade da atmosfera de reter umidade. Quando essa água cai, cai de uma só vez.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                O que antes era uma chuva distribuída ao longo de um mês, agora precipita em questão de horas. O solo das cidades simplesmente não tem tempo hábil para absorver esse volume colossal.
              </p>
            </div>
            <div className="w-full md:w-1/2 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-center">
              <h4 className="font-bold text-gray-900 mb-6 border-b pb-4 text-xl">O Efeito Cascata</h4>
              <ul className="space-y-5 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xs mt-0.5">1</span>
                  <span><strong className="text-gray-800">Saturação:</strong> O solo atinge seu limite de absorção.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xs mt-0.5">2</span>
                  <span><strong className="text-gray-800">Escoamento:</strong> A água corre pela superfície do asfalto.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xs mt-0.5">3</span>
                  <span><strong className="text-gray-800">Transbordamento:</strong> Rios e bueiros colapsam.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xs mt-0.5">4</span>
                  <span><strong className="text-gray-800">Crise Sanitária:</strong> Mistura de água da chuva com esgoto, espalhando doenças.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Seção 4 Original: Infraestrutura */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
              <Building2 size={40} className="mb-6 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Repensando as Cidades</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                O asfalto é inimigo da drenagem. A engenharia moderna propõe soluções baseadas na própria natureza para mitigar os impactos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col h-full transition hover:bg-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cidades-Esponja</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Substituição de pavimentos impermeáveis por jardins de chuva, praças alagáveis e telhados verdes, devolvendo à terra sua capacidade de absorção.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col h-full transition hover:bg-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Macrodrenagem</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Obras de infraestrutura pesada, como piscinões subterrâneos e o desassoreamento contínuo do leito dos rios urbanos e galerias.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col h-full transition hover:bg-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sistemas de Alerta</h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  Integração de sensores IoT nos rios conectados à defesa civil, enviando alertas de evacuação horas antes do colapso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="mx-auto max-w-5xl px-6 pb-12">
          <div className="bg-blue-600 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center text-white shadow-2xl">
            <HeartHandshake size={48} className="mb-6 text-blue-200" />
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              A teoria prepara.<br/>Sua ação salva vidas.
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              O VoluntaFlow conecta pessoas dispostas a ajudar com as comunidades que mais precisam de reconstrução e apoio emergencial.
            </p>
            <Link 
              href="/voluntarios" 
              className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg transition hover:bg-gray-50 hover:scale-105 shadow-lg"
            >
              Quero ser Voluntário <ArrowRight size={24} />
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}