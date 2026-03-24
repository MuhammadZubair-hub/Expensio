import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import CategoriesScreen from "../screens/categories/CategoriesScreen";
import BudgetScreen from "../screens/budget/BudgetScreen";
import SettingsScreen from "../screens/settings/SettingsScreen";
import CustomDrawer from "../components/CoustomDrawer";
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false,
        drawerStyle: { width: '75%', backgroundColor: 'transparent' },
        // drawerHideStatusBarOnOpen:true,
      }}
      drawerContent={props => <CustomDrawer {...props} />}
      >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Budget" component={BudgetScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}