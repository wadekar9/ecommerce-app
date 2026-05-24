import { COLORS } from "$constants/colors.constants";
import { moderateScale } from "$constants/styles.constants";
import { ITheme } from "$types/common.types";
import { StyleSheet } from "react-native";
import { EdgeInsets } from "react-native-safe-area-context";

export const styling = (theme: ITheme, insets: EdgeInsets) => StyleSheet.create({
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
        paddingBottom: insets.bottom + moderateScale(20),
        gap: moderateScale(15),
    },
    header: {
        width: '100%',
        paddingHorizontal: moderateScale(20),
        paddingVertical: moderateScale(10),
    }
});
