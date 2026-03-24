import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex:1}}>
        <DrawerNavigator/>
      </SafeAreaView>
    </NavigationContainer>
  );
}