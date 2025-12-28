import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function History() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 justify-center items-center p-6">
                <Text className="text-2xl font-bold text-foreground">History Screen</Text>
                <Text className="text-muted-foreground mt-2">View your conversation history</Text>
            </View>
        </SafeAreaView>
    );
}
