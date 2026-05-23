import React from "react";
import { moderateScale } from "$constants/styles.constants"
import { StyleSheet, StyleProp, ViewStyle, View, ViewProps } from "react-native"
import FastImage, { FastImageProps, ImageStyle } from "@d11/react-native-fast-image";
import { COLORS } from "$constants/colors.constants";

interface AutoImageProps extends Omit<FastImageProps, 'style'> {
    wrapperStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    wrapperProps?: ViewProps;
}

const BaseAutoImage = (props: AutoImageProps) => {

    const { imageStyle, wrapperStyle, wrapperProps, ...imageProps } = props;

    return (
        <View {...wrapperProps} style={[styles.wrapper, wrapperStyle]}>
            <FastImage
                {...imageProps}
                style={[styles.image, imageStyle]}
            />
        </View>
    )
}

export default React.memo(BaseAutoImage);

const styles = StyleSheet.create({
    wrapper: {
        width: moderateScale(100),
        height: moderateScale(100),
        backgroundColor: COLORS.light['surface-alt'],
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})