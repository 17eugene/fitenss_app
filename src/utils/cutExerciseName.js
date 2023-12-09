export const cutExerciseName = (str) => {
  let splittedStr = str.split("");
  let joinedStr = "";
  if (splittedStr.length > 32) {
    splittedStr.splice(32, splittedStr.length - 1);
  }
  joinedStr = splittedStr.join("");
  return joinedStr.length < str.length ? joinedStr + "..." : str;
};
