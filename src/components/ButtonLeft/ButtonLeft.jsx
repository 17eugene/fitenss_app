import React, { memo } from "react";
import { Button } from "@mui/material";
import LeftArrowIcon from "../../assets/icons/left-arrow.png";

const ButtonLeft = memo(
  ({ scrollToPrev, isMobile, isTabletSmall, disableLeft }) => {
    return (
      <Button
        onClick={scrollToPrev}
        disableRipple
        disabled={disableLeft}
        sx={{
          opacity: disableLeft ? 0.2 : 1,
          position: "absolute",
          bottom: isMobile || isTabletSmall ? "0.25rem" : "1rem",
          left: isMobile || isTabletSmall ? "30%" : "40%",
          zIndex: 1,
        }}
      >
        <img src={LeftArrowIcon} alt="leftArrow" />
      </Button>
    );
  }
);

export default ButtonLeft;
