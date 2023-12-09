import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ExerciseDetails from "./pages/ExerciseDetails/ExerciseDetails";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <Box
      maxWidth="1920px"
      minHeight="100%"
      display="flex"
      flexDirection="column"
      m="0 auto"
    >
      <Navbar />
      <Box flex="1 1 auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetails />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
