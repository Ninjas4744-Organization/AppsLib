import { css } from "@emotion/native";
import { TouchableOpacity, View, Text } from "react-native";
import { useDefineField } from "../hooks/defineField";

const Radio = ({ label, selected, onValueChange }) =>
{
    const { containerProps } = useDefineField({ value: selected });

    const radioOuterStyle = css`
		width: 20px;
		height: 20px;
		border-width: 1px;
		border-color: #9e9e9e;
		border-radius: 10px;
		justify-content: center;
		align-items: center;
		margin-right: 8px;
    `;

    const radioInnerStyle = css`
		width: 12px;
		height: 12px;
		border-radius: 6px;
		background-color: ${selected ? "#6200ee" : "white"};
    `;

    const labelStyle = css`
		font-size: 16px;
		color: #000;
    `;

    return <TouchableOpacity style={[containerProps.style, {flexDirection: 'row'}]} onPress={() => onValueChange()}>
        <View style={radioOuterStyle}>
            <View style={radioInnerStyle} />
        </View>
        <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>;
};

export default Radio
