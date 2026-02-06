import React from 'react';

export const Configuration: React.FC = () => {
    return (
        <div className="flex-1 w-full max-w-[1200px] mx-auto p-4 md:p-8 lg:p-12 overflow-y-auto">
            <div className="mb-10 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Configuración Financiera</h1>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">Configura tu economía compartida. Construye tranquilidad organizando tus cuentas, ingresos y categorías juntos.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Steps Sidebar */}
                <div className="hidden lg:block lg:col-span-3">
                    <div className="sticky top-4 space-y-6">
                        <div className="flex flex-col gap-6 border-l-2 border-slate-200 dark:border-slate-800 pl-6 py-2">
                            {['Gestión de Cuentas', 'Configuración Salarial', 'Categorías'].map((step, i) => (
                                <div key={i} className="relative group cursor-pointer">
                                    <span className={`absolute -left-[29px] top-1 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white dark:ring-slate-900 ${i === 0 ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}>
                                        {i === 0 && <span className="material-symbols-outlined text-[10px] text-white font-bold">check</span>}
                                    </span>
                                    <h3 className={`${i === 0 ? 'text-primary' : 'text-slate-600 dark:text-slate-300'} font-semibold text-base`}>{step}</h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                        {i === 0 ? 'Conectar bancos y billeteras' : i === 1 ? 'Ingresos y Horarios' : 'Presupuestos y Etiquetas'}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-span-1 lg:col-span-9 space-y-8">
                    {/* Step 1 */}
                    <section className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <header className="flex justify-between items-start mb-6">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary uppercase tracking-wide">Paso 1</span>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Gestión de Cuentas</h2>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Añade tus 'bolsillos' de dinero compartidos e individuales.</p>
                            </div>
                            <button className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                <span className="material-symbols-outlined text-lg">add_circle</span>
                                Agregar Cuenta
                            </button>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/50 transition-all cursor-pointer">
                                <div className="size-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                                    <span className="material-symbols-outlined">savings</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Ahorros Conjuntos</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Banco Santander • **** 4821</p>
                                </div>
                                <div className="text-slate-400"><span className="material-symbols-outlined">edit</span></div>
                            </div>
                            <div className="flex items-center p-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-primary/50 transition-all cursor-pointer">
                                <div className="size-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-4">
                                    <span className="material-symbols-outlined">currency_bitcoin</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-slate-900 dark:text-white">Reserva Crypto</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Binance • Conectado</p>
                                </div>
                                <div className="text-slate-400"><span className="material-symbols-outlined">edit</span></div>
                            </div>
                        </div>
                    </section>

                    {/* Step 2 */}
                    <section className="bg-white dark:bg-surface-dark rounded-xl p-6 md:p-8 shadow-sm border border-slate-100 dark:border-slate-800">
                        <header className="flex justify-between items-start mb-8">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 uppercase tracking-wide">Paso 2</span>
                                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">Configuración Salarial</h2>
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">Configura los flujos de ingresos de ambos para automatizar el presupuesto.</p>
                            </div>
                        </header>
                        <div className="flex-1 bg-white dark:bg-slate-800 rounded-xl p-8 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-center hover:border-primary hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all cursor-pointer group">
                            <div className="size-16 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined text-3xl text-slate-400 group-hover:text-primary transition-colors">person_add</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300 mb-1 group-hover:text-primary transition-colors">Crear Nuevo Perfil</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">Añade un nuevo integrante para gestionar sus ingresos y gastos.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};