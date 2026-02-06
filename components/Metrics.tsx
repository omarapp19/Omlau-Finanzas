import React from 'react';
import { AreaChart, Area, XAxis, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jun', income: 4000, expenses: 2400 },
  { name: 'Jul', income: 5000, expenses: 2800 },
  { name: 'Ago', income: 4500, expenses: 3500 },
  { name: 'Sep', income: 4200, expenses: 3200 },
  { name: 'Oct', income: 6000, expenses: 3800 },
  { name: 'Nov', income: 5500, expenses: 3600 },
];

const pieData = [
  { name: 'Vivienda', value: 40, color: '#81B29A' },
  { name: 'Comida', value: 25, color: '#E07A5F' },
  { name: 'Transporte', value: 20, color: '#F2CC8F' },
  { name: 'Otros', value: 15, color: '#3D405B' },
];

export const Metrics: React.FC = () => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-8 overflow-y-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Métricas y Proyecciones</h1>
          <p className="text-slate-500 dark:text-slate-400">Analiza su salud financiera colaborativa</p>
        </div>
        {/* Toggle */}
        <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
           {/* Mock Toggle */}
           <div className="px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-primary flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">group</span>
              Pareja
           </div>
           <div className="w-px h-5 bg-slate-200 dark:bg-slate-700"></div>
           <div className="px-4 py-2 rounded-lg text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-2 cursor-pointer transition-colors">
              <span className="material-symbols-outlined text-[18px]">person</span>
              Individual
           </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
         {[
           { title: 'Patrimonio Neto', value: '$142,500', trend: '+5.2%', icon: 'account_balance', color: 'primary' },
           { title: 'Ahorro Mensual', value: '$3,200', trend: '+1.8%', icon: 'savings', color: 'earth-terra' },
           { title: 'Salud del Presupuesto', value: '92%', trend: 'Estable', icon: 'health_and_safety', color: 'earth-sage', trendIcon: 'remove', trendColor: 'slate' }
         ].map((kpi, i) => (
            <div key={i} className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 relative overflow-hidden group">
               <div className={`absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-${kpi.color}`}>
                  <span className="material-symbols-outlined text-6xl">{kpi.icon}</span>
               </div>
               <div className="flex flex-col gap-1 relative z-10">
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium flex items-center gap-1">
                     {kpi.title}
                  </p>
                  <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{kpi.value}</p>
                  <div className={`flex items-center gap-1 text-${kpi.trendColor || 'emerald'}-600 text-sm font-medium mt-2 bg-${kpi.trendColor || 'emerald'}-50 dark:bg-${kpi.trendColor || 'emerald'}-900/20 w-fit px-2 py-0.5 rounded-full`}>
                     <span className="material-symbols-outlined text-[16px]">{kpi.trendIcon || 'trending_up'}</span>
                     <span>{kpi.trend}</span>
                  </div>
               </div>
            </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
         {/* Donut Chart */}
         <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Distribución de Gastos</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Por categoría (Nov)</p>
               </div>
               <button className="text-primary text-sm font-medium hover:underline">Ver Todo</button>
            </div>
            <div className="flex flex-col items-center justify-center grow gap-8">
               <div className="relative size-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                     <span className="text-xs text-slate-500 font-medium">Total</span>
                     <span className="text-xl font-bold text-slate-900 dark:text-white">$8.4k</span>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-x-8 gap-y-3 w-full px-4">
                  {pieData.map((item, i) => (
                     <div key={i} className="flex items-center gap-2">
                        <div className="size-3 rounded-full" style={{backgroundColor: item.color}}></div>
                        <span className="text-sm text-slate-600 dark:text-slate-300">{item.name}</span>
                        <span className="ml-auto text-sm font-semibold text-slate-900 dark:text-white">{item.value}%</span>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         {/* Goals Card */}
         <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col lg:col-span-2">
            <div className="flex justify-between items-start mb-6">
               <div>
                  <div className="flex items-center gap-2">
                     <h3 className="font-bold text-slate-900 dark:text-white">Meta de Ahorro: Casa Nueva</h3>
                     <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">En camino</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Objetivo: $60,000 para Ago 2026</p>
               </div>
               <button className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                  <span className="material-symbols-outlined text-[18px]">edit</span>
                  Ajustar
               </button>
            </div>
            <div className="flex flex-col grow justify-center gap-6">
               <div className="flex items-end justify-between">
                  <div>
                     <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Balance Actual</p>
                     <p className="text-4xl font-black text-primary">$24,500</p>
                  </div>
                  <div className="text-right">
                     <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Restante</p>
                     <p className="text-xl font-bold text-slate-400 dark:text-slate-500">$35,500</p>
                  </div>
               </div>
               <div className="relative w-full h-4 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{width: '41%'}}></div>
                  <div className="absolute top-0 left-0 h-full bg-primary/30 rounded-full" style={{width: '55%'}}></div>
               </div>
               <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>Inicio: Ene 2023</span>
                  <span>Ahora (41%)</span>
                  <span>Proy. +6 meses (55%)</span>
                  <span>Meta: Ago 2026</span>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-100 dark:border-slate-700/50 flex items-start gap-3">
                  <span className="material-symbols-outlined text-earth-sage mt-0.5">trending_up</span>
                  <div>
                     <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">¡Buen trabajo!</p>
                     <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">Al ritmo actual de <span className="font-medium text-slate-700 dark:text-slate-300">$1,200/mes</span>, alcanzarán su meta 2 meses antes.</p>
                  </div>
               </div>
            </div>
         </div>

         {/* Area Chart */}
         <div className="lg:col-span-3 bg-surface-light dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
             <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                 <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">Ingresos vs. Gastos</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Tendencias de flujo de caja en los últimos 6 meses</p>
                 </div>
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-1 bg-primary rounded-full"></div>
                       <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Ingresos</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-1 bg-earth-terra rounded-full"></div>
                       <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Gastos</span>
                    </div>
                 </div>
             </div>
             <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4799eb" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#4799eb" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                        <RechartsTooltip 
                          contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} 
                          cursor={{stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4'}}
                        />
                        <Area type="monotone" dataKey="income" stroke="#4799eb" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" />
                        <Area type="monotone" dataKey="expenses" stroke="#E07A5F" strokeWidth={3} fillOpacity={0} fill="#E07A5F" />
                    </AreaChart>
                </ResponsiveContainer>
             </div>
         </div>
      </div>
    </div>
  );
};