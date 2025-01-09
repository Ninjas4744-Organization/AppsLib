import React from "react";
import { css } from "@emotion/native";
import { View, ViewStyle } from "react-native";

type Direction = "row" | "column";

interface StackProps {
    direction: Direction;
    children: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
}

const Stack: React.FC<StackProps> = ({ direction, children, style, ...rest }) => {
    const stackStyle = css`
        width: 100%;
        display: flex;
        flex-direction: ${direction};
    `;

    return <View style={[stackStyle, style]} {...rest}>{children}</View>;
};

export default Stack;
