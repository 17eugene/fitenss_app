import React from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ExerciseCard.module.css";
import { cutExerciseName } from "../../utils/cutExerciseName";

const ExerciseCard = ({ exercise, isSimilar }) => {
  const similarExerciseClick = () => {
    if (isSimilar) {
      window.scrollTo({ top: 100, behavior: "smooth" });
    }
  };
  return (
    <Box
      onClick={similarExerciseClick()}
      p={isSimilar ? "10px" : "20px"}
      className={styles.exerciseCard}
    >
      <Link to={`/exercise/${exercise.id}`}>
        <img
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          width={isSimilar && "270px"}
        />
      </Link>
      {isSimilar ? null : (
        <Stack direction="row" gap="0.75rem" mb="1.5rem">
          {exercise?.bodyPart && (
            <Chip
              label={exercise.bodyPart}
              sx={{
                backgroundColor: "#ff262522",
                textTransform: "capitalize",
                fontSize: "12px",
              }}
            ></Chip>
          )}
          {exercise?.target && (
            <Chip
              label={exercise.target}
              sx={{
                backgroundColor: "#ddc555",
                textTransform: "capitalize",
                fontSize: "12px",
              }}
            ></Chip>
          )}
        </Stack>
      )}
      <Typography fontSize="14px" fontWeight={600} textTransform="capitalize">
        {isSimilar ? cutExerciseName(exercise.name) : exercise.name}
      </Typography>
    </Box>
  );
};

export default ExerciseCard;
