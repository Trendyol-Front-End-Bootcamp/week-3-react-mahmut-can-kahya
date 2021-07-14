import React from "react";
import { useTheme } from "styled-components";
import { Text } from "../../core/components/Text/styles";
import { NavbarWrapper } from "./styles";

const Navbar = ({ title }) => {
  const { color, size, family } = useTheme();
  return (
    <NavbarWrapper>
      <Text color={color.white} size={size.big} family={family.semiBold}>
        {title}
      </Text>
    </NavbarWrapper>
  );
};

export default Navbar;
