import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Box } from "@mui/material";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import Search from "../../components/Search/Search";
import Exercises from "../../components/Exercises/Exercises";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const muscleGroup = searchParams.get("muscleGroup" || "");
  const query = searchParams.get("query");

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState(muscleGroup);

  return (
    <Box>
      <HeroBanner />
      <Search
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        setSearchParams={setSearchParams}
        query={query}
        muscleGroup={muscleGroup}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setSearchParams={setSearchParams}
        query={query}
        muscleGroup={muscleGroup}
      />
    </Box>
  );
};

export default Home;
