import React from 'react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const menuItems: { id: View; label: string; icon: string }[] = [
    { id: 'dashboard', label: 'Tablero', icon: 'dashboard' },
    { id: 'transactions', label: 'Transacciones', icon: 'receipt_long' }, // Mapped to Historial/Transacciones
    { id: 'metrics', label: 'Métricas', icon: 'pie_chart' }, // Mapped to Budgets/Metas
    { id: 'config', label: 'Configuración', icon: 'settings' },
    { id: 'chat', label: 'Asistente IA', icon: 'smart_toy' }, 
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-[#e7edf3] dark:border-gray-800 bg-white dark:bg-[#1a2632] h-screen sticky top-0 transition-all z-20">
      <div className="p-6 flex items-center gap-3 cursor-pointer" onClick={() => setView('dashboard')}>
        <div 
          className="bg-center bg-no-repeat bg-cover rounded-full size-12 shadow-sm" 
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFxu755sMxzr9MEkNuYMy6nAIlWBEFO6IWfaxKnfxyeI2lPnofKWDyLzhnMdtAzXmIojwm4dSSr_cnrKNopFjadGlnk3jp9PBSW1iZvcWJkSf9ybf3YB9nduXmexNuk_o362UjYT0obNcIHYa3_kY499QFi30_kvza13LshQRDinFOt4TrVNE5-7esYaFo-BpnL8kssiI-m3_Izw0nEDepK110zVkLeRtSXmuB7y6NjhFJx0A292XlYmO7R3Nd1MoHEneorP0_5oY")' }}
        ></div>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold leading-normal text-slate-900 dark:text-white">Elena y Mark</h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Finanzas Compartidas</p>
        </div>
      </div>
      
      <nav className="flex flex-col gap-2 px-4 mt-4">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors group w-full text-left ${
                isActive 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-symbols-outlined text-[24px] ${isActive ? 'filled' : ''}`}>{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto p-4 border-t border-[#e7edf3] dark:border-gray-800">
        <div className="flex items-center gap-3 px-4 py-2 text-slate-400 dark:text-slate-500 text-xs">
          <span className="material-symbols-outlined text-[16px]">lock</span>
          <span>Encriptado y Seguro</span>
        </div>
      </div>
    </aside>
  );
};