import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppTheme } from '$hooks/common'
import { ITheme } from '$types/common.types';
import { DEVICE_WIDTH, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { COLORS } from '$constants/colors.constants';
import { Moon, ShoppingBag, Sun } from '$assets/icons';
import { IconButton, ThemeText } from '$components/ui';
import { appStackNavigationRef } from '$utils/navigation';
import { EStackScreens } from '$constants/screen.constants';

const HomeHeader = ({ cartLength = 0 }: { cartLength: number }) => {

    const { theme, changeTheme } = useAppTheme();
    const styles = styling(theme);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Products</Text>

            <View style={styles.actions}>
                <IconButton style={styles.action} onPress={changeTheme}>
                    {theme === 'light' ?
                        <Moon width={moderateScale(24)} height={moderateScale(24)} color={COLORS[theme]['icon-default']} />
                        :
                        <Sun width={moderateScale(24)} height={moderateScale(24)} color={COLORS[theme]['icon-default']} />
                    }
                </IconButton>
                <IconButton style={styles.action} onPress={() => appStackNavigationRef.current?.navigate(EStackScreens.CART)}>
                    <ShoppingBag width={moderateScale(24)} height={moderateScale(24)} color={COLORS[theme]['icon-default']} />

                    {cartLength > 0 && (
                        <View style={styles.badge}>
                            <ThemeText style={styles.badgeText}>{cartLength}</ThemeText>
                        </View>
                    )}
                </IconButton>
            </View>
        </View>
    )
}

export default React.memo(HomeHeader);

const styling = (theme: ITheme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: DEVICE_WIDTH,
        height: moderateScale(60),
        paddingLeft: moderateScale(16),
        paddingRight: moderateScale(8),
        backgroundColor: COLORS[theme].border
    },
    headerText: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize['2XL'],
        color: COLORS[theme]['text-primary']
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    action: {
        width: moderateScale(55),
        height: moderateScale(60),
        alignItems: 'center',
        justifyContent: 'center'
    },
    badge: {
        position: 'absolute',
        top: moderateScale(10),
        right: moderateScale(10),
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
