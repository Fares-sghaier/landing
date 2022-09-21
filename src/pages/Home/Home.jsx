import Description from "../../components/Sections/Description";
import Steps from "../../components/Sections/Steps";
import Partner from "../../components/Sections/Partner";
import Hero from "./Hero/Hero";
import styles from "../../style";
import React from "react";
import Services from "../../components/Sections/Services";
import ProjectBox from "../../components/Sections/Projects";
import Pricing from "../../components/Sections/Pricing";
const Home = () => {
  return (
    <div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Partner />
        </div>
      </div>
      <div>
        <Services />
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Steps />
        </div>
      </div>
      <div>
        <ProjectBox />
      </div>
      <Description />
      <div>
        <Pricing />
      </div>
    </div>
  );
};
export default Home;
