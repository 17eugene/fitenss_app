import React, { useRef, memo } from "react";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import BodyPart from "../BodyPart/BodyPart";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import ButtonLeft from "../ButtonLeft/ButtonLeft";
import ButtonRight from "../ButtonRight/ButtonRight";
import Loader from "../Loader/Loader";
import { UseScrollSlider } from "../../hooks/useScrollSlider";

const HorizontalSlider = memo(
  ({ data, bodyPart, setBodyPart, isBodyParts, setSearchParams }) => {
    const sliderTrackRef = useRef(null);

    const isMobile = useMediaQuery("(max-width: 600px)");
    const isTabletSmall = useMediaQuery("(600px < width < 900px)");
    const isTabletLarge = useMediaQuery("(900px < width < 1200px)");

    let itemsToShow;

    if (isMobile) {
      itemsToShow = 1;
    } else if (isTabletSmall) {
      itemsToShow = 2;
    } else if (isTabletLarge) {
      itemsToShow = 3;
    } else {
      itemsToShow = 4;
    }

    const {
      position,
      scrollToNext,
      scrollToPrev,
      sliderRef,
      disableRight,
      disableLeft,
    } = UseScrollSlider(itemsToShow);

    return (
      <Box
        ref={sliderRef}
        overflow="hidden"
        position="relative"
        sx={
          isBodyParts
            ? {
                width: {
                  lg: "1200px",
                  md: "900px",
                  sm: "600px",
                  xs: "300px",
                },
              }
            : { width: "100%", overflowX: "scroll" }
        }
        p={isBodyParts ? "50px" : "25px 0 50px 0"}
      >
        {isBodyParts && (
          <ButtonLeft
            scrollToPrev={scrollToPrev}
            isMobile={isMobile}
            isTabletSmall={isTabletSmall}
            disableLeft={disableLeft}
          />
        )}
        <Box
          ref={sliderTrackRef}
          display="flex"
          gap={isBodyParts ? "100px" : "85px"}
          p={isBodyParts ? "20px 0" : "0 0"}
          sx={{
            transform: `translate(${position}px)`,
            transition: "transform 0.35s linear",
          }}
        >
          {data.length > 0 ? (
            data.map((item) =>
              isBodyParts ? (
                <Box key={item}>
                  <BodyPart
                    setSearchParams={setSearchParams}
                    item={item}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                  />
                </Box>
              ) : (
                <Box key={item.id}>
                  <ExerciseCard exercise={item} isSimilar />
                </Box>
              )
            )
          ) : (
            <Box width="100vw" display="flex" justifyContent="center">
              <Loader />
            </Box>
          )}
        </Box>
        {isBodyParts && (
          <ButtonRight
            disableRight={disableRight}
            data={data}
            scrollToNext={scrollToNext}
            isMobile={isMobile}
            isTabletSmall={isTabletSmall}
          />
        )}
      </Box>
    );
  }
);

export default HorizontalSlider;
