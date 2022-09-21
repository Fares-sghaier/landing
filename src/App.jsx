import { Route, Routes } from "react-router-dom";
import styles from "./style";
//Components
import Navbar from "./components/Navbarr/TopNavbar";
import Home from "./pages/Home/Home";
import Footer from "./pages/Footer/Footer";
import Contracts from "./pages/Contracts/Contracts";
import Contact from "./pages/Contactus/Contactus";
import Team from "./pages/Team/Team";
import Services from "./components/Sections/Services";
import Term from "./pages/Terms/TermandCondition";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => (
  <div>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contracts" element={<Contracts />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/term" element={<Term />} />
    </Routes>

    <div className={`bg-gray-900 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);

export const NotFound = () => {
  return (
    <div>
      <h1> 404 page not found </h1>{" "}
    </div>
  );
};

export default App;
