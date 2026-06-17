import React, { useEffect } from "react";

import HeroSection from "../../components/home/HeroSection";
import LightMissionSection from "../../components/home/LightMissionSection";
import WhoWeServeShort from "../../components/home/WhoWeServeShort";
import Commitment from "../../components/common/Commitment";
import TimingSection from "../../components/common/TimingSection";
import HealthcareSteps from "../../components/common/HealthcareSteps.";
import StateOfArt from "../../components/common/StateOfArt";
import PatientCare from "../../components/common/PatientCare";
import Testimonials from "../../components/common/Testimonials";
import FaqSection from "../../components/common/FaqSection";
import HomeServiceCards from "../../components/home/HomeServiceCards";

import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

const HomePage = () => {

  useEffect(() => {

    const loadSeo = async () => {

      try {

        const response = await getSeoMetaByPage("home");

        if (response.success) {
          updateSEO(response.data);
        }

      } catch (error) {

        console.error("SEO Load Error:", error);

      }

    };

    loadSeo();

  }, []);

  return (
    <>
      <HeroSection />
      <HomeServiceCards />
      <WhoWeServeShort />
      <LightMissionSection />
      <Commitment />
      <TimingSection />
      <HealthcareSteps />
      <StateOfArt />
      <PatientCare />
      <Testimonials />
      <FaqSection />
    </>
  );
};

export default HomePage;