import { Text } from '@/components/ui/text';
import { View, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Sparkles } from 'lucide-react-native';

interface CreateAgentButtonProps {
    onPress?: () => void;
}

export function CreateAgentButton({ onPress }: CreateAgentButtonProps) {
    return (
        <View className="pb-8">
            <TouchableOpacity
                activeOpacity={0.8}
                className="overflow-hidden rounded-2xl"
                onPress={onPress}
                style={{
                    shadowColor: '#06b6d4',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 12,
                    elevation: 8,
                }}
            >
                <LinearGradient
                    colors={['#06b6d4', '#8b5cf6', '#ec4899']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="px-8 py-5 rounded-2xl"
                >
                    {/* Glassmorphism Overlay */}
                    <View
                        className="absolute inset-0 rounded-2xl"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                    />

                    {/* Button Content */}
                    <View className="flex-row items-center justify-center gap-3">
                        <Sparkles size={24} color="#ffffff" />
                        <Text className="text-lg font-black text-white tracking-wide">
                            Create Custom Agent
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}
