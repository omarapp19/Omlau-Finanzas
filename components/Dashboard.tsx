import React from 'react';
import { View } from '../types';

interface DashboardProps {
    setView: (view: View) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  return (
    <div className="flex-1 flex flex-col h-full relative overflow-y-auto bg-background-light dark:bg-background-dark">
      <header className="flex items-center justify-between px-6 py-5 md:px-10 border-b border-transparent">
        <div className="flex flex-col">
          <h2 className="text-xl md:text-2xl font-bold leading-tight tracking-[-0.015em] text-[#0e141b] dark:text-white">Buenos días, Elena ☀️</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-normal">Aquí tienes tu armonía financiera para hoy.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center size-10 rounded-full bg-white dark:bg-[#253241] shadow-sm hover:shadow-md transition-shadow text-slate-600 dark:text-slate-200">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
          </button>
          <button 
            onClick={() => setView('chat')}
            className="flex items-center gap-2 px-4 h-10 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-600 dark:text-indigo-300 shadow-sm hover:shadow-md transition-shadow border border-indigo-100 dark:border-indigo-800"
          >
            <span className="material-symbols-outlined text-[20px]">smart_toy</span>
            <span className="text-sm font-bold">Preguntar a Zen</span>
          </button>
        </div>
      </header>

      <div className="flex-1 px-6 md:px-10 pb-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-8 pt-4">
          
          {/* Main Balance Card */}
          <section className="relative overflow-hidden rounded-2xl bg-[#D6E6D8] dark:bg-[#2e4a33] p-8 shadow-lg transition-transform hover:scale-[1.005] duration-300">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-[#2e4a33] dark:text-[#D6E6D8] text-sm uppercase tracking-wider font-semibold opacity-80">Balance Consolidado</h2>
                  <button className="text-[#2e4a33] dark:text-[#D6E6D8] opacity-60 hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-[18px]">visibility</span>
                  </button>
                </div>
                <h1 className="text-[#1b3320] dark:text-white text-5xl md:text-6xl font-light tracking-tight">$12,450.00</h1>
                <p className="text-[#2e4a33] dark:text-[#a5d6a7] text-sm font-medium mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px] text-emerald-600 dark:text-emerald-400">trending_up</span>
                  <span>+3.2% respecto al mes anterior</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-3 w-full md:w-auto">
                {/* Stats Chips */}
                {[
                  { label: 'Bancos', value: '$8k', icon: 'account_balance' },
                  { label: 'Efectivo', value: '$2k', icon: 'payments' },
                  { label: 'Cripto', value: '$2.4k', icon: 'currency_bitcoin' }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/20 shadow-sm flex-1 md:flex-none justify-center">
                    <span className="material-symbols-outlined text-[#1b3320] dark:text-white text-[20px]">{stat.icon}</span>
                    <div className="flex flex-col leading-none">
                      <span className="text-[10px] text-[#2e4a33] dark:text-[#a5d6a7] font-semibold uppercase">{stat.label}</span>
                      <span className="text-sm font-bold text-[#1b3320] dark:text-white">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Income */}
            <section className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-[#0e141b] dark:text-white px-1">Próximos Ingresos</h3>
              <div className="bg-white dark:bg-[#1a2632] p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                <div className="relative">
                  <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-700"></div>
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="size-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center border-4 border-white dark:border-[#1a2632] shadow-sm">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-300">15</span>
                      </div>
                      <div className="flex-1 bg-slate-50 dark:bg-[#253241] p-3 rounded-xl flex justify-between items-center group hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="bg-cover bg-center size-8 rounded-full ring-2 ring-white dark:ring-slate-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBExozsELJgEEC_WgRQC_rfbLw3TUwSBJ1ZUQTAuIvZJN4g-5Cbhhn032_QJNQSuHIA7xmsFSe99Ygtw1ma9uOrVuT-ndoAPQ_hOrzkOuLT84jrn5J6RgXLVwP4Mz9S3k2JJm2L3hIYmcIjCcA06SRVuEctNFdpTwfRmhroJnveoOl0z3YiZ_7fjcZPR5V83CClBs-tkSgc1DUZ3TsIzKhAcp4h65UUMtWUqVgzdLVPsHwhvYVSqR6F1lIJ2X6smeUHMz12gy-t6oc")'}}></div>
                          <div>
                            <p className="text-sm font-semibold text-slate-800 dark:text-white">Salario Elena</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Recurrente</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+$2,800</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="size-12 rounded-full bg-orange-50 dark:bg-orange-900/30 flex items-center justify-center border-4 border-white dark:border-[#1a2632] shadow-sm">
                        <span className="text-xs font-bold text-orange-600 dark:text-orange-300">22</span>
                      </div>
                      <div className="flex-1 bg-slate-50 dark:bg-[#253241] p-3 rounded-xl flex justify-between items-center group hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3">
                          <div className="bg-cover bg-center size-8 rounded-full ring-2 ring-white dark:ring-slate-700" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBm35B-WRRGlgUphLd-pPcpN5R8LwfXMZFIrHgKJdE63xrjCQqLR3PgLvjuEmIIQ4SodBsjaQgnsPsayZvznSpMcySZuJ1fyoxpEfXjUHEGW5GtRi69UmsaTrmaCR3gNDpPTx0vTZlWX09Zsh82v8W7gMIpOG4ML1h9CNgkz9eiTvoU-Xm7e9WimP31c9J6CkODv2FiM3IBiXPXcNI--akHoVkbFWc30foD2J0vAS1US8YdYLd-BCsddACMXVCDwvfvyZbKgUV3cck")'}}></div>
                          <div>
                            <p className="text-sm font-semibold text-slate-800 dark:text-white">Freelance Mark</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">Proyecto Beta</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">+$1,200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Budget vs Spending */}
            <section className="flex flex-col gap-4">
              <div className="flex justify-between items-end px-1">
                <h3 className="text-lg font-semibold text-[#0e141b] dark:text-white">Presupuesto Mensual vs Gasto</h3>
                <button className="text-sm text-primary font-medium hover:underline">Ver detalles</button>
              </div>
              <div className="bg-white dark:bg-[#1a2632] p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-center h-full">
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <p className="text-3xl font-bold text-slate-800 dark:text-white tracking-tight">$3,200</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Gastado de un presupuesto de <span className="font-medium text-slate-700 dark:text-slate-300">$5,000</span></p>
                  </div>
                  <div className="px-3 py-1 bg-terracotta-500/10 text-terracotta-600 dark:text-terracotta-500 rounded-lg text-sm font-bold">
                    64%
                  </div>
                </div>
                <div className="h-6 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden p-1 shadow-inner">
                  <div className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full w-[64%] shadow-sm relative group"></div>
                </div>
                <div className="mt-6 flex justify-between text-xs text-slate-400 dark:text-slate-500 font-medium">
                  <span>1 Nov</span>
                  <span>15 Nov</span>
                  <span>30 Nov</span>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 flex gap-4 overflow-x-auto pb-2">
                    {[
                        {icon: 'restaurant', color: 'red', label: 'Comida'},
                        {icon: 'home', color: 'purple', label: 'Alquiler'},
                        {icon: 'directions_car', color: 'yellow', label: 'Transporte'},
                        {icon: 'add', color: 'slate', label: 'Más'}
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 min-w-[60px]">
                            <div className={`size-8 rounded-full bg-${item.color}-100 dark:bg-${item.color}-900/20 text-${item.color}-500 flex items-center justify-center`}>
                                <span className="material-symbols-outlined text-[16px]">{item.icon}</span>
                            </div>
                            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-400">{item.label}</span>
                        </div>
                    ))}
                </div>
              </div>
            </section>
          </div>

          {/* Recent Activity */}
          <section className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-[#0e141b] dark:text-white px-1">Actividad Reciente</h3>
            <div className="bg-white dark:bg-[#1a2632] rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                {[
                    {name: 'Whole Foods Market', desc: 'Comestibles • Hoy, 4:30 PM', amount: '-$124.50', icon: 'shopping_bag', color: 'terracotta-500', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBi3SzLP_cQSK7aUt_VEGXpSHhsGzh_pa2mTP3FpbTzBIn1mH5QylNQJKa7pHFZknlbwlpYHPiKc77k-h3ZG3bU0cdi1JbRcLWEhrL-KsLtURnWbte-zY3M0EqpBQT1eymoM2T_5lqHM8ZpYuy7IUhTI21xWcjmvwHyPPYscRI_kb63xW0IE9CuWwC9yyc101JfMyBdmz7_W11DhuVbHq4pmHL8Rlr0oyYeheCyxi60mkdq9oOCev7o65N22zeseE6ZxAugeT7e6Is'},
                    {name: 'Suscripción Netflix', desc: 'Entretenimiento • Ayer', amount: '-$15.99', icon: 'movie', color: 'blue-500', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAO-xciWjqMWHqN2nBeWcDK1lWToNceNFbiaozUUiId_flm24m3pJ2KbzcFsH49SJcE_ioTwc4O0W275Dn6oAASZ-WDWcq43sDyDlGD9SvvEQFtpeQvBzrSrImfr54TsSktr2vuPGyaxLHLXUlnYQqT-Hs1RVOyROliv4calkMRaXOlBSfSCS0EOHNu_ws9mLvc3m--h1dIScPi5ae-zVV8MhteXxMQBaGFsQrqNpdSEHX1SrhXW46cHoAvj9mU_wjmIR0uVCk8ivo'}
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border-b border-slate-50 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-[#253241] transition-colors cursor-pointer last:border-0">
                        <div className="flex items-center gap-4">
                        <div className={`bg-${item.color.split('-')[0]}-50 dark:bg-${item.color.split('-')[0]}-900/20 p-2.5 rounded-full text-${item.color}`}>
                            <span className="material-symbols-outlined">{item.icon}</span>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-slate-800 dark:text-white">{item.name}</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                        </div>
                        </div>
                        <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-slate-800 dark:text-white">{item.amount}</span>
                        <div className="flex -space-x-1 mt-1">
                            <div className="size-4 rounded-full bg-slate-200 border border-white" style={{backgroundImage: `url("${item.avatar}")`, backgroundSize: 'cover'}}></div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
          </section>
        </div>
      </div>
      
      <button className="fixed bottom-8 right-8 z-50 flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-full h-14 px-6">
        <span className="material-symbols-outlined text-[24px]">add</span>
        <span className="font-bold text-sm tracking-wide">Transacción Rápida</span>
      </button>
    </div>
  );
};