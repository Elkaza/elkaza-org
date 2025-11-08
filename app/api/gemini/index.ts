import { genAI } from "./client";
import { basePrompts } from "./prompts";

export async function runGemini(prompt: string, type: keyof typeof basePrompts = "elkazaConsulting") {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const fullPrompt = `${basePrompts[type]}\n\nUser prompt: ${prompt}`;
    const result = await model.generateContent(fullPrompt);

    return result.response.text();
  } catch (error: any) {
    console.error("Gemini Gem error:", error);
    return "⚠️ Gemini failed to process your request.";
  }
}
