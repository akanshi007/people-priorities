import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

export async function analyzeComplaintAI(complaint) {

    const prompt = `
You are an AI assistant for a Government Complaint Portal.

Analyze the complaint below.

Complaint:
"${complaint}"

Return ONLY valid JSON.

{
    "category": "",
    "department": "",
    "urgency": "",
    "priority": 1,
    "summary": ""
}

Rules:
- category must be one of: Roads, Water Supply, Electricity, Garbage, Healthcare, General
- urgency must be Low, Medium or High
- Priority Rules:
    - High urgency = priority 5
    - Medium urgency = priority 3
    - Low urgency = priority 1
- department should be appropriate
- summary should be one short sentence.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text.trim();
}