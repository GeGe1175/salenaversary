
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLoveLetter = async (
  partnerName: string, 
  userName: string, 
  specialMemories: string
): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a deeply romantic, poetic, and sincere anniversary letter from ${userName} to ${partnerName}. 
                 Include these special memories or traits: "${specialMemories}". 
                 The tone should be elegant, slightly modern yet timeless. 
                 Keep it around 200-300 words. Format it with line breaks for beauty.`,
      config: {
        temperature: 0.9,
        topP: 0.95,
      },
    });
    return response.text || "My dearest, words fail me at this moment, but my heart knows exactly how much you mean to me...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "My love, I tried to write the perfect letter, but my feelings for you are beyond words. Every moment with you is a gift.";
  }
};
