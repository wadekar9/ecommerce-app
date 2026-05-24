import { View } from 'react-native'
import React from 'react'
import { AppStackScreenProps } from '$types/navigation.types'
import { EStackScreens } from '$constants/screen.constants'
import { BaseAutoImage, BaseButton, IconButton, ThemedView, ThemeText } from '$components/ui'
import { useAppTheme } from '$hooks/common'
import { moderateScale } from '$constants/styles.constants'
import { styling } from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import { ChevronLeft, ShoppingBag, Star } from '$assets/icons'
import { ProductCounter } from '$components/layout'

const ProductDetails: React.FC<AppStackScreenProps<EStackScreens.PRODUCT_DETAILS>> = ({ route, navigation }) => {

    const { colors, theme } = useAppTheme();
    const styles = styling(theme);

    return (
        <ThemedView>
            <ScrollView
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                bounces={false}
                overScrollMode='never'
            >
                <BaseAutoImage
                    wrapperStyle={styles.image}
                    source={{ uri: 'https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/1.webp' }}
                    resizeMode="cover"
                />

                <View style={styles.detailsContainer}>
                    <ThemeText numberOfLines={2} style={styles.title}>Huawei Matebook X Pro</ThemeText>
                    <ThemeText numberOfLines={12} style={styles.description}>Huawei Matebook X Pro - The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.</ThemeText>

                    <View style={styles.flexRow}>
                        <ThemeText style={styles.price}>{'1399.99'}</ThemeText>
                        <ThemeText style={styles.discountedPrice}>{'$1299.99'}</ThemeText>
                        <ThemeText style={styles.discount}>{'(9.38% OFF)'}</ThemeText>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.flexRow}>
                            <ThemeText style={styles.keyLabel}>Brand: </ThemeText>
                            <ThemeText style={styles.keyValue}>Huawei</ThemeText>
                        </View>
                        <View style={styles.flexRow}>
                            <ThemeText style={styles.keyLabel}>Category: </ThemeText>
                            <ThemeText style={styles.keyValue}>Laptops</ThemeText>
                        </View>
                        <View style={styles.flexRow}>
                            <ThemeText style={styles.keyLabel}>Stock: </ThemeText>
                            <ThemeText style={styles.keyValue}>75</ThemeText>
                        </View>
                    </View>

                    <View style={styles.flexRow}>
                        <Star width={moderateScale(18)} height={moderateScale(18)} fill={colors['state-warning']} color={colors['state-warning']} />
                        <ThemeText style={styles.rating}>(4.56)</ThemeText>
                        <ThemeText style={styles.rating}>|</ThemeText>
                        <ThemeText style={styles.rating}>(75 Reviews)</ThemeText>
                    </View>

                    <View style={[styles.flexRow, styles.tags]}>
                        <ThemeText style={styles.tag}>Laptop</ThemeText>
                        <ThemeText style={styles.tag}>Electronics</ThemeText>
                        <ThemeText style={styles.tag}>Huawei</ThemeText>
                    </View>

                    <View style={styles.actions}>
                        <BaseButton disabled label='Buy Now' containerStyle={styles.action} />
                        {/* <BaseButton label='Add to Cart' containerStyle={styles.action} /> */}
                        <ProductCounter theme={theme} />
                    </View>
                </View>
                <View style={styles.headerActions}>
                    <IconButton
                        style={styles.headerAction}
                        onPress={() => navigation.goBack()}
                    >
                        <ChevronLeft width={moderateScale(24)} height={moderateScale(24)} color={colors['text-primary']} />
                    </IconButton>
                    <IconButton
                        style={styles.headerAction}
                        onPress={() => navigation.navigate(EStackScreens.CART)}
                    >
                        <ShoppingBag width={moderateScale(24)} height={moderateScale(24)} color={colors['text-primary']} />
                    </IconButton>
                </View>
            </ScrollView>
        </ThemedView>
    )
}

export default ProductDetails
