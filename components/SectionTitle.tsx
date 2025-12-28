import { Text } from '@/components/ui/text';
import Animated, { FadeInDown } from 'react-native-reanimated';

interface SectionTitleProps {
    title: string;
    delay?: number;
}

export function SectionTitle({ title, delay = 200 }: SectionTitleProps) {
    return (
        <Animated.View
            entering={FadeInDown.delay(delay).springify()}
            className="mb-4"
        >
            <Text className="text-xl font-bold text-slate-50 mb-4">
                {title}
            </Text>
        </Animated.View>
    );
}
