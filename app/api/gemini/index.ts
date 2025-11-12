"use server";

import { genAI } from "./safeClient";
import { basePrompts } from "./prompts";

export async function runGemini(
  prompt: string,
  type: keyof typeof basePrompts = "elkazaConsulting"
) {
  try {
    if (!genAI) {
      return "Gemini is not configured. Set GOOGLE_API_KEY (or GEMINI_API_KEY).";
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const fullPrompt = `${basePrompts[type]}\n\nUser prompt: ${prompt}`;
    const result = await model.generateContent(fullPrompt);
    return result.response.text();
  } catch (error: unknown) {
    console.error("Gemini error:", error);
    return "Gemini failed to process your request.";
  }
}

