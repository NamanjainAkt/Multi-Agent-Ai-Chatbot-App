import '@/global.css';

import { NAV_THEME } from '@/lib/theme';
import { ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ClerkProvider } from '@clerk/clerk-expo'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { Stack } from 'expo-router'



export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_bypass'}
    >
      <ThemeProvider value={NAV_THEME}>
        <SafeAreaView className="flex-1 bg-background" edges={['bottom']}>
          <StatusBar style='light' />
          <Stack screenOptions={{ headerShown: false }} />
          <PortalHost />
        </SafeAreaView>
      </ThemeProvider>
    </ClerkProvider>
  );
}
