import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useThemeContext } from '../../theme/ThemeContext';
import GlassCard from '../../components/GlassCard';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExpense, getExpenses, } from '../../redux/slices/expenseSlice';

const ExpenseHistoryScreen = () => {
  const { colors } = useThemeContext();
  const dispatch = useDispatch();

  // const expenses = useSelector((state: any) => state.expense.expenses);
  // const state = useSelector((state: any) => state);
  const expenses = useSelector(getExpenses);
  console.log('the expnses are;', expenses);
  // console.log('the state are;', state);

  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{ padding: 20 }}
      data={expenses || []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <GlassCard style={{ marginBottom: 15 }}>
          <Text style={{ color: colors.textPrimary }}>{item.title}</Text>
          <Text style={{ color: colors.primary }}>{String(item.amount)}</Text>

          <TouchableOpacity onPress={() => dispatch(deleteExpense(item.id))}>
            <Text style={{ color: "red", marginTop: 5 }}>Delete</Text>
          </TouchableOpacity>
        </GlassCard>
      )}
    />
  );
}

export default ExpenseHistoryScreen
