import React from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        gap: { sm: "130px", xs: "45px" },
        mt: { sm: "25px", xs: "20px" },
        px: "20px",
      }}
    >
      <NavLink to="/">
        <img src={Logo} alt="logo" className={style.logo} />
      </NavLink>
      <Stack direction="row" gap="3rem" fontSize="18px" alignItems="flex-end">
        <NavLink
          className={({ isActive }) =>
            isActive ? style.navLinkActive : style.navLink
          }
          to="/"
        >
          Home
        </NavLink>
        <a href="#exercises" className={style.navLink}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
