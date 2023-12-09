import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "../ExerciseCard/ExerciseCard";
import Loader from "../Loader/Loader";
import {
  fetchData,
  exercisesUrl,
  bodyPartUrl,
  options,
} from "../../api/fetchData";

const Exercises = ({
  exercises,
  setExercises,
  bodyPart,
  setBodyPart,
  setSearchParams,
  query,
  muscleGroup,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const lastExerciseIndex = exercisesPerPage * currentPage;
  const firstExerciseIndex = lastExerciseIndex - exercisesPerPage;
  const currentExercises = exercises?.slice(
    firstExerciseIndex,
    lastExerciseIndex
  );

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if ((!muscleGroup || muscleGroup === "all") && !query) {
        setSearchParams({});
        setBodyPart("all");
        exercisesData = await fetchData(exercisesUrl, options);
      } else if (query) {
        const data = await fetchData(exercisesUrl, options);
        exercisesData = data?.filter(
          (exercise) =>
            exercise.name.toLowerCase().trim().includes(query) ||
            exercise.bodyPart.toLowerCase().trim().includes(query) ||
            exercise.equipment.toLowerCase().trim().includes(query) ||
            exercise.target.toLowerCase().trim().includes(query)
        );
        setBodyPart("all");
      } else {
        exercisesData = await fetchData(
          bodyPartUrl + `${muscleGroup}`,
          options
        );
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, muscleGroup, query, setBodyPart, setExercises, setSearchParams]);

  const PaginateHandler = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
    window.scrollTo({ top: 1400, behavior: "smooth" });
  };

  return (
    <Box id="exercises" sx={{ mt: { lg: "30px" } }} mt="20px" p="20px">
      <Typography variant="h4" fontWeight={600} mb="40px">
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "80px", xs: "40px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises?.length ? (
          currentExercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))
        ) : (
          <Loader />
        )}
      </Stack>
      <Stack
        mt="50px"
        sx={{
          ul: {
            justifyContent: "center",
          },
        }}
      >
        {exercises?.length > 9 && (
          <Pagination
            color="standard"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            shape="rounded"
            defaultPage={1}
            page={currentPage}
            onChange={PaginateHandler}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
