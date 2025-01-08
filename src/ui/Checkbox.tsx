import { TouchableOpacity, View, Text } from "react-native";
import { useDefineField } from "../hooks/defineField";
import { css } from "@emotion/native";

export const Checkbox = ({ label, checked, onValueChange }) => {
  const {containerProps} = useDefineField({value: checked});

  const checkboxStyle = css`
	  width: 20px;
	  height: 20px;
	  border-width: 1px;
	  border-color: #9e9e9e;
	  background-color: ${checked ? "#6200ee" : "white"};
	  margin-right: 8px;
	  justify-content: center;
	  align-items: center;
  `;

  const checkIconStyle = css`
    width: 12px;
    height: 12px;
    background-color: white;
    display: ${checked ? "flex" : "none"};
  `;

  const labelStyle = css`
    font-size: 16px;
    color: #000;
  `;

  return <TouchableOpacity style={[containerProps.style, {flexDirection: 'row'}]} onPress={() => onValueChange(!checked)}>
      <View style={checkboxStyle}>
        <View style={checkIconStyle} />
      </View>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>;
};
