import { Link, Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background p-4">
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>This screen doesn't exist.</Text>

        <Link href="/">
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
