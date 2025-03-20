import { useEffect } from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import CallButton from '../components/CallButton';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFrameworkReady } from '../hooks/useFrameworkReady'
import { useFrameworkReady } from '@/hooks/useFrameworkReady';

export default function RootLayout() {
  useFrameworkReady();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      (window as any).frameworkReady?.();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="about" />
        <Stack.Screen name="programs" />
        <Stack.Screen name="placements" />
        <Stack.Screen name="eduprep" />
      </Stack>
      <CallButton />
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
}