import { View } from 'react-native';
import { AgentCard } from '@/components/AgentCard';

interface Agent {
    id: number;
    name: string;
    desc: string;
    icon?: string;
    gradient?: string;
    featured?: boolean;
}

interface AgentGridProps {
    agents: Agent[];
    onAgentPress: (agentId: number, agentName: string) => void;
    startDelay?: number;
    bottomPadding?: string;
}

export function AgentGrid({
    agents,
    onAgentPress,
    startDelay = 300,
    bottomPadding = 'pb-6'
}: AgentGridProps) {
    return (
        <View className={`${bottomPadding} flex-row flex-wrap justify-between`}>
            {agents.map((agent, index) => (
                <View key={agent.id} className="w-[48%] mb-4">
                    <AgentCard
                        id={agent.id}
                        name={agent.name}
                        desc={agent.desc}
                        icon={agent.icon}
                        gradient={agent.gradient}
                        delay={startDelay + (index * 100)}
                        onPress={() => onAgentPress(agent.id, agent.name)}
                    />
                </View>
            ))}
        </View>
    );
}
