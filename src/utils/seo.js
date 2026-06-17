export const updateSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
}) => {

  document.title = title || "";

  const updateMetaTag = (name, content) => {

    if (!content) return;

    let element = document.querySelector(
      `meta[name="${name}"]`
    );

    if (!element) {

      element = document.createElement("meta");
      element.setAttribute("name", name);

      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  const updatePropertyTag = (property, content) => {

    if (!content) return;

    let element = document.querySelector(
      `meta[property="${property}"]`
    );

    if (!element) {

      element = document.createElement("meta");
      element.setAttribute("property", property);

      document.head.appendChild(element);
    }

    element.setAttribute("content", content);
  };

  // Standard SEO
  updateMetaTag("description", description);
  updateMetaTag("keywords", keywords);

  // Open Graph
  updatePropertyTag("og:title", ogTitle);
  updatePropertyTag("og:description", ogDescription);

  // Twitter
  updateMetaTag("twitter:title", twitterTitle);
  updateMetaTag(
    "twitter:description",
    twitterDescription
  );

  // Canonical URL
  if (canonical) {

    let link = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!link) {

      link = document.createElement("link");
      link.rel = "canonical";

      document.head.appendChild(link);
    }

    link.href = canonical;
  }
};