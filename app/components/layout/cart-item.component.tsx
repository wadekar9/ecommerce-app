import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITheme } from '$types/common.types'
import { EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { COLORS } from '$constants/colors.constants';
import { BaseAutoImage, IconButton, ThemeText } from '$components/ui';
import { Trash } from '$assets/icons';
import { IProduct } from '$types/data.types';

interface CartItemProps {
    theme: ITheme;
    product: IProduct;
    removeItem: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ theme, product, removeItem }) => {

    const styles = styling(theme);
    const discount = Number(product?.price || 0) * Number(product?.discountPercentage || 0) / 100;

    return (
        <View style={styles.container}>
            <BaseAutoImage source={{ uri: product.thumbnail }} wrapperStyle={styles.image} />
            <View style={styles.info}>
                <ThemeText numberOfLines={2} variant='h4' style={styles.title}>{product.title}</ThemeText>
                <ThemeText variant='body3' style={styles.price}>${(Number(product.price) - discount).toFixed(2)}</ThemeText>
                <ThemeText variant='body4' style={styles.quantity}>Quantity: {product.quantity || 0}</ThemeText>
            </View>
            <IconButton style={styles.trash} onPress={() => removeItem(product.id)}>
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