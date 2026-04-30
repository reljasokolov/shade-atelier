import NavBar from "./components/my/NavBar";
import Home from "./components/my/Home";
import ProceduresSection from "./components/my/ProcedureSection";
import ProcedureDetails from "./components/my/ProcedureDetails";
import AboutMe from "./components/my/AboutMe";
import Contact from "./components/my/Contact";

import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Box bg="gold.100" minH="100vh">
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ProceduresSection />
                <AboutMe />
                <Contact />
              </>
            }
          />

          <Route path="/services" element={<ProceduresSection />} />

          <Route path="/procedure/:id" element={<ProcedureDetails />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
