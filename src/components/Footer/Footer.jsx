import React from "react";
import { Box } from "@mui/material";
import Logo from "../../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box
      height="7rem"
      boxShadow="0px 2px 8px #aaa"
      p="20px"
      mt="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img src={Logo} alt="logotype" width="200px" height="40px" />
    </Box>
  );
};

export default Footer;
