import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../theme/ThemeContext';
import GlassCard from '../../components/GlassCard';

const ExpenseHistoryScreen = () => {

  const DATA = [
    { id: "1", title: "Food", amount: "₹200" },
    { id: "2", title: "Taxi", amount: "₹500" },
  ];

  const { colors } = useThemeContext();

  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 20 }}
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GlassCard style={{ marginBottom: 15 }}>
          <Text style={{ color: colors.textPrimary }}>{item.title}</Text>
          <Text style={{ color: colors.primary }}>{item.amount}</Text>
        </GlassCard>
      )}
    />
  );
}

export default ExpenseHistoryScreen

const styles = StyleSheet.create({})