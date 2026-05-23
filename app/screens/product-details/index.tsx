import { View, Text } from 'react-native'
import React from 'react'
import { AppStackScreenProps } from '$types/navigation.types'
import { EStackScreens } from '$constants/screen.constants'

const ProductDetails: React.FC<AppStackScreenProps<EStackScreens.PRODUCT_DETAILS>> = ({ route, navigation }) => {
    return (
        <View>
            <Text>ProductDetails</Text>
        </View>
    )
}

export default ProductDetails
