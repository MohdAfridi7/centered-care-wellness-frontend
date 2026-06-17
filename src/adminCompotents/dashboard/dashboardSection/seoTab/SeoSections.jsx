import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getSeoMeta, deleteSeoMeta } from "../../../../api/seoRoutes";
import SeoPopupModel from "./SeoPopupModel";

const SeoSections = () => {
  const [seoList, setSeoList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [sectionToDelete, setSectionToDelete] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const [dropdownOpen, setDropdownOpen] = useState(null);

  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ================= FETCH =================

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await getSeoMeta();

      setSeoList(res?.data || []);
    } catch (err) {
      setError("Failed to fetch SEO meta data");

      handleError("Failed to fetch SEO meta");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // ================= ALERT =================

  const handleSuccess = (message) => {
    setAlert({ show: true, message, type: "success" });

    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);

    fetchData();
  };

  const handleError = (message) => {
    setAlert({ show: true, message, type: "error" });

    setTimeout(() => setAlert({ show: false, message: "", type: "" }), 3000);
  };

  // ================= DROPDOWN =================

  const toggleDropdown = (index) => {
    setDropdownOpen((prev) => (prev === index ? null : index));
  };

  // ================= ADD =================

  const handleAdd = () => {
    setSelectedSection(null);
    setIsModalOpen(true);
  };

  // ================= EDIT =================

  const handleEdit = (item) => {
    setSelectedSection(item);
    setIsModalOpen(true);
    setDropdownOpen(null);
  };

  // ================= DELETE =================

  const handleDeleteModalOpen = (page) => {
    setSectionToDelete(page);

    setIsDeleteModalOpen(true);

    setDropdownOpen(null);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);

    setSectionToDelete(null);
  };

  const handleDelete = async () => {
    if (!sectionToDelete) return;

    try {
      await deleteSeoMeta(sectionToDelete);

      handleSuccess("SEO meta deleted successfully");

      handleDeleteModalClose();
    } catch (err) {
      handleError("Delete failed");
    }
  };

  // ================= UI =================

  return (
    <>
      <div className="flex justify-end items-center p-4">
        <button
          className={`text-white text-sm rounded h-8 px-4 ${
            seoList.length >= 10
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
          onClick={handleAdd}
          disabled={seoList.length >= 10}
        >
          Add Meta Tag
        </button>
      </div>

      <div className="mt-1 mx-5 bg-gray-100 pt-5 pb-10">
        {/* ALERT */}
        {alert.show && (
          <div
            className={`mt-4 p-4 rounded fixed bottom-5 right-5 z-[111111] ${
              alert.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {alert.message}
          </div>
        )}

        {/* LOADING */}
        {loading && <div className="text-center p-10">Loading...</div>}

        {/* ERROR */}
        {error && <div className="text-center p-4 text-red-500">{error}</div>}

        {/* LIST */}
        {!loading && !error && (
          <div className="relative mt-7 px-4">
            <div className="space-y-4">
              {seoList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative border p-4 rounded-md bg-white border-gray-200"
                >
                  {/* ACTION BUTTON */}

                  <button
                    className="absolute top-4 right-4 w-6 h-6 bg-gray-800 text-white rounded"
                    onClick={() => toggleDropdown(index)}
                  >
                    ⋮
                  </button>

                  {dropdownOpen === index && (
                    <div className="absolute top-10 right-4 bg-white rounded shadow z-20">
                      <button
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                        onClick={() => handleDeleteModalOpen(item.page)}
                      >
                        Delete
                      </button>
                    </div>
                  )}

                  {/* DATA */}

                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Page:</strong> {item.page}
                    </p>

                    <p>
                      <strong>Title:</strong> {item.title}
                    </p>

                    <p>
                      <strong>Description:</strong> {item.description}
                    </p>

                    <p>
                      <strong>Keywords:</strong> {item.keywords}
                    </p>

                    <p>
                      <strong>Canonical:</strong> {item.canonical}
                    </p>

                    <p>
                      <strong>OG Title:</strong> {item.ogTitle}
                    </p>

                    <p>
                      <strong>OG Description:</strong> {item.ogDescription}
                    </p>

                    <p>
                      <strong>Twitter Title:</strong> {item.twitterTitle}
                    </p>

                    <p>
                      <strong>Twitter Description:</strong>{" "}
                      {item.twitterDescription}
                    </p>
                  </div>
                </motion.div>
              ))}

              {seoList.length === 0 && (
                <p className="text-center text-gray-500">No SEO Meta Found</p>
              )}
            </div>
          </div>
        )}

        {/* POPUP */}

        <SeoPopupModel
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          section={selectedSection}
          onSuccess={handleSuccess}
          onError={handleError}
        />

        {/* DELETE MODAL */}

        {isDeleteModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[10000]">
            <div className="p-6 rounded-lg bg-white max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-4">Confirm Delete</h3>

              <p className="mb-6">
                Are you sure you want to delete this SEO meta tag?
              </p>

              <div className="flex justify-end gap-4">
                <button
                  className="px-4 py-2 bg-gray-300 rounded"
                  onClick={handleDeleteModalClose}
                >
                  Cancel
                </button>

                <button
                  className="px-4 py-2 bg-red-500 text-white rounded"
                  onClick={handleDelete}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SeoSections;
