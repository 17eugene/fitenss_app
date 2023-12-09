import React, { useRef, useEffect, useState, memo } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import styles from "./HeroBanner.module.css";

const HeroBanner = memo(() => {
  const [elementVisible, setElementVisible] = useState();
  const svgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let entry = entries[0];
      setElementVisible(entry.isIntersecting || true);
    });

    observer.observe(svgRef.current);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 1450, behavior: "smooth" });
  };

  return (
    <Box
      position="relative"
      p="20px"
      sx={{ mt: { lg: "210px", xs: "70px" }, ml: { sm: "50px" } }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
      >
        <Typography fontSize="24px" fontWeight="600" color="#ff2625">
          Fitness Club
        </Typography>
      </motion.div>

      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "40px", xs: "32px" } }}
        >
          Sweat, Smile <br /> and Repeat
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: -150, opacity: 0 }}
        animate={{ y: 0, opacity: [0, 0.2, 1] }}
        transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
      >
        <Typography lineHeight="35px" fontSize="18px" mt="0.75rem" mb="0.75rem">
          Check out the most effeective exercises
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 1.3 }}
      >
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            fontSize: "12px",
            backgroundColor: "#ff2526",
            "&:hover": { backgroundColor: "#dc1212" },
          }}
        >
          Explore Exercises
        </Button>
      </motion.div>

      {/* Exercises SVG start */}
      <div ref={svgRef}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="900"
          height="250"
          viewBox="0 20 900 250"
          className={styles.svg}
        >
          <text
            x="10"
            y="200"
            fill="none"
            className={`${styles.svgText} ${elementVisible && styles.visible}`}
          >
            Exercises
          </text>
        </svg>
      </div>
      {/* Exercises SVG end */}

      <motion.div
        animate={{
          opacity: [0, 0.3, 0.5, 1],
        }}
        transition={{
          duration: 1.75,
          ease: "easeInOut",
        }}
        className={styles.bannerWrapper}
      />
    </Box>
  );
});

export default HeroBanner;
