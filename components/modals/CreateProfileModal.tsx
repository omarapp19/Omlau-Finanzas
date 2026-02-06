import React, { useState } from 'react';

interface CreateProfileModalProps {
    onClose: () => void;
    onCreate: (name: string, pin: string, avatar: string) => void;
}

const AVATARS = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBM3hW0bqrpkyASVNsuhMYPfHIRyCmFuwybK6XGcaF2z3TpVaNCqdjWWnkgk7ASPawV5s5kGUhtTc4UExyT_U04VqWVs7loGbnnM_nNKWNUovXgpt8NaKTWQwPIobAWHmC9watbwHfa7deN-ciLwv2vC83WnwBvXCZXAPVMqakvnTKocOqqTvKvW2JRjLF-Dazo7twvZ1CIvrhrl8JC1dUoS6yZR-AA-_klKDBAKEDvJ0EyBQw-8MdxaYtvaIZZ_zLfefkHWmUV3H8",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAP0EFaMajfKSZ6w54Hs5XHRpDunAUd35aYZP0XO3JVv90a_ErdETFhQ2u4U7E90HZejTZvZI71AAGYTuWEY6zmTnIbcBuM25jTWVxaHdCbb4Kql7Owh_mDNeZfS2w3eOBB3qMaVchCKZtRXH0-8QNlZj8NaT8pCqKVjYXZJzrtYcoUDawhMv6KYookyvyiaHwo2KiTZVYU2XlOuXBoJb6oGDLn4mpesFJIZrlxWrxcu8XfCB55oblxv_wK0GYxC8pe4z_m7K7mcso",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDR2nXwmIdUyc1Lkpq1JrlhnptVBxgj5q2p7bN4mY3rJ-YGckW_o_EIwOtFE_dizbnIJEwDz1v4-Pc5zYW_w-H8jSWk3kxoQBkmTLJrVHkrdVs7IxcDaChxOmq4dyCbf3e7mpJ3eVjCpqGM9qffjZkx0X3vgEcYE9rIjHUCF-Ki659VnYp353hNy56y7PWYIztQTGSYsRNFRnHL4TDgVt2b_iTHVhaiq6Uu1jTV5hBR1lAEqAT88d9yYYAllzUB7BdXqYJ3AKn3u8M",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByFOQeHq5O1F96lcfBPHO0EsoJIYARmuKXMJoa_QpAspa5-wZ3o9Rym4lLuHNl0VlXd5dXMKxzNsMGBlh4VOXRfNGVBKeBcW0uZMbnW8I7aJxsbuH_RRLNh6i-hTjT7AsiWusn_lHggt5jK9l7inOG-TOEvYv1hL9QyEGD7hrdiAvMp1rHiufg4WJZ5TZIu31ltSJ-WR35WiSjhI43GkMZsVUu_HWZ42F0s365ahdO00YEqdlz_kwSJXKx5NylvssAlgqUV077NpE"
];

export const CreateProfileModal: React.FC<CreateProfileModalProps> = ({ onClose, onCreate }) => {
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);

    const handleCreate = () => {
        if (name.trim() && pin.length === 4) {
            onCreate(name, pin, selectedAvatar);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-light/60 dark:bg-background-dark/80 backdrop-blur-sm px-4">
            <div className="relative flex w-full max-w-[420px] flex-col items-center rounded-3xl bg-white dark:bg-surface-dark p-8 shadow-2xl ring-1 ring-slate-900/5 dark:ring-white/10">
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

                    {/* PIN Input */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Crear PIN (4 dígitos)</label>
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
                    </div>

                    <button
                        onClick={handleCreate}
                        disabled={!name.trim() || pin.length !== 4}
                        className="w-full py-3 px-4 bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Crear Perfil
                    </button>
                </div>
            </div>
        </div>
    );
};
