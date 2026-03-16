import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
// import { ThemeContext } from '../../theme/ThemeContext';
import GlassCard from '../../components/GlassCard';
import { useThemeContext } from '../../theme/ThemeContext';

const DashboardScreen = () => {
  //  const { colors } = useContext(ThemeContext);

  const { colors } = useThemeContext();

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        Expensio Dashboard
      </Text>

      <GlassCard style={{ marginTop: 20 }}>
        <Text style={{ color: colors.textPrimary }}>Monthly Expense</Text>
        <Text style={{ fontSize: 28, color: colors.primary }}>₹12,400</Text>
      </GlassCard>

      <GlassCard style={{ marginTop: 20 }}>
        <Text style={{ color: colors.textPrimary }}>Remaining Budget</Text>
        <Text style={{ fontSize: 28, color: colors.secondary }}>₹7,600</Text>
      </GlassCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default DashboardScreen

