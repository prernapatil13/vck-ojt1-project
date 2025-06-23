import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionsPage";

import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";




const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <DeveloperInfoPopup

          show={showPopup}
          onClose={handleClosePopup}
          studentName="Prerna Ganpati Patil"
          studentPhotoUrl="/images/prerna1.jpg"
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills."
        />
      )}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/coursespage" element={<CoursesPage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/admissionspage" element={<AdmissionsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
