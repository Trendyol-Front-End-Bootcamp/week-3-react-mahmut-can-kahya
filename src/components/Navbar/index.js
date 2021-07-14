import React from "react";
import { useHistory } from "react-router-dom";
import { useTheme } from "styled-components";
import { Text } from "../../core/components/Text/styles";
import { AppUrls } from "../../utils/AppUrls";
import { NavbarWrapper } from "./styles";

const Navbar = ({ title }) => {
  const { color, size, family } = useTheme();
  const history = useHistory();
  return (
    <NavbarWrapper
      onClick={() => {
        history.push(AppUrls.Home);
      }}
    >
      <Text color={color.white} size={size.big} family={family.semiBold}>
        {title}
      </Text>
    </NavbarWrapper>
  );
};

export default Navbar;
