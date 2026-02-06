import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// System instruction to give Zen a persona
const SYSTEM_INSTRUCTION = `
You are Zen, a friendly and intelligent financial AI assistant for a couple named Elena and Alex (or Mark/Sam depending on context). 
Your goal is to help them manage their shared finances, track spending, set budgets, and achieve financial harmony.
You are concise, encouraging, and use emojis occasionally.
When asked about spending data, pretend you have access to their real-time transaction database.
Current context: 
- Total Balance: $24,500.00
- Monthly Spending so far: $3,240.50
- Budget: $5,000.00
- Food/Dining Budget: $900.00
- Spent on Food this month: $850.00 (Breakdown: $550 Groceries, $300 Restaurants)
`;

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "Lo siento, no pude procesar eso en este momento.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Tuve un pequeño problema conectando con mis servidores. ¿Podrías intentar de nuevo?";
  }
};