import React, { ReactNode, useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    ViewStyle,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { useThemeContext } from '../theme/ThemeContext';
import Icon from './Icons';
import { AppSizes } from '../utils/Appsizes';
import { xdWidth } from '../utils/responsive';
import { CustomRadionButton } from './RadioButtons';

const CustomDrawer = (props: DrawerContentComponentProps) => {

    const { colors, toggleTheme, dark} = useThemeContext()
    const [themeModal, setThemeModal] = useState<boolean>(false);



    return (
        <View style={styles.container}>
            <View style={[styles.profileContainer,{backgroundColor:colors.primarySoft}]}>
                <View style={{ position: 'relative' }}>
                    <Image
                        // source={{ uri: `${imageBaseUrl}${profileData?.Image}` }}
                        style={styles.profileImage}
                    />
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            backgroundColor: '#007BFF',
                            borderRadius: 10,
                            padding: 4,
                        }}>
                        <Icon
                            type="MaterialCommunityIcons"
                            name="pencil"
                            color="#fff"
                            size={12}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.profileName}>{'NA'}</Text>
                <Text style={styles.profileEmail}>{'NA'}</Text>
            </View>
            <View style={[styles.menuContainer, { backgroundColor: colors.background }]}>
                <ScrollView
                    contentContainerStyle={{ rowGap: AppSizes.GAP_20 }}
                    showsVerticalScrollIndicator={false}>
                    <DrawerItem
                        icon="view-dashboard"
                        label="Dashboard"
                        onPress={() =>
                            props.navigation.navigate('Home', { screen: 'Home' })
                        }
                    />
                    <DrawerItem
                        icon="view-dashboard"
                        label="Categories"
                        onPress={() =>
                            props.navigation.navigate('Categories', { screen: 'Categories' })
                        }
                    />
                    <DrawerItem
                        icon="view-dashboard"
                        label="Budget"
                        onPress={() =>
                            props.navigation.navigate('Budget', { screen: 'Budget' })
                        }
                    />



                    <View style={styles.divider} />

                    {/* <DrawerItem type={'MaterialCommunityIcons'}
                        onPress={()=>setThemeModal(prev=>!prev)}
                        icon={theme == 'dark' ? 'white-balance-sunny' : "weather-night"}
                        label={theme == 'dark' ? "Light Mode" : 'Dark Mode'} /> */}
                    <DrawerItem
                        label="Theme"
                        icon={dark ? 'white-balance-sunny' : 'weather-night'}
                        onPress={() => setThemeModal(prev => !prev)}
                        renderRightComponent={
                            <Icon
                                type={'MaterialIcons'}
                                name={themeModal ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                                size={AppSizes.ICON_20}
                                color={colors.secondary}
                            />
                        }
                    />

                    {themeModal && (
                        <>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: AppSizes.PH_4,
                                    marginRight: AppSizes.PH_4,
                                }}
                                onPress={toggleTheme}>
                                <Text
                                    style={{
                                        color: colors.secondary,
                                        fontSize: AppSizes.FONT_14,
                                        // fontFamily: Fonts.Medium,
                                        marginLeft: AppSizes.MH_20,
                                    }}>
                                    Light Theme
                                </Text>
                                <CustomRadionButton
                                    checked={!dark ? true : false}
                                //   onToggle={() => SetTheme('light')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: AppSizes.PH_4,
                                    marginRight: AppSizes.PH_4,
                                }}
                                onPress={toggleTheme}>
                                <Text
                                    style={{
                                        color: colors.secondary,
                                        fontSize: AppSizes.FONT_14,
                                        // fontFamily: Fonts.Medium,
                                        marginLeft: AppSizes.MH_20,
                                    }}>
                                    Dark Theme
                                </Text>
                                <CustomRadionButton
                                    checked={dark ? true : false}
                                //   onToggle={() => SetTheme('dark')}
                                />
                            </TouchableOpacity>
                        </>
                    )}

                    <DrawerItem icon="cog" label="Settings" onPress={() => { }} />


                    <View style={styles.divider} />
                </ScrollView>

                <Logout />
            </View>
        </View>
    );
};

interface DrawerItemProps {
    icon: string;
    label: string;
    type?: string;
    onPress: () => void;
    renderRightComponent?: ReactNode;
}

const DrawerItem = ({
    icon,
    label,
    type = 'MaterialCommunityIcons',
    onPress,
    renderRightComponent,
}: DrawerItemProps) => {
    const { colors } = useThemeContext();
    ;

    return (
        <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <Icon
                    type={type}
                    name={icon}
                    size={AppSizes.ICON_24}
                    color={colors.secondary}
                    style={styles.drawerIcon}
                />
                <Text style={[styles.drawerText, { color: colors.textPrimary }]}>{label}</Text>
            </View>
            {renderRightComponent}
        </TouchableOpacity>
    );
};

interface LogoutBtn {
    justifyContent?: ViewStyle['justifyContent'];
}

export const Logout = ({ justifyContent }: LogoutBtn) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
        // showMessage({
        //   message: 'Logout',
        //   description: 'You have Logout Successfully',
        //   type: 'success',
        //   style: CommonStyles.sucsses,
        // });
        // dispatch(setToken(null));
    };
    return (
        <TouchableOpacity
            style={[styles.logoutContainer, { justifyContent: justifyContent }]}
            onPress={handleLogout}>
            <Icon
                type={'MaterialCommunityIcons'}
                name="logout"
                size={AppSizes.ICON_30}
                color="red"
            />
            <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6E5F0',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    profileContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingVertical: AppSizes.PH_20,
        paddingLeft: AppSizes.PH_20,
    },
    profileImage: {
        width: xdWidth(60),
        height: xdWidth(60),
        borderRadius: xdWidth(60),
        borderWidth: 2,
        //   borderColor: colors.white,
        resizeMode: 'cover',
        overflow: 'hidden',
    },

    profileName: {
        fontWeight: 'bold',
        fontSize: AppSizes.FONT_14,
        marginTop: 10,
    },
    profileEmail: {
        fontSize: AppSizes.FONT_16,
        color: '#555',
    },
    menuContainer: {
        flex: 8,
        justifyContent: 'space-between',
        //backgroundColor: '#FFFFFF',
        //borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        paddingHorizontal: AppSizes.PV_10,
        paddingVertical: AppSizes.PV_10,
    },
    drawerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: AppSizes.MH_5,
    },
    drawerIcon: {
        marginRight: 15,
    },
    drawerText: {
        textAlign: 'center',
        fontSize: AppSizes.FONT_14,
        fontWeight: '500',
        //color: colors.black,
        // fontFamily: Fonts.Medium,
    },
    divider: {
        height: 1,
        // backgroundColor: colors.primaryDark,
        marginVertical: 2,
    },
    logoutContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
    },
    logoutText: {
        color: 'red',
        marginLeft: 10,
        fontSize: AppSizes.FONT_16,
        fontWeight: 'bold',
    },
});

export default CustomDrawer;
