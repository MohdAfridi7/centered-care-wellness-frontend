import React, { useEffect } from "react";

import ContactHero from "../../components/contact/ContactHero";
import ContactMap from "../../components/contact/ContactMap";
import ContactFormSection from "../../components/contact/ContactForm";

import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

const ContactPage = () => {

  useEffect(() => {

    const loadSeo = async () => {

      try {

        const res = await getSeoMetaByPage("contact");

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
      <ContactHero />
      <ContactMap />
      <ContactFormSection />
    </>
  );
};

export default ContactPage;