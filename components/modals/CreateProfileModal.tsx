import React, { useState } from 'react';
import { User } from '../../types';

interface CreateProfileModalProps {
    onClose: () => void;
    onCreate: (name: string, pin: string, avatar: string, salary?: User['salary']) => void;
}

const AVATARS = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAFxu755sMxzr9MEkNuYMy6nAIlWBEFO6IWfaxKnfxyeI2lPnofKWDyLzhnMdtAzXmIojwm4dSSr_cnrKNopFjadGlnk3jp9PBSW1iZvcWJkSf9ybf3YB9nduXmexNuk_o362UjYT0obNcIHYa3_kY499QFi30_kvza13LshQRDinFOt4TrVNE5-7esYaFo-BpnL8kssiI-m3_Izw0nEDepK110zVkLeRtSXmuB7y6NjhFJx0A292XlYmO7R3Nd1MoHEneorP0_5oY",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBM3hW0bqrpkyASVNsuhMYPfHIRyCmFuwybK6XGcaF2z3TpVaNCqdjWWnkgk7ASPawV5s5kGUhtTc4UExyT_U04VqWVs7loGbnnM_nNKWNUovXgpt8NaKTWQwPIobAWHmC9watbwHfa7deN-ciLwv2vC83WnwBvXCZXAPVMqakvnTKocOqqTvKvW2JRjLF-Dazo7twvZ1CIvrhrl8JC1dUoS6yZR-AA-_klKDBAKEDvJ0EyBQw-8MdxaYtvaIZZ_zLfefkHW3H8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAP0EFaMajfKSZ6w54Hs5XHRpDunAUd35aYZP0XO3JVv90a_ErdETFhQ2u4U7E90HZejTZvZI71AAGYTuWEY6zmTnIbcBuM25jTWVxaHdCbb4Kql7Owh_mDNeZfS2w3eOBB3qMaVchCKZtRXH0-8QNlZj8NaT8pCqKVjYXZJzrtYcoUDawMv6KYookyvyiaHwo2KiTZVYU2XlOuXBoJb6oGDLn4mpesFJIZrlxWrXcu8XfCB55oblxv_wK0GYxC8pe4z_m7K7mcso"
];

export const CreateProfileModal: React.FC<CreateProfileModalProps> = ({ onClose, onCreate }) => {
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);

    // Salary State
    const [amount, setAmount] = useState('');
    const [frequency, setFrequency] = useState<'Semanal' | 'Quincenal' | 'Mensual'>('Mensual');
    const [paymentDay, setPaymentDay] = useState('');

    const getDefaultPaymentDay = (freq: string) => {
        if (freq === 'Semanal') return 'Viernes';
        if (freq === 'Quincenal') return '15 y 30';
        return '30';
    };

    const handleCreate = () => {
        const salaryConfig = amount ? {
            amount: parseFloat(amount),
            frequency,
            paymentDay: paymentDay || getDefaultPaymentDay(frequency)
        } : undefined;

        onCreate(name, pin, selectedAvatar, salaryConfig);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-light/60 dark:bg-background-dark/80 backdrop-blur-sm px-4">
            <div className="relative flex w-full max-w-[500px] flex-col items-center rounded-3xl bg-white dark:bg-surface-dark p-8 shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10 max-h-[90vh] overflow-y-auto">
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 rounded-full p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 transition-colors"
                >
                    <span className="material-symbols-outlined text-xl">close</span>
                </button>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Nuevo Perfil</h2>

                <div className="w-full space-y-6">
                    {/* Avatar Selection */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Elige un Avatar</label>
                        <div className="flex justify-center gap-4">
                            {AVATARS.map((avatar, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedAvatar(avatar)}
                                    className={`relative size-12 rounded-full overflow-hidden ring-2 transition-all ${selectedAvatar === avatar ? 'ring-primary scale-110' : 'ring-transparent opacity-60 hover:opacity-100'}`}
                                >
                                    <img src={avatar} alt={`Avatar ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Nombre</label>
                        <input
                            autoFocus
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ej. Ana"
                            className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 outline-none transition-all"
                        />
                    </div>

                    {/* PIN Input (Optional) */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">PIN de Seguridad (Opcional)</label>
                        <input
                            type="password"
                            maxLength={4}
                            value={pin}
                            onChange={(e) => {
                                if (/^\d*$/.test(e.target.value)) setPin(e.target.value);
                            }}
                            placeholder="••••"
                            className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-center text-xl tracking-widest text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 outline-none transition-all"
                        />
                        <p className="text-xs text-slate-500 mt-1">Deja vacío si no deseas usar PIN.</p>
                    </div>

                    {/* Salary Configuration */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-4">Configuración Salarial</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2">
                                <label className="block text-xs font-medium text-slate-500 mb-1">Monto de Ingreso</label>
                                <div className="relative">
                                    <span className="absolute left-3 top-3 text-slate-400">$</span>
                                    <input
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        placeholder="0.00"
                                        className="block w-full rounded-xl border border-slate-300 bg-white p-3 pl-8 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Frecuencia</label>
                                <select
                                    value={frequency}
                                    onChange={(e) => setFrequency(e.target.value as any)}
                                    className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:border-primary dark:border-slate-600 dark:bg-slate-800 dark:text-white outline-none"
                                >
                                    <option value="Semanal">Semanal</option>
                                    <option value="Quincenal">Quincenal</option>
                                    <option value="Mensual">Mensual</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-slate-500 mb-1">Día de Pago</label>
                                {frequency === 'Semanal' ? (
                                    <select
                                        value={paymentDay}
                                        onChange={(e) => setPaymentDay(e.target.value)}
                                        className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:border-primary dark:border-slate-600 dark:bg-slate-800 dark:text-white outline-none"
                                    >
                                        <option value="">Seleccionar</option>
                                        <option value="Lunes">Lunes</option>
                                        <option value="Viernes">Viernes</option>
                                        <option value="Sábado">Sábado</option>
                                    </select>
                                ) : frequency === 'Quincenal' ? (
                                    <select
                                        value={paymentDay}
                                        onChange={(e) => setPaymentDay(e.target.value)}
                                        className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:border-primary dark:border-slate-600 dark:bg-slate-800 dark:text-white outline-none"
                                    >
                                        <option value="15 y 30">15 y 30</option>
                                        <option value="1 y 15">1 y 15</option>
                                        <option value="Cada 2 Viernes">Cada 2 Viernes</option>
                                    </select>
                                ) : (
                                    <input
                                        type="number"
                                        min={1} max={31}
                                        value={paymentDay}
                                        onChange={(e) => setPaymentDay(e.target.value)}
                                        placeholder="Día (ej. 30)"
                                        className="block w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 focus:border-primary dark:border-slate-600 dark:bg-slate-800 dark:text-white outline-none"
                                    />
                                )}
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={handleCreate}
                        disabled={!name.trim() || (pin.length > 0 && pin.length !== 4)}
                        className="w-full py-3 px-4 bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Crear Perfil
                    </button>
                </div>
            </div>
        </div>
    );
};
