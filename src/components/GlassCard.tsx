import React, { ReactNode, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ThemeContext, useThemeContext } from "../theme/ThemeContext";

export default function GlassCard({ children, style } ) {
    const { colors } = useThemeContext();

    return (
        <View
            style={[
                styles.card,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 18,
        padding: 16,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10,
        // elevation: 4,
    },
});