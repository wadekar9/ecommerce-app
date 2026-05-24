import { COLORS } from "$constants/colors.constants";
import { moderateScale } from "$constants/styles.constants";
import { ITheme } from "$types/common.types";
import { StyleSheet } from "react-native";

export const styling = (theme: ITheme) => StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: moderateScale(5),
        height: moderateScale(55),
        paddingLeft: moderateScale(5),
        backgroundColor: COLORS[theme].border,
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(16),
        height: '100%',
    },
    container: {
        flex: 1
    },
    contentContainer: {
        flexGrow: 1,
        padding: moderateScale(20),
        gap: moderateScale(12),
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS[theme].surface,
        padding: moderateScale(16),
        gap: moderateScale(5),
        height: moderateScale(120),
        borderTopWidth: moderateScale(2),
        borderTopColor: COLORS[theme].border,
    },
    footerAction: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(6)
    },
    placeholder: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: moderateScale(12)
    }
});
