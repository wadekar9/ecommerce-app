import { COLORS } from "$constants/colors.constants";
import { DEVICE_WIDTH, EFonts, EFontSize, moderateScale } from "$constants/styles.constants";
import { ITheme } from "$types/common.types";
import { StyleSheet } from "react-native";

export const styling = (theme: ITheme) => StyleSheet.create({
    image: {
        width: DEVICE_WIDTH,
        height: undefined,
        aspectRatio: 1.25,
        borderBottomRightRadius: moderateScale(20),
        borderBottomLeftRadius: moderateScale(20),
    },
    contentContainer: {
        flexGrow: 1
    },
    detailsContainer: {
        padding: moderateScale(16),
        gap: moderateScale(12),
    },
    title: {
        fontSize: EFontSize["2XL"],
        fontFamily: EFonts.SEMI_BOLD,
        color: COLORS[theme]["text-primary"]
    },
    description: {
        fontSize: EFontSize.BASE,
        fontFamily: EFonts.REGULAR,
        color: COLORS[theme]['text-secondary'],
        letterSpacing: 0.15
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(8),
        flexWrap: 'wrap',
        width: '100%'
    },
    price: {
        fontSize: EFontSize["2XL"],
        fontFamily: EFonts.MEDIUM,
        color: COLORS[theme]["text-secondary"],
        textDecorationLine: 'line-through'
    },
    discount: {
        fontSize: EFontSize["2XL"],
        fontFamily: EFonts.MEDIUM,
        color: COLORS[theme]["icon-destructive"]
    },
    discountedPrice: {
        fontSize: EFontSize["2XL"],
        fontFamily: EFonts.MEDIUM,
        color: COLORS[theme]["text-secondary"]
    },
    content: {
        gap: moderateScale(5)
    },
    keyLabel: {
        fontSize: EFontSize.LG,
        fontFamily: EFonts.MEDIUM,
        color: COLORS[theme]["text-primary"]
    },
    keyValue: {
        fontSize: EFontSize.LG,
        fontFamily: EFonts.REGULAR,
        color: COLORS[theme]["text-secondary"],
        letterSpacing: 0.15
    },
    rating: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.BASE,
        color: COLORS[theme]['text-secondary'],
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: moderateScale(5)
    },
    tag: {
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(4),
        backgroundColor: COLORS[theme]['brand-primary'],
        borderRadius: moderateScale(8),
        color: COLORS[theme].surface,
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XS,
        textTransform: 'capitalize'
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(10),
        width: '100%',
        marginTop: moderateScale(20)
    },
    action: {
        flex: 1
    },
    headerActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: moderateScale(16),
        gap: moderateScale(10),
        width: '100%',
        position: 'absolute',
        top: 0
    },
    headerAction: {
        width: moderateScale(50),
        height: moderateScale(50),
        borderRadius: moderateScale(50),
        backgroundColor: COLORS[theme]["surface-alt"],
        alignItems: 'center',
        justifyContent: 'center'
    },
    badge: {
        position: 'absolute',
        top: moderateScale(5),
        right: moderateScale(5),
        width: moderateScale(20),
        height: moderateScale(20),
        backgroundColor: COLORS[theme]["brand-primary"],
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(50)
    },
    badgeText: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.XS,
        color: COLORS[theme].surface,
    }
});
