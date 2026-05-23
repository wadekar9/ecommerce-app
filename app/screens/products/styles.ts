import { COLORS } from "$constants/colors.constants";
import { moderateScale } from "$constants/styles.constants";
import { ITheme } from "$types/common.types";
import { StyleSheet } from "react-native";

export const styling = (theme: ITheme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS[theme].background
    },
    columnWrapper: {
        justifyContent: 'space-between',
        gap: moderateScale(15)
    },
    contentContainer: {
        padding: moderateScale(20),
        gap: moderateScale(15),
    },
    header: {
        width: '100%',
        marginBottom: moderateScale(10)
    }
});
