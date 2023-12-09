import React from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <TailSpin
      wrapperClass={styles.loader}
      height="60"
      width="60"
      color="#ff262522"
      ariaLabel="Loading"
    />
  );
};

export default Loader;
