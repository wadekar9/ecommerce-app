import { View, Text } from 'react-native'
import React from 'react'
import { AppStackScreenProps } from '$types/navigation.types'
import { EStackScreens } from '$constants/screen.constants'

const Cart: React.FC<AppStackScreenProps<EStackScreens.CART>> = ({ route, navigation }) => {
    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart