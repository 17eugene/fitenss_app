export const exercisesUrl =
  "https://exercisedb.p.rapidapi.com/exercises?limit=1500";
export const bodyPartsUrl =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPartList";
export const bodyPartUrl =
  "https://exercisedb.p.rapidapi.com/exercises/bodyPart/";
export const exerciseDetailsUrl =
  "https://exercisedb.p.rapidapi.com/exercises/exercise";
export const exercisesTargetUrl =
  "https://exercisedb.p.rapidapi.com/exercises/target";
export const youtubeSearchUrl =
  "https://youtube-search-and-download.p.rapidapi.com";

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeSearchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_SEARCH_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error while fetching ${url}`);
  }
  const data = await response.json();

  return data;
};
