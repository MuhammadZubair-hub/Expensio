import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../theme/ThemeContext';
import GlassCard from '../../components/GlassCard';

const SettingsScreen = () => {
  const { dark, toggleTheme, colors } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GlassCard style={styles.row}>
        <Text style={{ color: colors.textPrimary }}>Dark Mode</Text>
        <Switch value={dark} onValueChange={toggleTheme} />
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default SettingsScreen
