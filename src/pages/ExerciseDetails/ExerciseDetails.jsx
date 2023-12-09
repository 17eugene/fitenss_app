import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Details from "../../components/Details/Details";
import SimilarExercises from "../../components/SimilarExercises/SimilarExercises";
import ExercisesVideos from "../../components/ExercisesVideos/ExercisesVideos";
import Loader from "../../components/Loader/Loader";
import {
  fetchData,
  options,
  exerciseDetailsUrl,
  youtubeSearchUrl,
  youtubeSearchOptions,
  exercisesTargetUrl,
} from "../../api/fetchData";

const ExerciseDetails = () => {
  const [exerciseDetails, setExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState(null);
  const [targetExercises, setTargetExercises] = useState([]);
  const { id } = useParams();

  const fetchExerciseDetails = async (id) => {
    const detailsData = await fetchData(`${exerciseDetailsUrl}/${id}`, options);
    setExerciseDetails(detailsData);

    const videosData = await fetchData(
      `${youtubeSearchUrl}/search?query=${detailsData?.name + " exercise"}`,
      youtubeSearchOptions
    );
    setExerciseVideos(videosData);

    const targetExercisesData = await fetchData(
      `${exercisesTargetUrl}/${detailsData.target}`,
      options
    );
    setTargetExercises(targetExercisesData);
  };

  useEffect(() => {
    fetchExerciseDetails(id);
  }, [id]);

  return (
    <Box>
      {exerciseDetails?.bodyPart ? (
        <Details exerciseDetails={exerciseDetails} />
      ) : (
        <Box
          width="100vw"
          height="60vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Loader />
        </Box>
      )}
      <ExercisesVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetails?.name}
      />
      <SimilarExercises targetExercises={targetExercises} />
    </Box>
  );
};

export default ExerciseDetails;
