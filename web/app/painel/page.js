'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, Users, Map, Wrench, Search, 
  RefreshCcw, AlertCircle, Phone, Mail, Calendar, LogOut
} from 'lucide-react';

export default function Painel() {
  const router = useRouter();
  const [adminNome, setAdminNome] = useState('');

  const [voluntarios, setVoluntarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');
  const [busca, setBusca] = useState('');

  // --- O CADEADO DE SEGURANÇA ---
  useEffect(() => {
    // Verifica se existe o token salvo pelo login
    const token = localStorage.getItem('volunta_admin');
    if (!token) {
      router.push('/login'); // Expulsa para o login se não tiver permissão
    } else {
      setAdminNome(token); // Salva o nome para mostrar na tela
      buscarVoluntarios(); // Só busca os dados se estiver logado
    }
  }, [router]);

  // Função para fazer Logout (Sair)
  const handleLogout = () => {
    localStorage.removeItem('volunta_admin');
    router.push('/login');
  };

  // A função GET: Busca os dados na API Node.js
  const buscarVoluntarios = async () => {
    setLoading(true);
    setErro('');
    try {
      const response = await fetch('http://localhost:3001/api/voluntarios');
      if (!response.ok) throw new Error('Falha ao conectar com o servidor.');
      
      const dados = await response.json();
      setVoluntarios(dados);
    } catch (err) {
      console.error(err);
      setErro('Não foi possível carregar os dados. O servidor está rodando?');
    } finally {
      setLoading(false);
    }
  };

  // Filtro de busca
  const voluntariosFiltrados = voluntarios.filter(vol => 
    vol.nome.toLowerCase().includes(busca.toLowerCase()) || 
    vol.estado.toLowerCase().includes(busca.toLowerCase())
  );

  // Cálculos para os Cards de Estatísticas
  const totalVoluntarios = voluntarios.length;
  const estadosUnicos = new Set(voluntarios.map(v => v.estado)).size;
  
  // Função para formatar a data
  const formatarData = (dataIso) => {
    if (!dataIso) return '-';
    const data = new Date(dataIso);
    return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(data);
  };

  // Se não tem adminNome ainda, renderiza uma tela vazia (evita piscar o painel antes de redirecionar)
  if (!adminNome) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-gray-800">
      
      {/* Sidebar / Header */}
      <header className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50 shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white transition">
              <ArrowLeft size={20} />
            </Link>
            <span className="font-bold text-xl tracking-tight">Volunta<span className="text-blue-500">Flow</span> Admin</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-400 bg-gray-800 px-3 py-1 rounded-full hidden sm:block">
              Olá, <span className="text-white">{adminNome}</span>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-sm font-bold text-red-400 hover:text-red-300 transition"
              title="Sair do Sistema"
            >
              Sair <LogOut size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        
        {/* Título e Botão de Atualizar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Visão Geral</h1>
            <p className="text-gray-500 mt-1">Gerencie a força-tarefa e aloque recursos.</p>
          </div>
          <button 
            onClick={buscarVoluntarios}
            className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 hover:text-blue-600 transition shadow-sm"
          >
            <RefreshCcw size={16} className={loading ? "animate-spin" : ""} />
            Atualizar Dados
          </button>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-xl"><Users size={28} /></div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Mapeado</p>
              <h3 className="text-3xl font-black text-gray-900">{totalVoluntarios}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-4 bg-orange-50 text-orange-600 rounded-xl"><Map size={28} /></div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Estados Cobertos</p>
              <h3 className="text-3xl font-black text-gray-900">{estadosUnicos}</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="p-4 bg-green-50 text-green-600 rounded-xl"><Wrench size={28} /></div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Força Tarefa</p>
              <h3 className="text-xl font-bold text-gray-900">Ativa e Pronta</h3>
            </div>
          </div>
        </div>

        {/* Área de Pesquisa */}
        <div className="bg-white p-4 rounded-t-2xl border-x border-t border-gray-100 shadow-sm flex items-center gap-3">
          <Search size={20} className="text-gray-400 ml-2" />
          <input 
            type="text" 
            placeholder="Pesquisar por nome ou estado..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 font-medium"
          />
        </div>

        {/* Tabela de Dados */}
        <div className="bg-white border border-gray-100 shadow-sm rounded-b-2xl overflow-x-auto">
          {loading ? (
            <div className="p-12 text-center text-gray-500 font-medium animate-pulse">
              Carregando banco de dados...
            </div>
          ) : erro ? (
            <div className="p-12 text-center text-red-500 font-medium flex flex-col items-center gap-2">
              <AlertCircle size={32} />
              {erro}
            </div>
          ) : voluntariosFiltrados.length === 0 ? (
            <div className="p-12 text-center text-gray-500 font-medium">
              Nenhum voluntário encontrado.
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500 font-bold">
                  <th className="p-4 pl-6">Voluntário</th>
                  <th className="p-4">Contato</th>
                  <th className="p-4">Local</th>
                  <th className="p-4">Especialidade</th>
                  <th className="p-4">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {voluntariosFiltrados.map((vol) => (
                  <tr key={vol.id} className="hover:bg-blue-50/50 transition-colors group">
                    <td className="p-4 pl-6">
                      <p className="font-bold text-gray-900">{vol.nome}</p>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col gap-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1"><Mail size={14} className="text-gray-400"/> {vol.email}</span>
                        <span className="flex items-center gap-1"><Phone size={14} className="text-gray-400"/> {vol.telefone}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 bg-gray-100 text-gray-700 font-bold text-xs rounded-lg border border-gray-200">
                        {vol.estado}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center justify-center px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-full border border-blue-100 capitalize">
                        {vol.habilidade}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-500 font-medium flex items-center gap-2 mt-2">
                      <Calendar size={14} /> {formatarData(vol.data_cadastro)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </main>
    </div>
  );
}