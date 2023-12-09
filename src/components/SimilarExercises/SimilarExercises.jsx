import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import HorizontalSlider from "../HorizontalSlider/HorizontalSlider";
import Loader from "../Loader/Loader";

const SimilarExercises = ({ targetExercises }) => {
  return (
    <Box p="20px" id="exercises">
      <Divider textAlign="left">
        <Typography variant="h5">Similar exercises</Typography>
      </Divider>
      {targetExercises.length ? (
        <HorizontalSlider data={targetExercises} />
      ) : (
        <Box width="100vw" display="flex" justifyContent="center">
          <Loader />
        </Box>
      )}
    </Box>
  );
};

export default SimilarExercises;
