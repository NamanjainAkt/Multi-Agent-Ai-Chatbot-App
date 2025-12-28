import { Text } from '@/components/ui/text';
import { View, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import * as Icons from 'lucide-react-native';

interface AgentCardProps {
    id: number;
    name: string;
    desc: string;
    icon?: string;
    gradient?: string;
    onPress?: () => void;
    delay?: number;
}

// Color mapping for gradients
const colorMap: { [key: string]: string } = {
    purple: '#9333ea',
    pink: '#ec4899',
    blue: '#3b82f6',
    cyan: '#06b6d4',
    green: '#22c55e',
    emerald: '#10b981',
    orange: '#f97316',
    amber: '#f59e0b',
    indigo: '#6366f1',
    violet: '#8b5cf6',
    rose: '#f43f5e',
    teal: '#14b8a6',
    red: '#ef4444',
    slate: '#64748b',
    zinc: '#71717a',
    sky: '#0ea5e9',
    fuchsia: '#d946ef',
};

// Convert gradient string to color array
const getGradientColors = (gradient: string): string[] => {
    // Extract color names from gradient string
    // e.g., "from-purple-500/20 to-pink-500/20" -> ["purple", "pink"]
    const matches = gradient.match(/from-(\w+)-\d+\/\d+\s+to-(\w+)-\d+\/\d+/);
    if (matches) {
        const [, color1, color2] = matches;
        return [colorMap[color1] || '#9333ea', colorMap[color2] || '#ec4899'];
    }
    return ['#9333ea', '#ec4899']; // Default purple to pink
};

export function AgentCard({ id, name, desc, icon = 'Sparkles', gradient = 'from-purple-500/20 to-pink-500/20', onPress, delay = 0 }: AgentCardProps) {
    // Dynamically get the icon component
    const IconComponent = (Icons as any)[icon] || Icons.Sparkles;

    // Get gradient colors
    const gradientColors = getGradientColors(gradient);

    return (
        <Animated.View
            entering={FadeInDown.delay(delay).springify()}
            className="w-full h-[180px]"
        >
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}
                className="h-full rounded-[32px] overflow-hidden border border-border/30 shadow-lg"
            >
                <LinearGradient
                    colors={[`${gradientColors[0]}40`, `${gradientColors[1]}40`]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    className="h-full p-4"
                >
                    {/* Grainy overlay effect */}
                    <View className="absolute inset-0 bg-black/5 dark:bg-white/5" style={{ opacity: 0.3 }} />

                    {/* Content */}
                    <View className="flex-1 relative z-10">
                        {/* Icon at top */}
                        <View className="mb-3">
                            <View className="bg-white/20 dark:bg-white/30 p-3 rounded-full self-start backdrop-blur-xl">
                                <IconComponent size={24} color="#ffffff" />
                            </View>
                        </View>

                        {/* Name */}
                        <Text className="text-base font-bold text-white dark:text-white mb-2">
                            {name}
                        </Text>

                        {/* Description */}
                        <Text className="text-xs text-white/80 dark:text-white/80 leading-4 flex-1">
                            {desc}
                        </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </Animated.View>
    );
}
