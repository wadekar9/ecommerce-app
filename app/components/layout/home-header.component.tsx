import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppTheme } from '$hooks/common'
import { ITheme } from '$types/common.types';
import { DEVICE_WIDTH, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { COLORS } from '$constants/colors.constants';
import { Moon, ShoppingBag, Sun } from '$assets/icons';
import { IconButton } from '$components/ui';
import { appStackNavigationRef } from '$utils/navigation';
import { EStackScreens } from '$constants/screen.constants';

const HomeHeader = () => {

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
    }
});
