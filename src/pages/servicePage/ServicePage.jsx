import React, { useEffect } from "react";

import ServiceHero from "../../components/services/ServiceHero";
import Commitment from "../../components/common/Commitment";
import ServiceCards from "../../components/services/ServiceCards";
import ContactFormSection from "../../components/contact/ContactForm";
import WhoWeServe from "../../components/services/WhoWeServe";

import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

const ServicePage = () => {

  useEffect(() => {

    const loadSeo = async () => {

      try {

        const res = await getSeoMetaByPage("services");

        if (res.success) {
          updateSEO(res.data);
        }

      } catch (error) {

        console.error("SEO Error:", error);

      }

    };

    loadSeo();

  }, []);

  return (
    <>
      <ServiceHero />
      <ServiceCards />
      <WhoWeServe />
      <Commitment />
      <ContactFormSection />
    </>
  );
};

export default ServicePage;