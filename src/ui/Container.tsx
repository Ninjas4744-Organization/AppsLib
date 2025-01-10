import { css } from "@emotion/native";
import {StyleProp, View, ViewStyle} from "react-native";
import React from "react";

interface ContainerProps {
    centered: boolean;
    children: React.ReactNode;
} 

const Container: React.FC<ContainerProps> = ({ centered, children }) => {
    const viewStyle: StyleProp<ViewStyle> = css`
        display: flex;
        ${centered &&
        `
            align-items: center;
            justify-content: center;
        `}
    `;

    return <View style={viewStyle}>{children}</View>;
};

export default Container;
