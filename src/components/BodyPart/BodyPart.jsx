import React, { memo } from "react";
import { Stack, Typography } from "@mui/material";
import { icons } from "../../Icons";

const BodyPart = memo(({ item, bodyPart, setBodyPart, setSearchParams }) => {
  const handleClick = () => {
    setBodyPart(item);
    setSearchParams({ muscleGroup: item });
    window.scrollTo({ top: 1400, behavior: "smooth" });
  };

  const getIcon = () => {
    return icons[item];
  };
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="bodyPart-card"
      onClick={handleClick}
      sx={{
        borderTop: bodyPart === item ? "solid 3px #ff2625" : "",
        gap: "3rem",
        cursor: "pointer",
        backgroundColor: "#fff",
        minWidth: "200px",
        height: "210px",
        transform: "scale(1)",
        boxShadow: "none",
        transition: "transform 0.2s linear, box-shadow 0.2s linear",
        "&:hover": {
          transform: "scale(1.04)",
          boxShadow: "1px 1px 5px #3a1212aa",
          transition: "transform 0.25s ease-out, box-shadow 0.2s linear",
        },
      }}
    >
      <img src={getIcon()} alt="icon" width="40px" height="40px" />
      <Typography fontWeight={600} textTransform={"capitalize"} color="#3a1212">
        {item}
      </Typography>
    </Stack>
  );
});

export default BodyPart;
