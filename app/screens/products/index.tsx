import { View, Text } from 'react-native'
import React from 'react'
import { AppStackScreenProps } from '$types/navigation.types'
import { EStackScreens } from '$constants/screen.constants'

const Products: React.FC<AppStackScreenProps<EStackScreens.PRODUCTS>> = ({ route, navigation }) => {
    return (
        <View>
            <Text>Products</Text>
        </View>
    )
}

export default Products