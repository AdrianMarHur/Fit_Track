import { Stack } from 'expo-router';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/constants/theme';

export default function RootLayout() {
  const isDark = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: isDark
              ? colors.surface.dark
              : colors.surface.light,
          },
          headerTintColor: isDark
            ? colors.text.primary.dark
            : colors.text.primary.light,
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: isDark
              ? colors.background.dark
              : colors.background.light,
          },
        }}
      >
        {/* App principal */}
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />

        {/* Auth (login / register) */}
        <Stack.Screen
          name="auth"
          options={{ headerShown: false }}
        />

        {/* Modal nueva entrada */}
        <Stack.Screen
          name="nueva-entrada"
          options={{ presentation: 'modal' }}
        />
      </Stack>
    </>
  );
}