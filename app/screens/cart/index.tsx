import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import { AppStackScreenProps } from '$types/navigation.types'
import { EStackScreens } from '$constants/screen.constants'
import { BaseButton, IconButton, ThemedView, ThemeText } from '$components/ui'
import { styling } from './styles'
import { useAppTheme } from '$hooks/common'
import { ChevronLeft, CircleAlert } from '$assets/icons'
import { moderateScale } from '$constants/styles.constants'
import { FlatList } from 'react-native-gesture-handler'
import { CartItem } from '$components/layout'
import { SummaryModal } from '$components/modal'
import { ISummaryModalRef } from '$types/common.types'

const Cart: React.FC<AppStackScreenProps<EStackScreens.CART>> = ({ route, navigation }) => {

    const { theme, insets, colors } = useAppTheme();
    const styles = styling(theme);

    const modalRef = useRef<ISummaryModalRef>(null);

    return (
        <ThemedView>
            <View style={styles.header}>
                <IconButton style={styles.iconButton} onPress={() => navigation.goBack()}>
                    <ChevronLeft width={moderateScale(28)} height={moderateScale(28)} color={colors['text-primary']} />
                </IconButton>
                <ThemeText variant='h3'>My Cart</ThemeText>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={Array.from({ length: 10 }).fill(1)}
                    keyExtractor={(_, idx) => idx.toString()}
                    initialNumToRender={5}
                    scrollEventThrottle={16}
                    contentContainerStyle={styles.contentContainer}
                    renderItem={() => <CartItem theme={theme} />}
                />
            </View>
            <View style={[styles.footer, { paddingBottom: insets.bottom + moderateScale(16) }]}>
                <IconButton style={styles.footerAction} onPress={() => modalRef.current?.open()}>
                    <CircleAlert width={moderateScale(20)} height={moderateScale(20)} color={colors['brand-primary']} />
                </IconButton>
                <View style={{ flex: 1 }}>
                    <ThemeText variant='body3' style={{ color: colors['text-secondary'] }}>Total:</ThemeText>
                    <ThemeText variant='h2' style={{ color: colors['brand-primary'] }}>$1000.00</ThemeText>
                </View>
                <BaseButton label='Checkout' containerStyle={{ flex: 0.5 }} />
            </View>

            <SummaryModal ref={modalRef} theme={theme} insets={insets} />
        </ThemedView>
    )
}

export default Cart