import { StyleSheet, Text, TextProps } from "react-native";
import { COLORS } from "../theme/color";

export const Title = (props: TextProps) => {
     const { children, style } = props;
    return (
        <Text {...props} style={[styles.title, style]}>{children}</Text>
    );
}
export const Description = (props: TextProps) => {
    const { children, style } = props;
    return (
        <Text {...props} style={[styles.description, style]}>{children}</Text>
    );
}
const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.black,
    },
    description: {
        fontSize: 14,
        color: COLORS.gray,
    }
})