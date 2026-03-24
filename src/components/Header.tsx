import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppSizes } from '../utils/Appsizes';
import { useThemeContext } from '../theme/ThemeContext';
import Icon from './Icons';

interface HeaderProps {
    title: string;
    description?: string;
    showBackButton?: boolean;
    showNotification?: boolean;
    onNotificationPress?: () => void;
    logoutButton?: boolean;
    onBackPress?: () => void;
    onNavigateToDashboard?: () => void;
}

const Header: React.FC<HeaderProps> = ({
    title,
    description,
    showBackButton = false,
    showNotification = false,
    onNotificationPress,
    logoutButton = false,
    onBackPress,
    onNavigateToDashboard,
}) => {
    const { colors } = useThemeContext();
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    // Dynamic styles based on theme
    const dynamicStyles = useMemo(() => ({
        container: {
            backgroundColor: colors.secondary,
            borderBottomColor: colors.border || '#E5E7EB',
        },
        title: {
            color: colors.textPrimary || '#fff',
            fontSize: AppSizes.FONT_14,
            marginBottom: 2,
            fontWeight: '500',
            textAlign: 'center',
        },
        description: {
            color: colors.textSecondary || '#d7d8d9ff',
            fontSize: AppSizes.FONT_12,
            textAlign: 'center',
        },
        profileButton: {
            backgroundColor: colors.card || '#ffffff31',
            borderRadius: 40,
            paddingVertical: AppSizes.PH_5,
            paddingHorizontal: AppSizes.PH_8,
        },
        usernameText: {
            color: colors.textPrimary || '#fff',
            fontSize: AppSizes.FONT_12,
        },
        iconColor: colors.textPrimary,
    }), [colors]);

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else if (onNavigateToDashboard) {
            onNavigateToDashboard();
        } else {
            navigation.goBack();
        }
    };

    const toggleDrawer = () => {
        navigation.toggleDrawer();
    };

    const handleNotificationPress = () => {
        if (onNotificationPress) {
            onNotificationPress();
        } else {
            console.log('Notification pressed');
        }
    };

    const renderLeftIcon = () => {
        if (showBackButton) {
            return (
                <TouchableOpacity
                    style={styles.leftButton}
                    onPress={handleBackPress}
                    activeOpacity={0.8}>
                    <Icon
                        type="MaterialIcons"
                        name="arrow-back"
                        size={AppSizes.ICON_24}
                        color={dynamicStyles.iconColor}
                    />
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    style={styles.leftButton}
                    onPress={toggleDrawer}
                    activeOpacity={0.8}>
                    <Icon
                        type="MaterialIcons"
                        name="menu"
                        size={AppSizes.ICON_24}
                        color={dynamicStyles.iconColor}
                    />
                </TouchableOpacity>
            );
        }
    };

    const renderRightIcon = () => {
        if (showNotification) {
            return (
                <TouchableOpacity
                    style={styles.rightButton}
                    onPress={handleNotificationPress}
                    activeOpacity={0.8}>
                    <Icon
                        type="MaterialIcons"
                        name="notifications-none"
                        size={AppSizes.ICON_24}
                        color={dynamicStyles.iconColor}
                    />
                </TouchableOpacity>
            );
        }
        return <View style={styles.rightButton} />;
    };

    if (logoutButton) {
        return (
            <View style={[styles.container, dynamicStyles.container]}>
                <View style={styles.headerRow}>
                    {renderLeftIcon()}

                    <View style={styles.titleContainer}>
                        <Text style={{
                            color: colors.textPrimary,
                            fontSize: AppSizes.FONT_14,
                            marginBottom: 2,
                            fontWeight: '500',
                            textAlign: 'center',
                        }}>{title}</Text>
                        {description && <Text style={{
                            color: colors.textSecondary,
                            fontSize: AppSizes.FONT_12,
                            textAlign: 'center',
                        }}>{description}</Text>}
                    </View>

                    <TouchableOpacity
                        style={dynamicStyles.profileButton}
                        onPress={() => navigation.navigate('Profile')}>
                        <View style={styles.profileContent}>
                            <Icon
                                type="MaterialIcons"
                                name="account-circle"
                                size={40}
                                color={dynamicStyles.iconColor}
                            />
                            <View>
                                <Text style={dynamicStyles.usernameText}>budget</Text>
                                <Text style={dynamicStyles.usernameText}>username</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={[styles.container, dynamicStyles.container]}>
            <View style={styles.headerRow}>
                {renderLeftIcon()}

                <View style={styles.titleContainer}>
                    <Text style={{
                        color: colors.textPrimary,
                        fontSize: AppSizes.FONT_20,
                        marginBottom: 2,
                        fontWeight: '600',
                        textAlign: 'center',
                    }}>{title}</Text>
                    {description && <Text style={{
                        color: colors.textSecondary,
                        fontSize: AppSizes.FONT_12,
                        textAlign: 'center',
                    }}>{description}</Text>}
                </View>

                {renderRightIcon()}
            </View>
        </View>
    );
};

