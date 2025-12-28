import { Text } from '@/components/ui/text';
import { View, TouchableOpacity, ScrollView, StatusBar, Platform } from 'react-native';
import { Settings, Gem } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Agents } from '@/constants/AgentList';
import { Stack } from 'expo-router';
import React from 'react';
import { SectionTitle } from '@/components/SectionTitle';
import { AgentGrid } from '@/components/AgentGrid';
import { CreateAgentButton } from '@/components/CreateAgentButton';
import { useRouter } from 'expo-router';

// Get status bar height for proper header positioning
const getStatusBarHeight = () => {
    return Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
};

export default function Home() {
    const router = useRouter();
    const statusBarHeight = getStatusBarHeight();

    // Filter featured and non-featured agents
    const featuredAgents = Agents.filter(agent => agent.featured === true);
    const otherAgents = Agents.filter(agent => agent.featured === false);

    const handleAgentPress = (agentId: number, agentName: string) => {
        // Find the agent object by ID
        const agent = Agents.find(a => a.id === agentId);

        if (!agent) return;

        router.push({
            pathname: '/chat' as any,
            params: {
                agentName: agent.name,
                initialText: agent.initialText,
                agentPrompt: agent.prompt,
                agentId: agent.id.toString()
            }
        });
    };

    const handleCreateCustomAgent = () => {
        router.push({
            pathname: '/create-agent' as any
        });
    };

    return (
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerBlurEffect: 'dark',
                    headerStyle: {
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    },
                    headerLeft: () => (
                        <View style={{ paddingTop: statusBarHeight }}>
                            <TouchableOpacity className="flex-row items-center gap-2 p-2 bg-purple-700/10 rounded-xl border border-purple-500/30 ml-2">
                                <Gem size={20} color="#ffffff" />
                                <Text className="text-sm font-bold text-yellow-500">
                                    Pro
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View style={{ paddingTop: statusBarHeight }}>
                            <TouchableOpacity className="p-2 bg-purple-500/10 rounded-xl mr-2">
                                <Settings size={24} color="#ffffff" />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTitle: '',
                }}
            />

            {/* Content */}
            <ScrollView
                style={{ paddingTop: statusBarHeight + 60 }}
                className="flex-1 bg-background px-6"
                showsVerticalScrollIndicator={false}
            >
                {/* Welcome Section */}
                <Animated.View
                    entering={FadeInDown.delay(100).springify()}
                    className="mt-6 mb-4"
                >
                    <Text className="text-3xl font-black text-foreground mb-2">
                        Welcome Back! 👋
                    </Text>
                    <Text className="text-base text-muted-foreground">
                        Choose an AI agent to get started
                    </Text>
                </Animated.View>

                {/* Featured Agents Section */}
                <SectionTitle title="Featured Agents" delay={200} />
                <AgentGrid
                    agents={featuredAgents}
                    onAgentPress={handleAgentPress}
                    startDelay={300}
                />

                {/* Create Custom Agent Button */}
                <CreateAgentButton onPress={handleCreateCustomAgent} />

                {/* Other Agents Section */}
                <SectionTitle title="Other Agents" delay={400} />
                <AgentGrid
                    agents={otherAgents}
                    onAgentPress={handleAgentPress}
                    startDelay={500}
                    bottomPadding="pb-24"
                />
            </ScrollView>
        </>
    );
}
