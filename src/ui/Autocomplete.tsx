import { useEffect, useRef, useState } from "react";
import { useDefineField } from "../hooks/defineField";
import { FlatList, TextInput, TouchableOpacity, View, Text } from "react-native";

export const Autocomplete = ({ label, value, onChangeText, suggestions }) =>
{
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const containerRef = useRef<any>(null);
    const { isFocused, toggleFocus, containerProps, labelProps, inputProps, floatingListProps, floatingListItemProps } = useDefineField({ value, debounce: 150 });

    const handleChangeText = (text) =>
    {
        onChangeText(text);
        setFilteredSuggestions(
          suggestions.filter((item) => item.toLowerCase().includes(text.toLowerCase()))
        );
    };

    const handleSelectSuggestion = (suggestion) =>
    {
        onChangeText(suggestion);
        setFilteredSuggestions([]);
        toggleFocus(false); // Close suggestions when a suggestion is selected
    };

    const handleOutsideClick = (event) =>
    {
        if (containerRef.current && !containerRef.current.contains(event.target))
        {
            toggleFocus(false);
            setFilteredSuggestions([]);
        }
    };

    useEffect(() =>
    {
        if (isFocused)
            document.addEventListener("mousedown", handleOutsideClick);
        else
            document.removeEventListener("mousedown", handleOutsideClick);

        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isFocused]);

    return <View {...containerProps} ref={containerRef}>
        <Text {...labelProps}>{label}</Text>
        <TextInput
          {...inputProps}
          value={value}
          onChangeText={handleChangeText}
        />
        {isFocused && filteredSuggestions.length > 0 && (
          <FlatList
            {...floatingListProps}
            data={filteredSuggestions}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectSuggestion(item)}>
                  <Text {...floatingListItemProps}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
    </View>;
};