import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import GlassCard from '../../components/GlassCard';
import { useDispatch, useSelector } from 'react-redux';
import { useThemeContext } from '../../theme/ThemeContext';
import { setBudget } from '../../redux/slices/expenseSlice';

const BudgetScreen = () => {
  const dispatch = useDispatch();
  const { colors } = useThemeContext();

  const budget = useSelector((state: any) => state.expense.budget);
  const expenses = useSelector((state: any) => state.expense.expenses);

  const [value, setValue] = useState("");

  const totalSpent = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = budget - totalSpent;

  const handleSave = () => {
    dispatch(setBudget(Number(value)));
    setValue("");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <GlassCard>
        <Text style={{ color: colors.textPrimary }}>Set Monthly Budget</Text>

        <TextInput
          placeholder="Enter budget"
          placeholderTextColor={colors.textSecondary}
          style={[styles.input, { borderColor: colors.border, color: colors.textPrimary }]}
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
        />

        <Button title="Save Budget" color={colors.primary} onPress={handleSave} />
      </GlassCard>

      <GlassCard style={{ marginTop: 20 }}>
        <Text style={{ color: colors.textPrimary }}>Budget: {budget}</Text>
        <Text style={{ color: colors.primary }}>Spent: {totalSpent}</Text>
        <Text style={{ color: colors.secondary }}>Remaining: {remaining}</Text>
      </GlassCard>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginVertical: 15,
  },
});
export default BudgetScreen
