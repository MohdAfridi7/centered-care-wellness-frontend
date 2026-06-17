import React, { useState, useEffect } from "react";
import { addSeoMeta, updateSeoMeta } from "../../../../api/seoRoutes";

const SeoPopupModel = ({ isOpen, onClose, section, onSuccess, onError }) => {

  const [formData, setFormData] = useState({
    page: "",
    title: "",
    description: "",
    keywords: "",
    canonical: "",
    ogTitle: "",
    ogDescription: "",
    twitterTitle: "",
    twitterDescription: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const pageOptions = [
    "home",
    "about",
    "service",
    "blogs",
    "contact",
    "partners",
    "concierge-medicine",
    "primary-care",
    "chronic-care-management-conditions",
    "transitional-care-management-requirements",
    "behavioral-health-care",
    "who-we-serve",
  ];

  // ================= PREFILL =================

  useEffect(() => {

    if (section) {

      setFormData({
        page: section.page || "",
        title: section.title || "",
        description: section.description || "",
        keywords: section.keywords || "",
        canonical: section.canonical || "",
        ogTitle: section.ogTitle || "",
        ogDescription: section.ogDescription || "",
        twitterTitle: section.twitterTitle || "",
        twitterDescription: section.twitterDescription || "",
      });

    } else {

      setFormData({
        page: "",
        title: "",
        description: "",
        keywords: "",
        canonical: "",
        ogTitle: "",
        ogDescription: "",
        twitterTitle: "",
        twitterDescription: "",
      });

    }

  }, [section, isOpen]);

  // ================= INPUT CHANGE =================

  const handleInputChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  // ================= SUBMIT =================

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setIsLoading(true);

      if (!section) {

        if (!formData.page || !formData.title || !formData.description) {
          throw new Error("Page, Title and Description required");
        }

        await addSeoMeta(formData);

        onSuccess("SEO Meta Added Successfully");

      } else {

        await updateSeoMeta(formData.page, formData);

        onSuccess("SEO Meta Updated Successfully");

      }

      onClose();

    } catch (error) {

      const msg =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";

      onError(msg);

    } finally {

      setIsLoading(false);

    }

  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1111]">

      <div className="custom-scrollbar h-[80vh] overflow-auto p-6 rounded-lg shadow-lg w-full max-w-[800px] bg-white">

        <h6 className="text-xl font-semibold mb-4">
          {section ? "Edit SEO Meta Tags" : "Add SEO Meta Tags"}
        </h6>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* PAGE */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Page Name
            </label>

            <select
              name="page"
              value={formData.page}
              onChange={handleInputChange}
              className="w-full rounded-md border px-3 py-2"
              disabled={section}
              required
            >
              <option value="">Select Page</option>

              {pageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}

            </select>
          </div>

          {/* TITLE */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Page Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Meta Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className="w-full border rounded-md px-3 py-2 resize-none"
              required
            />
          </div>

          {/* KEYWORDS */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Meta Keywords
            </label>

            <textarea
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              rows="2"
              className="w-full border rounded-md px-3 py-2 resize-none"
            />
          </div>

          {/* CANONICAL */}
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Canonical URL
            </label>

            <input
              type="text"
              name="canonical"
              value={formData.canonical}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          {/* OG TITLE */}
          {/* <div>
            <label className="block mb-1 text-sm font-semibold">
              OG Title
            </label>

            <input
              type="text"
              name="ogTitle"
              value={formData.ogTitle}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div> */}

          {/* OG DESCRIPTION */}
          {/* <div>
            <label className="block mb-1 text-sm font-semibold">
              OG Description
            </label>

            <textarea
              name="ogDescription"
              value={formData.ogDescription}
              onChange={handleInputChange}
              rows="2"
              className="w-full border rounded-md px-3 py-2 resize-none"
            />
          </div> */}

          {/* TWITTER TITLE */}
          {/* <div>
            <label className="block mb-1 text-sm font-semibold">
              Twitter Title
            </label>

            <input
              type="text"
              name="twitterTitle"
              value={formData.twitterTitle}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div> */}

          {/* TWITTER DESCRIPTION */}
          {/* <div>
            <label className="block mb-1 text-sm font-semibold">
              Twitter Description
            </label>

            <textarea
              name="twitterDescription"
              value={formData.twitterDescription}
              onChange={handleInputChange}
              rows="2"
              className="w-full border rounded-md px-3 py-2 resize-none"
            />
          </div> */}

          {/* BUTTONS */}
          <div className="flex justify-end gap-2 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isLoading
                ? "Saving..."
                : section
                ? "Update"
                : "Add"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};

export default SeoPopupModel;