import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import AboutHero from "../../components/about/AboutHero";
import AboutVision from "../../components/about/AboutVision";
import StateOfArt from "../../components/common/StateOfArt";
import PatientCare from "../../components/common/PatientCare";
import FaqSection from "../../components/common/FaqSection";
import MissionSection from "../../components/about/MissionSection";
import TimingSection from "../../components/common/TimingSection";
import HealthcareSteps from "../../components/common/HealthcareSteps.";
import Commitment from "../../components/common/Commitment";
import Testimonials from "../../components/common/Testimonials";
import LeadershipTeam from "../../components/about/LeadershipTeam";
import OurStory from "../../components/about/OurStory";

import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

const AboutPage = () => {
  const location = useLocation();

  // Leadership Team Scroll
  useEffect(() => {
    if (location.hash === "#leadership-team") {
      setTimeout(() => {
        document
          .getElementById("leadership-team")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 300);
    }
  }, [location]);

  // Dynamic SEO
  useEffect(() => {
    const loadSeo = async () => {
      try {
        const res = await getSeoMetaByPage("about");

        if (res.success) {
          updateSEO(res.data);
        }
      } catch (error) {
        console.log("SEO Error:", error);
      }
    };

    loadSeo();
  }, []);

  return (
    <>
      <AboutHero />
      <MissionSection />
      <AboutVision />
      <OurStory />
      <LeadershipTeam />
      <StateOfArt />
      <TimingSection />
      <HealthcareSteps />
      <Commitment />
      <PatientCare />
      <Testimonials />
      <FaqSection />
    </>
  );
};

export default AboutPage;