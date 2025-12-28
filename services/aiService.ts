import axios from 'axios';

const GOOGLE_AI_API_KEY = process.env.EXPO_PUBLIC_GOOGLE_AI_API_KEY;
const GOOGLE_AI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export interface AIMessage {
    role: 'user' | 'model';
    parts: { text: string }[];
}

export interface AIResponse {
    candidates: {
        content: {
            parts: { text: string }[];
        };
    }[];
}

/**
 * Send a message to Google Gemini AI and get a response
 * @param userMessage - The user's message
 * @param systemPrompt - The agent's system prompt/instructions
 * @returns The AI's response text
 */
export async function sendMessageToAI(
    userMessage: string,
    systemPrompt?: string
): Promise<string> {
    try {
        if (!GOOGLE_AI_API_KEY || GOOGLE_AI_API_KEY === 'your_gemini_api_key_here') {
            throw new Error('Google AI API key not configured. Please add EXPO_PUBLIC_GOOGLE_AI_API_KEY to your .env file');
        }

        // Prepare the messages
        const contents: AIMessage[] = [];

        // Add system prompt if provided
        if (systemPrompt) {
            contents.push({
                role: 'user',
                parts: [{ text: systemPrompt }]
            });
            contents.push({
                role: 'model',
                parts: [{ text: 'Understood. I will follow these instructions.' }]
            });
        }

        // Add user message
        contents.push({
            role: 'user',
            parts: [{ text: userMessage }]
        });

        // Make API request
        const response = await axios.post<AIResponse>(
            `${GOOGLE_AI_API_URL}?key=${GOOGLE_AI_API_KEY}`,
            {
                contents,
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                timeout: 30000, // 30 second timeout
            }
        );

        // Extract response text
        const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!aiResponse) {
            throw new Error('No response from AI');
        }

        return aiResponse;

    } catch (error) {
        console.error('AI Service Error:', error);

        if (axios.isAxiosError(error)) {
            if (error.response) {
                // Server responded with error
                throw new Error(`AI API Error: ${error.response.status} - ${error.response.data?.error?.message || 'Unknown error'}`);
            } else if (error.request) {
                // Request made but no response
                throw new Error('No response from AI service. Please check your internet connection.');
            }
        }

        throw new Error('Failed to get AI response. Please try again.');
    }
}

/**
 * Check if the AI service is properly configured
 * @returns true if API key is set, false otherwise
 */
export function isAIConfigured(): boolean {
    return !!(GOOGLE_AI_API_KEY && GOOGLE_AI_API_KEY !== 'your_gemini_api_key_here');
}
