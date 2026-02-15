import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getMaintenanceAdvice = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional, helpful, and friendly mechanic assistant for "Ravenhaus Mobile", a mobile oil change and auto repair service in St. George, Utah. 
      User Query: "${query}"
      
      Provide a concise, helpful answer (under 100 words). 
      If the user asks about booking or pricing, encourage them to call (801) 603-8503 or use the booking form.
      Emphasize that we come to them (mobile service).`,
    });
    return response.text || "I'm sorry, I couldn't process that request right now. Please call us directly.";
  } catch (error) {
    console.error("AI Error:", error);
    return "Our AI assistant is currently taking a break. Please call us at (801) 603-8503.";
  }
};