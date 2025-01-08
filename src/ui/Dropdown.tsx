import { View, Text, TouchableOpacity } from "react-native";
import { useDefineField } from "../hooks/defineField";

export const Dropdown = ({ label, value, onValueChange, options }) =>
{
    const { containerProps, labelProps, inputProps, floatingListProps, floatingListItemProps, isFocused } = useDefineField({ value, debounce: 150 });

    return <View {...containerProps}>
        <Text {...labelProps}>{label}</Text>
        <TouchableOpacity style={inputProps.style} onPress={inputProps.onFocus}>
            <Text>{value}</Text>
        </TouchableOpacity>
        {isFocused && <View {...floatingListProps}>
            {options.map((option, index) => (
              <TouchableOpacity key={index} onPress={() => (onValueChange(option), inputProps.onBlur())}>
                  <Text {...floatingListItemProps}>{option}</Text>
              </TouchableOpacity>
            ))}
        </View>}
    </View>;
};
