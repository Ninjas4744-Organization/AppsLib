import { View, Text, TextInput } from "react-native";
import { useDefineField } from "../hooks/defineField";

export const TextField = ({ label, value, onChangeText }) =>
{
  const { containerProps, labelProps, inputProps } = useDefineField({ value });

  return <View {...containerProps}>
    <Text {...labelProps}>{label}</Text>
    <TextInput {...inputProps} value={value} onChangeText={onChangeText} />
  </View>;
};
