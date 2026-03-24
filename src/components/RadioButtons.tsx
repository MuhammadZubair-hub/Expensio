import { TouchableOpacity } from "react-native";
import { useThemeContext } from "../theme/ThemeContext";
import Icon from "./Icons";
import { AppSizes } from "../utils/Appsizes";

export const CustomRadionButton = ({ checked = false, onToggle = () => { } }) => {
    const { colors } = useThemeContext();


    return (
        <TouchableOpacity
            onPress={onToggle}
            style={{
                width: AppSizes.H_20,
                height: AppSizes.H_20,
                borderWidth: 1.5,
                borderColor:  colors.secondary,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: AppSizes.RADIUS_12,

                backgroundColor: colors.background,
            }}>
            {checked && (
                <Icon name="dot-fill" type="Octicons" size={AppSizes.ICON_24} color={checked ? colors.secondary : colors.background} />
            )}
        </TouchableOpacity>
    );
};