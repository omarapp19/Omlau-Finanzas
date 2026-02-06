import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { createChatSession, sendMessageToGemini } from '../services/geminiService';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const INITIAL_MESSAGES: Message[] = [
  { id: '1', sender: 'user', text: '¿Cuánto gastamos en comida?', timestamp: '10:42 AM' },
  { 
    id: '2', 
    sender: 'ai', 
    text: 'Tú y Alex han gastado $850 en comida hasta ahora en octubre. Está ligeramente por debajo de su presupuesto compartido de $900. 👏', 
    timestamp: '10:42 AM',
    type: 'chart_response',
    chartData: {
      total: 850,
      breakdown: [
        { name: 'Supermercado', value: 550, color: '#4799eb' },
        { name: 'Restaurantes', value: 300, color: '#cbd5e1' }
      ]
    }
  },
];

export const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use a ref to keep track of the chat session across renders
  const chatSessionRef = useRef(createChatSession());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatSessionRef.current, inputText);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error sending message", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-slate-50 dark:bg-[#161f2b] relative">
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="size-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-0.5">
               <div className="w-full h-full bg-white dark:bg-surface-dark rounded-full flex items-center justify-center overflow-hidden">
                  <img alt="Zen" className="w-full h-full object-cover opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAddbqGzFlXBio_orEjjB8h4bNcz3Oj9IPBVslLk7E5AaPib-8gM-1JyfC7GbTFRW11VhV7R2vVh8x9RIY5yXnJg79q5f3tYW1uM14DZIw0fiMLF8QzExZmCQwxscb0s3L5KDzJKOWUbF5k7FJHOMoE4_7v2dhGArng4e26ievOAgX9S_0OW4tf7hJfi3Ur32t5WChvTRgKHgXUGKwVtMunEzV_b8Z0ylv_9IIUWAAvjOoj9Npa7vyijaDPb9qnsjQLPBuyTbERxwM" />
               </div>
            </div>
            <div className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
               <h3 className="font-bold text-slate-900 dark:text-white text-base">Zen</h3>
               <span className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">Beta</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">Consultor Financiero IA • En línea</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
         {/* Date Separator */}
         <div className="flex justify-center">
            <span className="text-xs font-medium text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">Hoy, 10:42 AM</span>
         </div>

         {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'items-end justify-end' : 'items-start'} gap-3`}>
               {msg.sender === 'ai' && (
                  <div className="size-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[1px] shrink-0 mt-1">
                     <div className="w-full h-full bg-white dark:bg-surface-dark rounded-full overflow-hidden">
                        <img alt="Zen" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8euJaRWKGohv1FRrjr6jyWdooQU-0BJXPGnGHnovmWEHx1sV6BEbB0Ypzjqch5xTi_M_1tvl5o0VvoST6f0XlGSCJq7sJ0XB5WuA8704mlqQWyFdgLL8EQsLvNlMaEXiPvNnjuEQmKd4PV6fLLqAnU7wgMhCG4-W-K_Xdgl0jDqjOtq04hlCXsOkGKwVsVXX98kdAmp0ybGoWdUGVzq8lRoinYmqTzoAX9nyWvbNGgmBMDSuYFfqEFxcU-Kn0J0q5Oo1yF4sCiBs" />
                     </div>
                  </div>
               )}

               <div className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'} gap-1 max-w-[85%]`}>
                  <div className={`${
                      msg.sender === 'user' 
                      ? 'bg-primary text-white rounded-2xl rounded-tr-sm' 
                      : 'bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl rounded-tl-sm'
                      } px-5 py-3.5 shadow-sm text-[15px] leading-relaxed`}
                  >
                     <p dangerouslySetInnerHTML={{__html: msg.text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')}}></p>
                  </div>

                  {/* Chart Response specific UI */}
                  {msg.type === 'chart_response' && msg.chartData && (
                     <div className="bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700 rounded-2xl p-5 shadow-sm w-full sm:w-[320px]">
                        <div className="flex items-center justify-between mb-4">
                           <h4 className="font-semibold text-sm text-slate-900 dark:text-white">Desglose de gastos</h4>
                           <button className="text-xs font-medium text-primary hover:text-primary/80 transition-colors">Ver detalles</button>
                        </div>
                        <div className="flex items-center gap-6">
                           <div className="relative size-24 shrink-0">
                              <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                  <Pie
                                    data={msg.chartData.breakdown}
                                    innerRadius={35}
                                    outerRadius={45}
                                    paddingAngle={5}
                                    dataKey="value"
                                    stroke="none"
                                  >
                                    {msg.chartData.breakdown.map((entry: any, index: number) => (
                                      <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                  </Pie>
                                </PieChart>
                              </ResponsiveContainer>
                              <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                                 <span className="text-[10px] text-slate-400 font-medium">Total</span>
                                 <span className="text-xs font-bold text-slate-900 dark:text-white">${msg.chartData.total}</span>
                              </div>
                           </div>
                           <div className="flex flex-col gap-3 flex-1">
                              {msg.chartData.breakdown.map((item: any, i: number) => (
                                <div key={i} className="flex justify-between items-center text-xs">
                                   <div className="flex items-center gap-2">
                                      <span className="size-2.5 rounded-full" style={{backgroundColor: item.color}}></span>
                                      <span className="text-slate-600 dark:text-slate-300 font-medium">{item.name}</span>
                                   </div>
                                   <span className="font-semibold text-slate-900 dark:text-white">${item.value}</span>
                                </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  )}
               </div>

               {msg.sender === 'user' && (
                  <div className="size-8 rounded-full bg-slate-200 bg-cover bg-center shrink-0" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBwP15SeKSm95jrUHFx8p7MqvlNnCT96nBpcj5amtwKT5upNLb0DXEdseTKHIUj4B1XK0KZPP_1UrNLrk6vdVh1IA0aRNSyqGrOl4m5ZZFfO97fHjt9DK8yju2oatcIJOfWYF5SlY5GPOj2lGBNA7TYUBeAkh6Y-WnpNRFr-EO7cAiKtcAtHbgNJXtxokjZwyKAW1qypDAsSxe7NmFbeUsMnc9KOjE-CnY8H4YGTTEu1gLQPhSNDpv7Dp50WKcYHnSFhm0sYMunlUM")'}}></div>
               )}
            </div>
         ))}
         {isLoading && (
           <div className="flex items-start gap-3">
              <div className="size-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[1px] shrink-0 mt-1">
                  <div className="w-full h-full bg-white dark:bg-surface-dark rounded-full overflow-hidden flex items-center justify-center">
                    <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                  </div>
              </div>
              <div className="bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-700 px-5 py-3.5 rounded-2xl rounded-tl-sm shadow-sm text-sm text-slate-500">
                Escribiendo...
              </div>
           </div>
         )}
         <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white dark:bg-surface-dark border-t border-slate-100 dark:border-slate-800 z-10">
        <div className="relative flex items-end gap-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-2 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all shadow-sm">
           <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-xl hover:bg-white dark:hover:bg-slate-700 h-10 w-10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
           </button>
           <textarea 
             value={inputText}
             onChange={(e) => setInputText(e.target.value)}
             onKeyDown={(e) => {
               if(e.key === 'Enter' && !e.shiftKey) {
                 e.preventDefault();
                 handleSend();
               }
             }}
             className="w-full bg-transparent border-none text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-0 resize-none py-2.5 max-h-32 focus:outline-none" 
             placeholder="Pregúntale a Zen sobre tus finanzas..." 
             rows={1} 
             style={{minHeight: '40px'}}
           ></textarea>
           <button onClick={handleSend} disabled={isLoading} className="p-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors shadow-md h-10 w-10 flex items-center justify-center shrink-0 mb-[1px]">
              <span className="material-symbols-outlined text-[20px] ml-0.5">send</span>
           </button>
        </div>
        <div className="text-center mt-2">
           <p className="text-[10px] text-slate-400 dark:text-slate-500">Zen puede cometer errores. Por favor verifica la información importante.</p>
        </div>
      </div>
    </div>
  );
};