import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackParamsList } from '$types/navigation.types';
import { appStackNavigationRef } from '$utils/navigation';
import { EStackScreens } from '$constants/screen.constants';
import { AppRoutes } from '$screens/index';

const AppStack = createNativeStackNavigator<AppStackParamsList>();

const AppStackNavigator = () => {

    return (
        <NavigationContainer ref={appStackNavigationRef}>
            <AppStack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
                <AppStack.Screen name={EStackScreens.PRODUCTS} component={AppRoutes.Products} />
                <AppStack.Screen name={EStackScreens.PRODUCT_DETAILS} component={AppRoutes.ProductDetails} />
                <AppStack.Screen name={EStackScreens.CART} component={AppRoutes.Cart} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default AppStackNavigator;
