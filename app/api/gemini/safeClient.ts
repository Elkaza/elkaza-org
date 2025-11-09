import { GoogleGenerativeAI } from "@google/generative-ai";

export const genAI = (() => {
  const key = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY;
  if (!key) {
    return null as unknown as GoogleGenerativeAI;
  }
  return new GoogleGenerativeAI(key);
})();

