import { css } from "@emotion/native";
import { useState } from "react";

export const useDefineField = ({ value, debounce = 0 }) =>
{
    const [isFocused, setIsFocused] = useState(false);

    const container = css`
		position: relative;
		margin-bottom: 24px;

		${isFocused ? "z-index: 999" : ""}
    `;

    const label = css`
		position: absolute;
		left: 12px;
		top: ${isFocused || value ? "-8px" : "12px"};
		font-size: ${isFocused || value ? 12 : 16}px;
		color: ${isFocused ? "#6200ee" : "#9e9e9e"};
		background-color: white;
		padding: 0 4px;
		transition: all 0.2s;
		z-index: 1;
    `;

    const input = css`
		height: 40px;
		border-width: 1px;
		border-color: ${isFocused ? "#6200ee" : "#9e9e9e"};
		border-radius: 4px;
		padding: 8px 12px;
		font-size: 16px;
		color: #000;
    `;

    const floatingList = css`
		position: absolute;
		top: 40px;
		left: 0;
		right: 0;
		background-color: white;
		border: 1px solid #9e9e9e;
		border-radius: 4px;
		max-height: 150px;
		z-index: 999; /* Ensure it appears on top */
		elevation: 5; /* Add shadow for better visibility on Android */
    `;

    const floatingListItem = css`
		padding: 12px;
		border-bottom-width: 1px;
		border-bottom-color: #eee;
    `;

    const onFocus = () => setIsFocused(true);
    const onBlur = () => setTimeout(() => setIsFocused(false), debounce);

    const toggleFocus = (forceFocus = true) =>
    {
        if (isFocused && forceFocus)
            onFocus();
        else
            onBlur();
    };

    return {
        containerProps: {
            style: container
        },
        labelProps: {
            style: label
        },
        floatingListProps: {
            style: floatingList
        },
        floatingListItemProps: {
            style: floatingListItem
        },
        baseInputProps: {
            style: input
        },
        inputProps: {
            style: input,
            onFocus,
            onBlur
        },
        toggleFocus,
        isFocused
    };
};
