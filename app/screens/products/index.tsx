import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { AppStackScreenProps } from '$types/navigation.types'
import { EStackScreens } from '$constants/screen.constants'
import { BaseSearchBar, ThemedView } from '$components/ui'
import { HomeHeader, ProductItem } from '$components/layout'
import { styling } from './styles'
import { useAppTheme } from '$hooks/common'
import { FlatList } from 'react-native-gesture-handler'
import { useProducts } from '$hooks/modules'

const Products: React.FC<AppStackScreenProps<EStackScreens.PRODUCTS>> = ({ route, navigation }) => {

    const { theme } = useAppTheme();
    const styles = styling(theme);
    const [search, setSearch] = useState<string>("");
    const { products, page, loading } = useProducts(search)

    return (
        <ThemedView>
            <HomeHeader />
            <View style={styles.container}>
                <FlatList
                    data={Array.from({ length: 7 }).map((_, index) => ({}))}
                    keyExtractor={(_, idx) => idx.toString()}
                    initialNumToRender={10}
                    maxToRenderPerBatch={8}
                    scrollEventThrottle={16}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={({ index }) => <ProductItem theme={theme} key={`${index}`} />}
                    ListHeaderComponent={
                        <View style={styles.header}>
                            <BaseSearchBar value={search} onChange={setSearch} />
                        </View>
                    }
                />
            </View>
        </ThemedView>
    )
}

export default Products