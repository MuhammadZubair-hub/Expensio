import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import {  useThemeContext } from '../../theme/ThemeContext';
import { useDispatch } from 'react-redux';
import { addExpense } from '../../redux/slices/expenseSlice';
import { v4 as uuidv4 } from "uuid";

const AddExpenseScreen = () => {
  
  const dispatch = useDispatch();
  const { colors } = useThemeContext();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleAdd = () => {
    if (!title || !amount) return;

    dispatch(
      addExpense({
        // id: uuidv4(),
        id: `${title}_${amount}`,
        title,
        amount: Number(amount),
        date: new Date().toISOString(),
      })
    );

    setTitle("");
    setAmount("");
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        placeholder="Title"
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, { borderColor: colors.border, color: colors.textPrimary }]}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Amount"
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, { borderColor: colors.border, color: colors.textPrimary }]}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Button title="Add Expense" color={colors.primary} onPress={handleAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
    marginBottom: 15,
  },
})
export default AddExpenseScreen

