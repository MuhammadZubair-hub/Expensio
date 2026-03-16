import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../screens/dashboard/DashboardScreen";
import AddExpenseScreen from "../screens/addexepense/AddExpenseScreen";
import ExpenseHistoryScreen from "../screens/expensehistory/ExpenseHistoryScreen";
import AnalyticsScreen from "../screens/analytics/AnalyticsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="AddExpense" component={AddExpenseScreen} />
      <Tab.Screen name="History" component={ExpenseHistoryScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
    </Tab.Navigator>
  );
}