import React, { memo } from "react";
import { Button } from "@mui/material";
import RightArrowIcon from "../../assets/icons/right-arrow.png";

const ButtonRight = memo(
  ({ scrollToNext, data, isMobile, isTabletSmall, disableRight }) => {
    
    return (
      <Button
        disableRipple
        disabled={disableRight}
        sx={{
          opacity: disableRight ? 0.2 : 1,
          position: "absolute",
          bottom: isMobile || isTabletSmall ? "0.25rem" : "1rem",
          right: isMobile || isTabletSmall ? "30%" : "40%",
          zIndex: 1,
        }}
        onClick={() => scrollToNext(data)}
      >
        <img src={RightArrowIcon} alt="rightArrow" />
      </Button>
    );
  }
);

export default ButtonRight;
