import { Text } from '@/components/ui/text';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
    return (
        <SafeAreaView className="flex-1 bg-background">
            <View className="flex-1 justify-center items-center p-6">
                <Text className="text-2xl font-bold text-foreground">Profile Screen</Text>
                <Text className="text-muted-foreground mt-2">Manage your account</Text>
            </View>
        </SafeAreaView>
    );
}
