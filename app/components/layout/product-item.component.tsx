import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { ITheme } from '$types/common.types';
import { DEVICE_WIDTH, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { COLORS } from '$constants/colors.constants';
import { BaseAutoImage, ThemeText } from '$components/ui';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { appStackNavigationRef } from '$utils/navigation';
import { EStackScreens } from '$constants/screen.constants';
import { IProduct } from '$types/data.types';

interface IProductItemProps {
    theme: ITheme;
    product: IProduct;
}

const ProductItem: React.FC<IProductItemProps> = ({ theme, product }) => {

    const styles = styling(theme);

    return (
        <Pressable
            style={styles.container}
            onPress={() => appStackNavigationRef.current?.navigate(EStackScreens.PRODUCT_DETAILS, {
                id: `${product.id}`
            })}
        >
            <BaseAutoImage
                source={{ uri: product.thumbnail }}
                wrapperStyle={styles.image}
            />
            <View style={styles.content}>
                <ThemeText style={styles.title}>{product.title}</ThemeText>
                <View style={styles.flexRow}>
                    <ThemeText style={[styles.textStyle]}>${product.price}</ThemeText>
                    <ThemeText style={[styles.textStyle, { color: COLORS[theme]['icon-destructive'] }]}>{product.discountPercentage}% off</ThemeText>
                </View>
                <View style={styles.flexRow}>
                    <StarRatingDisplay starSize={moderateScale(16)} rating={Number(product.rating || 0)} starStyle={styles.rating} />
                    <ThemeText style={[styles.textStyle]}>{`(${product.rating})`}</ThemeText>
                </View>
                <ThemeText style={[styles.textStyle]}>{product.reviews?.length || 0} Reviews</ThemeText>
                <View style={[styles.flexRow, styles.tags]}>
                    {product.tags?.slice(0, 2).map((tag, index) => (<ThemeText style={styles.tag} key={`${index}`}>{tag}</ThemeText>))}
                </View>
            </View>
        </Pressable>
    )
}

export default React.memo(ProductItem);

const styling = (theme: ITheme) => StyleSheet.create({
    container: {
        flex: 0.5,
        maxWidth: (DEVICE_WIDTH - moderateScale(55)) / 2,
        minHeight: moderateScale(200),
        backgroundColor: COLORS[theme].surface,
        borderRadius: moderateScale(12),
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: COLORS[theme]['brand-primary'],
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: moderateScale(175),
        borderWidth: StyleSheet.hairlineWidth,
        borderTopWidth: 0,
        borderRadius: moderateScale(12),
        borderColor: COLORS[theme]['brand-primary']
    },
    content: {
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(10),
        gap: moderateScale(5),
    },
    title: {
        fontFamily: EFonts.REGULAR,
        fontSize: EFontSize.LG,
        color: COLORS[theme]['text-primary'],
        textAlign: 'left'
    },
    rating: {
        marginLeft: moderateScale(-3)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: moderateScale(5)
    },
    textStyle: {
        fontFamily: EFonts.MEDIUM,
        fontSize: EFontSize.XS,
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
    }
});
