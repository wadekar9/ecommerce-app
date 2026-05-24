import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITheme } from '$types/common.types'
import { EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { COLORS } from '$constants/colors.constants';
import { BaseAutoImage, IconButton, ThemeText } from '$components/ui';
import { Trash } from '$assets/icons';

interface CartItemProps {
    theme: ITheme;
}

const CartItem: React.FC<CartItemProps> = ({ theme }) => {

    const styles = styling(theme);

    return (
        <View style={styles.container}>
            <BaseAutoImage source={{ uri: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" }} wrapperStyle={styles.image} />
            <View style={styles.info}>
                <ThemeText numberOfLines={2} variant='h4' style={styles.title}>Essence Mascara Lash Princess</ThemeText>
                <ThemeText variant='body3' style={styles.price}>$1000.00</ThemeText>
                <ThemeText variant='body4' style={styles.quantity}>Quantity: 1</ThemeText>
            </View>
            <IconButton style={styles.trash} onPress={() => { }}>
                <Trash width={moderateScale(18)} height={moderateScale(18)} color={COLORS[theme]['white']} />
            </IconButton>
        </View>
    )
}

export default React.memo(CartItem);

const styling = (theme: ITheme) => StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(12),
        backgroundColor: COLORS[theme]['brand-primary-soft'],
        padding: moderateScale(12),
        borderRadius: moderateScale(8),
    },
    image: {
        width: moderateScale(100),
        height: moderateScale(100),
        borderRadius: moderateScale(8),
        backgroundColor: COLORS[theme].surface,
        overflow: 'hidden'
    },
    info: {
        flex: 1,
        gap: moderateScale(5)
    },
    title: {
        fontFamily: EFonts.SEMI_BOLD,
        fontSize: EFontSize.LG,
        color: COLORS[theme]['text-primary'],
    },
    price: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.LG,
        color: COLORS[theme]['brand-primary']
    },
    quantity: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.SM,
        color: COLORS[theme]['text-secondary'],
    },
    trash: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        padding: moderateScale(8),
        backgroundColor: COLORS[theme]['icon-destructive'],
        borderRadius: moderateScale(20)
    }
})