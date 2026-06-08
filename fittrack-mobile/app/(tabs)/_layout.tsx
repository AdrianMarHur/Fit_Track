import { Tabs, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme, View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '@/constants/theme';

export default function TabsLayout() {
  const isDark = useColorScheme() === 'dark';
  const router = useRouter();

  const themeColors = {
    background: isDark ? colors.surface.dark : colors.surface.light,
    border: isDark ? colors.border.dark : colors.border.light,
    active: isDark ? colors.text.primary.dark : colors.text.primary.light,
    inactive: isDark ? colors.text.secondary.dark : colors.text.secondary.light,
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: themeColors.active,
          tabBarInactiveTintColor: themeColors.inactive,
          tabBarStyle: {
            backgroundColor: themeColors.background,
            borderTopColor: themeColors.border,
          },
          headerStyle: {
            backgroundColor: themeColors.background,
          },
          headerShadowVisible: false,
          headerTintColor: themeColors.active,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="rutinas/index"
          options={{
            title: 'Rutinas',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="barbell-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="sesiones/index"
          options={{
            title: 'Historial',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="objetivos/index"
          options={{
            title: 'Objetivos',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="trophy-outline" size={size} color={color} />
            ),
          }}
        />

        {/* Ocultar rutas dinámicas de la barra */}
        <Tabs.Screen name="rutinas/[id]" options={{ href: null }} />
        <Tabs.Screen name="sesiones/[id]" options={{ href: null }} />
        <Tabs.Screen name="objetivos/[id]" options={{ href: null }} />
      </Tabs>

      {/* FAB para crear nuevo contenido */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={[styles.fab, { backgroundColor: colors.rutinas.primary }]}
          onPress={() => router.push('/nueva-entrada')}
        >
          <Ionicons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    bottom: 80,
    right: 20,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
});