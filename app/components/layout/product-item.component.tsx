import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ITheme } from '$types/common.types';
import { DEVICE_WIDTH, EFonts, EFontSize, moderateScale } from '$constants/styles.constants';
import { COLORS } from '$constants/colors.constants';
import { BaseAutoImage, ThemeText } from '$components/ui';
import { StarRatingDisplay } from 'react-native-star-rating-widget';

interface IProductItemProps {
    theme: ITheme;
}

const ProductItem: React.FC<IProductItemProps> = ({ theme }) => {

    const styles = styling(theme);

    return (
        <View style={styles.container}>
            <BaseAutoImage
                source={{ uri: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp' }}
                wrapperStyle={styles.image}
            />
            <View style={styles.content}>
                <ThemeText style={styles.title}>Essence Mascara Lash Princess</ThemeText>
                <View style={styles.flexRow}>
                    <ThemeText style={[styles.textStyle]}>$9.99</ThemeText>
                    <ThemeText style={[styles.textStyle, { color: COLORS[theme]['icon-destructive'] }]}>10.48% off</ThemeText>
                </View>
                <View style={styles.flexRow}>
                    <StarRatingDisplay starSize={moderateScale(16)} rating={4.5} starStyle={styles.rating} />
                    <ThemeText style={[styles.textStyle]}>(4.56)</ThemeText>
                </View>
                <ThemeText style={[styles.textStyle]}>231 Reviews</ThemeText>
                <View style={[styles.flexRow, styles.tags]}>
                    <ThemeText style={styles.tag}>Makeup</ThemeText>
                    <ThemeText style={styles.tag}>Makeup</ThemeText>
                    <ThemeText style={styles.tag}>Makeup</ThemeText>
                </View>
            </View>
        </View>
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
