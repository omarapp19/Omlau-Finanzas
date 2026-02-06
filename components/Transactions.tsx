import React from 'react';

export const Transactions: React.FC = () => {
    return (
        <div className="flex-1 w-full max-w-[1440px] mx-auto px-6 md:px-10 py-8 overflow-y-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <aside className="w-full lg:w-80 shrink-0 space-y-6 lg:sticky lg:top-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Filtros</h3>
                        <button className="text-xs font-semibold text-primary hover:text-primary/80">Borrar todo</button>
                    </div>
                    {/* Filters Accordions Mocked */}
                    {['Fecha', 'Categoría', 'Cuenta', 'Responsable'].map((filter, i) => (
                        <div key={i} className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
                            <div className="flex cursor-pointer items-center justify-between px-4 py-3 select-none hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <span className="text-sm font-semibold text-slate-900 dark:text-white">{filter}</span>
                                <span className="material-symbols-outlined text-slate-400 text-xl">keyboard_arrow_down</span>
                            </div>
                            {/* Content would go here */}
                        </div>
                    ))}
                </aside>

                <div className="flex-1 w-full min-w-0 flex flex-col gap-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-col">
                            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Historial de Transacciones</h1>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Historial compartido de Octubre 2023</p>
                        </div>
                        <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            <span>Nueva Transacción</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        {[
                            { name: 'Supermercado Whole Foods', date: '24 Oct, 2023', category: 'Supermercado', amount: '-$124.50', icon: 'shopping_cart', color: 'orange', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR2nXwmIdUyc1Lkpq1JrlhnptVBxgj5q2p7bN4mY3rJ-YGckW_o_EIwOtFE_dizbnIJEwDz1v4-Pc5zYW_w-H8jSWk3kxoQBkmTLJrVHkrdVs7IxcDaChxOmq4dyCbf3e7mpJ3eVjCpqGM9qffjZkx0X3vgEcYE9rIjHUCF-Ki659VnYp353hNy56y7PWYIztQTGSYsRNFRnHL4TDgVt2b_iTHVhaiq6Uu1jTV5hBR1lAEqAT88d9yYYAllzUB7BdXqYJ3AKn3u8M' },
                            { name: 'Pago de Alquiler', date: '01 Oct, 2023', category: 'Vivienda', amount: '-Bs 4,500', icon: 'home', color: 'indigo', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsMzq46IGe6MR6tv529IgeOdf03UbpbLJaQuR1UC-SZ744SR8nxvTY6e41Ql6ZKbvDujbrUAk9RyMx9jelsapr81tMsBHGdrr5bs8LuPps_QQoy3VGN2Jp8U_KQk3XCZpqX8uUaD2GNvzFHG7n54GBKhurNxIcoZCRTSeuUzqO8zLdTGZZ1BgskeQ_2luYiOlsKzj1VZkXO9iAEaPeRGYZhOGOEAKSr0wmbrVpQBMFju35h6Wts8eRa9WKmi-9pG_kq5v4hNToUpc' },
                            { name: 'Depósito de Ahorros', date: '28 Sep, 2023', category: 'Inversión', amount: '+200 USDT', icon: 'trending_up', color: 'emerald', isIncome: true, multiAvatar: true },
                            { name: 'Cine y Palomitas', date: '25 Sep, 2023', category: 'Entretenimiento', amount: '-$45.00', icon: 'movie', color: 'purple', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByFOQeHq5O1F96lcfBPHO0EsoJIYARmuKXMJoa_QpAspa5-wZ3o9Rym4lLuHNl0VlXd5dXMKxzNsMGBlh4VOXRfNGVBKeBcW0uZMbnW8I7aJxsbuH_RRLNh6i-hTjT7AsiWusn_lHggt5jK9l7inOG-TOEvYv1hL9QyEGD7hrdiAvMp1rHiufg4WJZ5TZIu31ltSJ-WR35WiSjhI43GkMZsVUu_HWZ42F0s365ahdO00YEqdlz_kwSJXKx5NylvssAlgqUV077NpE' },
                            { name: 'Factura de Luz', date: '22 Sep, 2023', category: 'Servicios', amount: '-$89.20', icon: 'bolt', color: 'cyan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBauqwAYFh_y-dgRfeqmgVrcAAHYE5olAwWITb2VgwFnZ2Xz_ETW341qR-qtALOLkOBEpCi73eDxaP6-CKYGHgKqgjSAcE1EHsJYViO6VNUB-wAFbP0xejjbl-grc7eKMVf2Ivti_NUG0vaPN5jsyJy8x4B96SK8Pw9N_7ZiCm-7fSQozRi7B2vP7EcCgSHMXzgOYQjpGq9GCSshjOFCPJQiXvkpde3idPw3uTjQw8oSa6vNN6u_48MnGzYEBqpAtcUswqHkByyK1c' },
                        ].map((item, i) => (
                            <div key={i} className="group flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all gap-4">
                                <div className="flex items-center gap-4 md:gap-6">
                                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-${item.color}-50 dark:bg-${item.color}-900/20 text-${item.color}-500`}>
                                        <span className="material-symbols-outlined">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">{item.name}</h3>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <span className="text-sm text-slate-500 dark:text-slate-400">{item.date}</span>
                                            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
                                            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">{item.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pl-[4.5rem] sm:pl-0">
                                    <div className="flex items-center gap-3">
                                        {item.multiAvatar ? (
                                            <div className="flex -space-x-2">
                                                <div className="size-8 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-slate-800" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBO-Szh2O7OvJjC-eAKL9RP80kIsP2UeHNduAuPDkp3JOaTPCYOMTvXNR7k5ZL5PdDKlTs1Tal0GQnS9iV9cmnT3NCAkTItWB5IuMSGePV5nL6D_ZdZDrODUEeFlKTC6LvAziYU4iUSZdmqjoxgp0_OlzZNFvMRpmYFWn31O1-1pcG77OyO7IGCHlSDTlkeodzKuhYXu-5Tm5mxp0W0N6rip5Xji8qlPp74FAtMQk58cXin6qQkBHjZjVd4QNfMuDMd8NqJB9ctS9Q")'}}></div>
                                                <div className="size-8 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-slate-800" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUUMsD4cYIbtIeedE2zgIoui47GU8SY9bIuB3SuLMsNBDW9h4uw9sbJFlzI4c99BtBy7u7xxnOeFc9fpol38eyJ6qbsP2pcTCiu2JxSGPA4RKpo_xmb6oK4Mv08L0AFzWhDPMjP9srqfGcT2XY64-mzgkzZhFe8jd0FB6ovpjGPmffu8RDOdEyMDRk6q2M7x7IvxYmEHWsWmueVT7Ag3ct_-3YZb5sVfgWJLlFBXjJK1-l9JEUwe_KNUIbrqPNqiwrEQRtL7Xo_fM")'}}></div>
                                            </div>
                                        ) : (
                                            <div className="size-8 rounded-full bg-cover bg-center ring-2 ring-white dark:ring-slate-800" style={{backgroundImage: `url("${item.avatar}")`}}></div>
                                        )}
                                    </div>
                                    <span className={`text-base font-bold min-w-[90px] text-right ${item.isIncome ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-900 dark:text-white'}`}>{item.amount}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};