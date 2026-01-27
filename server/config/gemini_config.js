import { GoogleGenAI } from "@google/genai";

if(!process.env.GEMINI_API_KEY){
    throw new Error("Missing Gemini API Key");
}

export const ai = new GoogleGenAI(process.env.GEMINI_API_KEY);

console.log("Gemini API key parsed");