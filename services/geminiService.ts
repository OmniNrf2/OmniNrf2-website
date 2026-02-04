import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

let chatSession: Chat | null = null;

// Initialize the chat session
export const initChatSession = () => {
  if (!process.env.API_KEY) {
    console.warn("API Key is missing. AI features will not work.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initChatSession();
  }

  if (!chatSession) {
    return "抱歉，AI 服务暂时不可用。请检查 API Key 配置或稍后再试。";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "抱歉，我没有理解您的问题。";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "抱歉，网络连接似乎出现了问题，请稍后再试。";
  }
};