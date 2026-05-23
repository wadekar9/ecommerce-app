import { EStackScreens } from '$constants/screen.constants';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamsList = {
    [EStackScreens.PRODUCTS]: undefined;
    [EStackScreens.PRODUCT_DETAILS]: undefined;
    [EStackScreens.CART]: undefined;
}

export type AppStackScreenProps<T extends keyof AppStackParamsList> = NativeStackScreenProps<AppStackParamsList, T>;
export type AppStackNavigationProps = NativeStackNavigationProp<AppStackParamsList>;
