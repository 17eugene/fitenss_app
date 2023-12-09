import React from "react";
import { Box } from "@mui/material";

const RelatedVideo = ({ video }) => {
  return (
    <Box>
      <a
        key={video.video.videoId}
        href={`https://youtube.com/watch?v=${video.video.videoId}`}
        target="_blank"
        rel="noreferrer"
      >
        <img src={video.video.thumbnails[0].url} alt="exercise video" width="100%"/>
      </a>
    </Box>
  );
};

export default RelatedVideo;
