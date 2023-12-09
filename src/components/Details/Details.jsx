import React from "react";
import { Box, Typography, Stack, useMediaQuery } from "@mui/material";
import targetIcon from "../../assets/icons/target.png";
import equipmentIcon from "../../assets/icons/equipment.png";
import styled from "@emotion/styled";
import styles from "./Details.module.css";
import { icons } from "../../Icons";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "1.25rem",
  marginBottom: "1rem",
}));

const StyledImgBox = styled(Box)(() => ({
  minWidth: "60px",
  height: "60px",
  borderRadius: "50%",
  backgroundColor: "#ff262533",
  position: "relative",
}));

const Details = ({ exerciseDetails }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTabletSmall = useMediaQuery("(600px < width < 900px)");
  const isTabletLarge = useMediaQuery("(900px < width < 1200px)");
  const { name, bodyPart, target, equipment, gifUrl, instructions } =
    exerciseDetails;

  const showBodyPartIcon = (bodyPart) => {
    return icons[bodyPart];
  };

  return (
    <Stack
      mt="3rem"
      mb="3rem"
      direction={isTabletSmall || isMobile ? "column-reverse" : "row"}
      alignItems={isTabletSmall || isMobile ? "center" : "flex-start"}
      gap="40px"
      p="20px"
    >
      <Box>
        <img src={gifUrl} alt="exercise" width={isMobile ? "320px" : "450px"} />
      </Box>
      <Stack>
        <Typography
          mb="2rem"
          variant="h4"
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>
        <Typography mb="2rem">{instructions}</Typography>
        <Stack
          direction={isTabletLarge || isTabletSmall ? "row" : "column"}
          justifyContent={isTabletSmall && "center"}
        >
          <StyledBox
            sx={
              (isTabletLarge || isTabletSmall) && {
                flexDirection: "column",
                mb: 0,
                mr: "2.5rem",
              }
            }
          >
            <StyledImgBox>
              <img
                className={styles.detailIcon}
                src={showBodyPartIcon(bodyPart)}
                alt="exercise name"
                width="30px"
              />
            </StyledImgBox>
            <Typography textTransform="capitalize">{bodyPart}</Typography>
          </StyledBox>
          <StyledBox
            sx={
              (isTabletLarge || isTabletSmall) && {
                flexDirection: "column",
                mb: 0,
                mr: "2.5rem",
              }
            }
          >
            <StyledImgBox>
              <img
                className={styles.detailIcon}
                src={targetIcon}
                alt="target muscle"
                width="40px"
              />
            </StyledImgBox>
            <Typography textTransform="capitalize">{target}</Typography>
          </StyledBox>
          <StyledBox
            sx={
              (isTabletLarge || isTabletSmall) && {
                flexDirection: "column",
                mb: 0,
                mr: "2.5rem",
              }
            }
          >
            <StyledImgBox>
              <img
                className={styles.detailIcon}
                src={equipmentIcon}
                alt="equipment"
                width="40px"
              />
            </StyledImgBox>
            <Typography textTransform="capitalize">{equipment}</Typography>
          </StyledBox>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Details;
