import { View, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { AppStackScreenProps } from '$types/navigation.types'
import { EStackScreens } from '$constants/screen.constants'
import { BaseSearchBar, ThemedView } from '$components/ui'
import { HomeHeader, ProductItem } from '$components/layout'
import { styling } from './styles'
import { useAppTheme } from '$hooks/common'
import { FlatList, RefreshControl } from 'react-native-gesture-handler'
import { useProducts } from '$hooks/modules'

const Products: React.FC<AppStackScreenProps<EStackScreens.PRODUCTS>> = () => {

    const { theme, insets, colors } = useAppTheme();
    const styles = styling(theme, insets);
    const [search, setSearch] = useState<string>("");
    const { products, page, loading, handleLoadMore, handleRefresh, cartLength } = useProducts(search)

    return (
        <ThemedView>
            <HomeHeader cartLength={cartLength} />
            <View style={styles.header}>
                <BaseSearchBar value={search} onChange={setSearch} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={products}
                    keyExtractor={(product) => `${product.id}`}
                    initialNumToRender={10}
                    maxToRenderPerBatch={8}
                    scrollEventThrottle={16}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={({ item }) => <ProductItem theme={theme} product={item} key={`${item.id}`} />}
                    refreshControl={
                        <RefreshControl
                            colors={[colors['brand-primary'], colors['brand-primary-soft']]}
                            refreshing={false}
                            onRefresh={handleRefresh}
                        />
                    }
                    onEndReached={handleLoadMore}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={() => (loading && page > 1 && !search) ? <ActivityIndicator color={colors['brand-primary']} size={'small'} /> : null}
                />
            </View>
        </ThemedView>
    )
}

export default Products