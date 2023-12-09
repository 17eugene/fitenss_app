import React from "react";
import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import RelatedVideo from "../RelatedVideo/RelatedVideo";
import Loader from "../Loader/Loader";

const ExercisesVideos = ({ exerciseVideos }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTabletSmall = useMediaQuery("(600px < width < 900px)");
  return (
    <Box p="20px">
      <Typography variant="h5" mb="20px">
        <Divider textAlign="left">Related videos</Divider>
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: isMobile ? "20px" : "10px",
          gridTemplateColumns: isTabletSmall
            ? "repeat(2, 1fr)"
            : isMobile
            ? "minmax(250px, 0.75fr)"
            : "repeat(4, minmax(200px, 350px))",
          justifyContent: isMobile && "center",
        }}
      >
        {exerciseVideos ? (
          exerciseVideos?.contents
            .slice(1, 5)
            .map((video) => (
              <RelatedVideo key={video?.video?.videoId} video={video} />
            ))
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default ExercisesVideos;
