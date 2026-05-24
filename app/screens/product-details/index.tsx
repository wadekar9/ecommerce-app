import { View } from 'react-native'
import React, { useMemo } from 'react'
import { AppStackScreenProps } from '$types/navigation.types'
import { EStackScreens } from '$constants/screen.constants'
import { BaseAutoImage, BaseButton, IconButton, ThemedView, ThemeText } from '$components/ui'
import { useAppTheme } from '$hooks/common'
import { moderateScale } from '$constants/styles.constants'
import { styling } from './styles'
import { ScrollView } from 'react-native-gesture-handler'
import { ChevronLeft, ShoppingBag, Star } from '$assets/icons'
import { ProductCounter } from '$components/layout'
import { useProduct } from '$hooks/modules'

const ProductDetails: React.FC<AppStackScreenProps<EStackScreens.PRODUCT_DETAILS>> = ({ route, navigation }) => {

    const { product, cart, hasCartItem, addToCart, increaseProductQuantity, decreaseProductQuantity } = useProduct(route.params.id);
    const { colors, theme } = useAppTheme();
    const styles = styling(theme);

    const discountedPrice = useMemo(() => {
        if (!product) return 0;
        return Number(product?.price || 0) * Number(product?.discountPercentage || 0) / 100;
    }, [product]);

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
                    source={{ uri: product.thumbnail }}
                    resizeMode="cover"
                />

                <View style={styles.detailsContainer}>
                    <ThemeText numberOfLines={2} style={styles.title}>{product.title}</ThemeText>
                    <ThemeText numberOfLines={12} style={styles.description}>{product?.description || ''}</ThemeText>

                    <View style={styles.flexRow}>
                        <ThemeText style={styles.price}>${product.price?.toFixed(2)}</ThemeText>
                        <ThemeText style={styles.discountedPrice}>${(Number(product.price || 0) - discountedPrice).toFixed(2)}</ThemeText>
                        <ThemeText style={styles.discount}>({product.discountPercentage}% OFF)</ThemeText>
                    </View>

                    <View style={styles.content}>
                        <View style={styles.flexRow}>
                            <ThemeText style={styles.keyLabel}>Brand: </ThemeText>
                            <ThemeText style={styles.keyValue}>{product.brand || '-'}</ThemeText>
                        </View>
                        <View style={styles.flexRow}>
                            <ThemeText style={styles.keyLabel}>Category: </ThemeText>
                            <ThemeText style={styles.keyValue}>{product.category || '-'}</ThemeText>
                        </View>
                        <View style={styles.flexRow}>
                            <ThemeText style={styles.keyLabel}>Stock: </ThemeText>
                            <ThemeText style={styles.keyValue}>{product.stock || '-'}</ThemeText>
                        </View>
                    </View>

                    <View style={styles.flexRow}>
                        <Star width={moderateScale(18)} height={moderateScale(18)} fill={colors['state-warning']} color={colors['state-warning']} />
                        <ThemeText style={styles.rating}>({product?.rating?.toFixed(2)})</ThemeText>
                        <ThemeText style={styles.rating}>|</ThemeText>
                        <ThemeText style={styles.rating}>({product?.reviews?.length || 0} Reviews)</ThemeText>
                    </View>

                    {product?.tags && product.tags.length > 0 && (
                        <View style={[styles.flexRow, styles.tags]}>
                            {product.tags.map((tag, index) => (
                                <ThemeText key={index} style={styles.tag}>{tag}</ThemeText>
                            ))}
                        </View>
                    )}

                    <View style={styles.actions}>
                        <BaseButton disabled label='Buy Now' containerStyle={styles.action} />
                        {hasCartItem ? (
                            <ProductCounter
                                theme={theme}
                                stock={product.stock || 0}
                                quantity={cart.find((item) => item.id === product.id)?.quantity || 0}
                                handleAction={(type) => {
                                    if (type === 'increase') {
                                        increaseProductQuantity(product.id!);
                                    } else {
                                        decreaseProductQuantity(product.id!);
                                    }
                                }}
                            />
                        ) : (
                            <BaseButton
                                label='Add to Cart'
                                containerStyle={styles.action}
                                onPress={() => addToCart(product.id!)}
                            />
                        )}
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

                        {cart.length > 0 && (
                            <View style={styles.badge}>
                                <ThemeText style={styles.badgeText}>{cart.length}</ThemeText>
                            </View>
                        )}
                    </IconButton>
                </View>
            </ScrollView>
        </ThemedView>
    )
}

export default ProductDetails
