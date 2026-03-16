import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import {  useThemeContext } from '../../theme/ThemeContext';

const AddExpenseScreen = () => {
  const { colors } = useThemeContext()

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        placeholder="Expense title"
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, { borderColor: colors.border, color: colors.textPrimary }]}
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        placeholder="Amount"
        placeholderTextColor={colors.textSecondary}
        style={[styles.input, { borderColor: colors.border, color: colors.textPrimary }]}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Button title="Save Expense" color={colors.primary} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  input: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 12,
    marginBottom: 20,
  },
});

export default AddExpenseScreen

