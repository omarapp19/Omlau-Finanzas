import React, { useState } from 'react';

interface LoginProps {
    onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    const [pin, setPin] = useState('');

    const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length <= 4) setPin(value);
        if (value.length === 4) {
            setTimeout(() => onLogin(), 500);
        }
    };

    return (
        <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-light dark:bg-background-dark">
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-0 flex flex-col items-center justify-center flex-1 w-full px-6">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 dark:text-white mb-3">
                        ¿Quién está administrando hoy?
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400 text-lg font-light">
                        Selecciona tu perfil para acceder al panel
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                    <button 
                        onClick={() => setSelectedUser('Elena')}
                        className="group relative flex flex-col items-center gap-6 outline-none focus:outline-none"
                    >
                        <div className="relative">
                             <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                             <div className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-xl transition-transform duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 group-active:scale-95">
                                <img alt="Elena" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM3hW0bqrpkyASVNsuhMYPfHIRyCmFuwybK6XGcaF2z3TpVaNCqdjWWnkgk7ASPawV5s5kGUhtTc4UExyT_U04VqWVs7loGbnnM_nNKWNUovXgpt8NaKTWQwPIobAWHmC9watbwHfa7deN-ciLwv2vC83WnwBvXCZXAPVMqakvnTKocOqqTvKvW2JRjLF-Dazo7twvZ1CIvrhrl8JC1dUoS6yZR-AA-_klKDBAKEDvJ0EyBQw-8MdxaYtvaIZZ_zLfefkHWmUV3H8" />
                             </div>
                        </div>
                        <span className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 transition-colors group-hover:text-primary">Elena</span>
                    </button>
                    
                    <button 
                         onClick={() => setSelectedUser('Marco')}
                         className="group relative flex flex-col items-center gap-6 outline-none focus:outline-none"
                    >
                        <div className="relative">
                             <div className="relative h-40 w-40 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-white dark:border-slate-800 shadow-xl transition-transform duration-300 ease-out group-hover:scale-105 group-hover:border-primary/50 group-active:scale-95">
                                <img alt="Marco" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP0EFaMajfKSZ6w54Hs5XHRpDunAUd35aYZP0XO3JVv90a_ErdETFhQ2u4U7E90HZejTZvZI71AAGYTuWEY6zmTnIbcBuM25jTWVxaHdCbb4Kql7Owh_mDNeZfS2w3eOBB3qMaVchCKZtRXH0-8QNlZj8NaT8pCqKVjYXZJzrtYcoUDawhMv6KYookyvyiaHwo2KiTZVYU2XlOuXBoJb6oGDLn4mpesFJIZrlxWrxcu8XfCB55oblxv_wK0GYxC8pe4z_m7K7mcso" />
                             </div>
                        </div>
                        <span className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 transition-colors group-hover:text-primary">Marco</span>
                    </button>
                    
                    <button className="group flex flex-col items-center gap-6 outline-none focus:outline-none opacity-60 hover:opacity-100 transition-opacity">
                        <div className="flex h-40 w-40 md:h-48 md:w-48 items-center justify-center rounded-full border-4 border-dashed border-slate-300 dark:border-slate-600 bg-transparent transition-all duration-300 group-hover:border-slate-400 group-hover:bg-slate-100/50 dark:group-hover:bg-slate-800/50">
                            <span className="material-symbols-outlined text-5xl text-slate-400 dark:text-slate-500">add</span>
                        </div>
                        <span className="text-xl md:text-2xl font-medium text-slate-500 dark:text-slate-400">Añadir Perfil</span>
                    </button>
                </div>
            </div>

            {selectedUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-light/60 dark:bg-background-dark/80 backdrop-blur-sm px-4">
                    <div className="relative flex w-full max-w-[380px] flex-col items-center rounded-3xl bg-white dark:bg-surface-dark p-8 shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10">
                        <button 
                            onClick={() => setSelectedUser(null)}
                            className="absolute right-6 top-6 rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                        <div className="mb-4 h-16 w-16 overflow-hidden rounded-full ring-2 ring-white dark:ring-slate-700 shadow-md">
                            <img alt={selectedUser} className="h-full w-full object-cover" src={selectedUser === 'Elena' ? "https://lh3.googleusercontent.com/aida-public/AB6AXuASalLTg6f7htCUnc7t_O7OUpYUjjc1X6ksUqKw8EOEjVOMycM4QWrmD0qbDZP-3Bf5etCLB3w7T0zC-BddSbM8e_riFxuI5efc7ZH_jlp7W4p0DObEGWqk4vat1QH6Rnr9-za9gMC43ftjzU5xtY-9fjWaAhftWmbnDMaqHcbSn61jDHiqcoa22cNP4ZmLTgruqrVbKMP291nl2r09kEW0Sb-DmzcDTsNiCrqaBsmrICGQt6MyLVKnkCB2Eh1hJ5cApQLdH40Azxs" : "https://lh3.googleusercontent.com/aida-public/AB6AXuAP0EFaMajfKSZ6w54Hs5XHRpDunAUd35aYZP0XO3JVv90a_ErdETFhQ2u4U7E90HZejTZvZI71AAGYTuWEY6zmTnIbcBuM25jTWVxaHdCbb4Kql7Owh_mDNeZfS2w3eOBB3qMaVchCKZtRXH0-8QNlZj8NaT8pCqKVjYXZJzrtYcoUDawhMv6KYookyvyiaHwo2KiTZVYU2XlOuXBoJb6oGDLn4mpesFJIZrlxWrxcu8XfCB55oblxv_wK0GYxC8pe4z_m7K7mcso"} />
                        </div>
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Bienvenida, {selectedUser}</h2>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">Introduce tu PIN de 4 dígitos</p>
                        <div className="w-full flex justify-center mb-6">
                            <input 
                                autoFocus
                                type="password" 
                                maxLength={4}
                                value={pin}
                                onChange={handlePinChange}
                                placeholder="••••"
                                className="block w-full max-w-[240px] rounded-2xl border border-slate-200 bg-white py-4 px-4 text-center text-3xl font-medium text-slate-800 shadow-sm placeholder:text-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-700 transition-all outline-none tracking-[0.5em]"
                            />
                        </div>
                        <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                            ¿Olvidaste tu PIN?
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};