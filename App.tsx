import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { persistor, store } from './src/redux/store';
import ThemeProvider from './src/theme/ThemeContext';
import RootNavigator from './src/navigation/RootNaviagtor';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContent />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}

export default App;