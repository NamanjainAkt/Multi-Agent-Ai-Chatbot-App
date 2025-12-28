import { View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StatusBar, Keyboard } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Send, Plus, Camera } from 'lucide-react-native';
import { Text } from '@/components/ui/text';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { sendMessageToAI, isAIConfigured } from '@/services/aiService';

interface Message {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
}

export default function Chat() {
    const router = useRouter();
    const { agentName, initialText, agentPrompt, agentId } = useLocalSearchParams();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollViewRef = useRef<ScrollView>(null);

    // Get status bar height
    const statusBarHeight = Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

    // Add initial message if provided
    useEffect(() => {
        if (initialText && typeof initialText === 'string') {
            setInputText(initialText);
        }
    }, [initialText]);

    const handleSend = async () => {
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: inputText,
            isUser: true,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        const messageText = inputText;
        setInputText('');
        setIsLoading(true);
        Keyboard.dismiss();

        try {
            // Check if AI is configured
            if (!isAIConfigured()) {
                throw new Error('AI service not configured. Please add your Google AI API key to the .env file.');
            }

            // Get AI response using the agent's prompt
            const systemPrompt = typeof agentPrompt === 'string' ? agentPrompt : undefined;
            const aiResponseText = await sendMessageToAI(messageText, systemPrompt);

            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: aiResponseText,
                isUser: false,
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error getting AI response:', error);

            // Show error message to user
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: `Sorry, I encountered an error: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`,
                isUser: false,
                timestamp: new Date(),
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleNewChat = () => {
        setMessages([]);
        setInputText('');
    };

    const handleImagePicker = () => {
        console.log('Image picker pressed');
        // TODO: Implement image picker
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            className="flex-1 bg-background"
        >
            <View className="flex-1 bg-background">
                {/* Custom Header */}
                <View
                    className="bg-card border-b border-border"
                    style={{
                        paddingTop: statusBarHeight + 12,
                        paddingBottom: 12,
                    }}
                >
                    <View className="flex-row items-center justify-between px-4">
                        <View className="flex-row items-center gap-3 flex-1">
                            <TouchableOpacity
                                onPress={() => router.back()}
                                className="p-2 bg-purple-500/10 rounded-xl"
                            >
                                <ArrowLeft size={24} color="#ffffff" />
                            </TouchableOpacity>
                            <View className="flex-1">
                                <Text className="text-lg font-bold text-foreground">
                                    {agentName}
                                </Text>
                                <Text className="text-xs text-muted-foreground">
                                    AI Assistant
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={handleNewChat}
                            className="p-2 bg-purple-500/10 rounded-xl"
                        >
                            <Plus size={24} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Messages Area */}
                <ScrollView
                    ref={scrollViewRef}
                    className="flex-1 px-4 py-4"
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
                    keyboardShouldPersistTaps="handled"
                >
                    {messages.length === 0 && (
                        <View className="flex-1 items-center justify-center py-20">
                            <Text className="text-center text-muted-foreground text-base">
                                Start a conversation with {agentName}
                            </Text>
                        </View>
                    )}

                    {messages.map((message, index) => (
                        <Animated.View
                            key={message.id}
                            entering={FadeInDown.delay(index * 50).springify()}
                            className={`mb-4 ${message.isUser ? 'items-end' : 'items-start'}`}
                        >
                            <View
                                className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.isUser
                                    ? 'bg-purple-600'
                                    : 'bg-card border border-border'
                                    }`}
                            >
                                <Text className={`${message.isUser ? 'text-white' : 'text-foreground'} text-base leading-6`}>
                                    {message.text}
                                </Text>
                            </View>
                            <Text className="text-xs text-muted-foreground mt-1 px-2">
                                {message.timestamp.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </Text>
                        </Animated.View>
                    ))}

                    {isLoading && (
                        <View className="items-start mb-4">
                            <View className="bg-card border border-border rounded-2xl px-4 py-3">
                                <Text className="text-muted-foreground">
                                    Typing...
                                </Text>
                            </View>
                        </View>
                    )}
                </ScrollView>

                {/* Input Area */}
                <View
                    className="border-t border-border bg-card px-4 py-3"
                    style={{ paddingBottom: Platform.OS === 'ios' ? 20 : 12 }}
                >
                    <View className="flex-row items-center gap-2">
                        <TouchableOpacity
                            onPress={handleImagePicker}
                            className="p-2 bg-purple-500/10 rounded-xl"
                        >
                            <Camera size={24} color="#ffffff" />
                        </TouchableOpacity>
                        <TextInput
                            value={inputText}
                            onChangeText={setInputText}
                            placeholder={`Message ${agentName}...`}
                            placeholderTextColor="#71717a"
                            multiline
                            maxLength={1000}
                            className="flex-1 bg-background text-foreground rounded-2xl px-4 py-3 max-h-24"
                            style={{ color: '#ffffff' }}
                            returnKeyType="send"
                            blurOnSubmit={false}
                            onSubmitEditing={() => {
                                if (inputText.trim()) {
                                    handleSend();
                                }
                            }}
                        />
                        <TouchableOpacity
                            onPress={handleSend}
                            disabled={!inputText.trim() || isLoading}
                            className={`p-3 rounded-2xl ${inputText.trim() && !isLoading
                                ? 'bg-purple-600'
                                : 'bg-purple-600/30'
                                }`}
                        >
                            <Send size={24} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}