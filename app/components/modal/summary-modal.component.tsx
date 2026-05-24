import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { forwardRef, useMemo, useState } from 'react'
import { ISummaryModalRef, ITheme } from '$types/common.types'
import { COLORS } from '$constants/colors.constants';
import { moderateScale } from '$constants/styles.constants';
import { EdgeInsets } from 'react-native-safe-area-context';
import { ThemeText } from '$components/ui';

interface ISummaryModalProps {
    theme: ITheme;
    insets: EdgeInsets;
}

const SummaryModal = forwardRef<ISummaryModalRef, ISummaryModalProps>(({
    theme, insets
}, ref) => {

    const [visible, setVisible] = useState<boolean>(false);
    const styles = useMemo(() => styling(theme), [theme]);

    React.useImperativeHandle(ref,
        () => ({
            open: () => setVisible(true),
            close: () => setVisible(false)
        })
    )

    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent={true}
        >
            <Pressable style={styles.wrapper} onPress={() => setVisible(false)}>
                <Pressable
                    onPress={() => { }}
                    style={[styles.container, { paddingBottom: insets.bottom }]}
                >
                    <View style={styles.content}>
                        <ThemeText variant='h2'>Order Summary</ThemeText>
                        <View style={styles.flexRow}>
                            <ThemeText variant='body2' style={styles.label}>Total Price</ThemeText>
                            <ThemeText variant='body2' style={styles.value}>$1000.00</ThemeText>
                        </View>
                        <View style={styles.flexRow}>
                            <ThemeText variant='body2' style={styles.label}>Total Discount</ThemeText>
                            <ThemeText variant='body2' style={styles.value}>$1000.00</ThemeText>
                        </View>
                        <View style={styles.flexRow}>
                            <ThemeText variant='body2' style={styles.label}>Tax</ThemeText>
                            <ThemeText variant='body2' style={styles.value}>$1000.00</ThemeText>
                        </View>
                        <View style={styles.flexRow}>
                            <ThemeText variant='body2' style={styles.label}>Shipping Fee</ThemeText>
                            <ThemeText variant='body2' style={styles.value}>$1000.00</ThemeText>
                        </View>

                        <View style={styles.devider} />

                        <View style={styles.flexRow}>
                            <ThemeText variant='body1' style={styles.label}>Total Price</ThemeText>
                            <ThemeText variant='body1' style={styles.value}>$1000.00</ThemeText>
                        </View>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    )
})

export default SummaryModal

const styling = (theme: ITheme) => StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        width: '100%',
        backgroundColor: COLORS[theme].surface,
        borderTopLeftRadius: moderateScale(16),
        borderTopRightRadius: moderateScale(16),
    },
    content: {
        padding: moderateScale(20),
        gap: moderateScale(12)
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    },
    label: {
        color: COLORS[theme]['text-secondary']
    },
    value: {
        color: COLORS[theme]['brand-primary']
    },
    devider: {
        width: '100%',
        height: moderateScale(1.5),
        backgroundColor: COLORS[theme]['text-muted']
    }
})