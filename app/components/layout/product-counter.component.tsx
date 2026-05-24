import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import { ITheme } from '$types/common.types';
import { moderateScale } from '$constants/styles.constants';
import { IconButton, ThemeText } from '$components/ui';
import { COLORS } from '$constants/colors.constants';
import { Minus, Plus } from '$assets/icons';

interface IProductCounterProps {
    theme: ITheme;
}

const ProductCounter: React.FC<IProductCounterProps> = ({ theme }) => {

    const styles = styling(theme);

    return (
        <View style={styles.container}>
            <IconButton style={styles.counterButton}>
                <Minus width={moderateScale(20)} height={moderateScale(20)} color={COLORS[theme].white} />
            </IconButton>

            <ThemeText>{'1'}</ThemeText>

            <IconButton style={styles.counterButton}>
                <Plus width={moderateScale(20)} height={moderateScale(20)} color={COLORS[theme].white} />
            </IconButton>
        </View>
    )
}

export default React.memo(ProductCounter);

const styling = (theme: ITheme) => StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: moderateScale(50),
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: COLORS[theme]['brand-primary'],
        borderRadius: moderateScale(5)
    },
    counterButton: {
        width: moderateScale(40),
        height: moderateScale(40),
        borderRadius: moderateScale(40),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS[theme]['brand-primary']
    }
})