export const SecondaryHeader: React.FC<HeaderProps> = ({
    title,
    description,
    showBackButton = false,
    showNotification = false,
    onNotificationPress,
    onBackPress,
    onNavigateToDashboard,
}) => {
    const navigation = useNavigation();
    const { colors } = useThemeContext();

    const dynamicStyles = useMemo(() => ({
        secondaryContainer: {
            backgroundColor: colors.secondary,
        },
        title: {
            color: colors.textPrimary || '#fff',
            fontSize: AppSizes.FONT_14,
            marginBottom: 2,
            fontWeight: '500',
            textAlign: 'center',
        },
        description: {
            color: colors.textSecondary || '#d7d8d9ff',
            fontSize: AppSizes.FONT_12,
            textAlign: 'center',
        },
        iconColor: colors.card,
    }), [colors]);

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else if (onNavigateToDashboard) {
            onNavigateToDashboard();
        } else {
            navigation.goBack();
        }
    };

    const handleNotificationPress = () => {
        if (onNotificationPress) {
            onNotificationPress();
        } else {
            console.log('Notification pressed');
        }
    };

    const renderLeftIcon = () => {
        if (showBackButton) {
            return (
                <TouchableOpacity
                    style={styles.leftButton}
                    onPress={handleBackPress}
                    activeOpacity={0.8}>
                    <Icon
                        type="MaterialIcons"
                        name="arrow-back"
                        size={AppSizes.ICON_24}
                        color={dynamicStyles.iconColor}
                    />
                </TouchableOpacity>
            );
        }
        return <View style={styles.leftButton} />;
    };

    const renderRightIcon = () => {
        if (showNotification) {
            return (
                <TouchableOpacity
                    style={styles.rightButton}
                    onPress={handleNotificationPress}
                    activeOpacity={0.8}>
                    <Icon
                        type="MaterialIcons"
                        name="notifications-none"
                        size={AppSizes.ICON_24}
                        color={dynamicStyles.iconColor}
                    />
                </TouchableOpacity>
            );
        }
        return <View style={styles.rightButton} />;
    };

    return (
        <View style={[styles.secondaryContainer, dynamicStyles.secondaryContainer]}>
            {renderLeftIcon()}

            <View style={styles.centeredTitleContainer}>
                <Text style={dynamicStyles.title}>{title}</Text>
                {description && <Text style={dynamicStyles.description}>{description}</Text>}
            </View>

            {renderRightIcon()}
        </View>
    );
};

// Static styles that don't change with theme
const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: AppSizes.AVATAR_32,
        borderBottomRightRadius: AppSizes.AVATAR_32,
        paddingHorizontal: AppSizes.PH_15,
        paddingVertical: AppSizes.PH_20,
    },
    secondaryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: AppSizes.PH_15,
        paddingVertical: AppSizes.PH_15,
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftButton: {
        width: 40,
        padding: AppSizes.PH_5,
    },
    rightButton: {
        width: 40,
        padding: AppSizes.PH_5,
        alignItems: 'flex-end',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredTitleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: AppSizes.GAP_15,
    },
});

export default Header;