import { FC } from "react";
import { CustomTextProps } from "../../utils/types";
import { Text } from "react-native";
import { Colors } from "@/utils/Constants";

const fontSizes = {
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 14,
  h7: 10,
  h8: 9,
};

const CustomText: FC<CustomTextProps> = ({
  variant = "h6",
  style,
  fontSize,
  children,
  fontFamily = "Regular",
  numberOfLines,
}) => {
  return (
    <Text
      style={[
        {
          fontSize: fontSize || fontSizes[variant],
          fontFamily: `NotoSans-${fontFamily}`,
        },
        style,
      ]}
      numberOfLines={numberOfLines ?? undefined}
    >
      {children}
    </Text>
  );
};

const styles = {
  text: {
    color: Colors.text,
    textAlign: "left",
  },
};

export default CustomText;
