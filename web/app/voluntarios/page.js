'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Mail, Phone, MapPin, Wrench, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Voluntarios() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    estado: '',
    habilidade: '',
    disponibilidade: 'imediata'
  });

  const [status, setStatus] = useState('idle');
  const [mensagem, setMensagem] = useState('');

  // --- FUNÇÃO: Aplica a máscara (21) 99999-9999 ---
  const formatarTelefone = (valor) => {
    return valor
      .replace(/\D/g, '') // Remove tudo o que não for número
      .replace(/(\d{2})(\d)/, '($1) $2') // Coloca os parênteses em volta do DDD
      .replace(/(\d{5})(\d)/, '$1-$2') // Coloca o hífen logo após o 5º dígito
      .replace(/(-\d{4})\d+?$/, '$1'); // Impede que o usuário digite mais números do que deve
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'telefone') {
      setFormData(prev => ({ ...prev, [name]: formatarTelefone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');


    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

    try {
      const response = await fetch(`${API_URL}/api/voluntarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.nome,
          email: formData.email,
          telefone: formData.telefone,
          estado: formData.estado,
          habilidade: formData.habilidade
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Erro ao cadastrar.');
      }
      
      setStatus('success');
      setMensagem('Cadastro realizado com sucesso! Em breve entraremos em contato.');
      setFormData({ nome: '', email: '', telefone: '', estado: '', habilidade: '', disponibilidade: 'imediata' });
      
    } catch (error) {
      setStatus('error');
      setMensagem(error.message || 'Ops! Tivemos um problema de conexão. Tente novamente.');
      console.error("Erro no envio:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <header className="w-full bg-white px-6 py-4 border-b border-gray-100 sticky top-0 z-50">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-600 transition">
            <ArrowLeft size={18} /> Início
          </Link>
          <span className="font-bold text-xl tracking-tight">Volunta<span className="text-blue-600">Flow</span></span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest w-fit">
            Portal do Voluntariado
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sua vontade de <span className="text-blue-600">ajudar</span> precisa de direção.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Profissionais de resgate precisam de retaguarda. Precisamos de pessoas para triagem de roupas, atendimento médico nos abrigos, apoio psicológico e limpeza pesada pós-enchente.
          </p>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-4">
            <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-green-500"/> Cadastro Seguro
            </h4>
            <p className="text-sm text-gray-500">Seus dados serão enviados de forma criptografada para nossa central e cruzados com as necessidades da Defesa Civil do seu estado.</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative">
          
          {status === 'success' && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 rounded-3xl animate-in fade-in zoom-in duration-300">
              <CheckCircle2 size={64} className="text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Obrigado!</h3>
              <p className="text-gray-600 mb-6">{mensagem}</p>
              <button onClick={() => setStatus('idle')} className="bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition">
                Fazer novo cadastro
              </button>
            </div>
          )}

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Ficha de Inscrição</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <User size={18} />
                </div>
                <input 
                  type="text" name="nome" value={formData.nome} onChange={handleChange} required
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="Ex: Andrews Simões"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><Mail size={18} /></div>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><Phone size={18} /></div>
                  <input 
                    type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Seu Estado</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><MapPin size={18} /></div>
                  <select 
                    name="estado" value={formData.estado} onChange={handleChange} required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition appearance-none"
                  >
                    <option value="" disabled>Selecione...</option>
                    <option value="SP">São Paulo (SP)</option>
                    <option value="RJ">Rio de Janeiro (RJ)</option>
                    <option value="MG">Minas Gerais (MG)</option>
                    <option value="BA">Bahia (BA)</option>
                    <option value="RS">Rio Grande do Sul (RS)</option>
                    <option value="OUTRO">Outro (Todo o Brasil)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Especialidade / Apoio</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400"><Wrench size={18} /></div>
                  <select 
                    name="habilidade" value={formData.habilidade} onChange={handleChange} required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition appearance-none"
                  >
                    <option value="" disabled>Como pode ajudar?</option>
                    <option value="saude">Profissional da Saúde</option>
                    <option value="logistica">Logística (Triagem/Transporte)</option>
                    <option value="limpeza">Limpeza Pós-Enchente (Braçal)</option>
                    <option value="psicologico">Apoio Psicológico</option>
                    <option value="tecnologia">Tecnologia (TI/Dados)</option>
                  </select>
                </div>
              </div>
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-center gap-2 text-sm font-bold">
                <AlertCircle size={18} /> {mensagem}
              </div>
            )}

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white transition-all shadow-md mt-4 ${
                status === 'loading' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-lg'
              }`}
            >
              {status === 'loading' ? (
                <span className="animate-pulse">Enviando dados...</span>
              ) : (
                <>Concluir Cadastro <Send size={18} /></>
              )}
            </button>
          </form>

        </div>
      </main>
    </div>
  );
}