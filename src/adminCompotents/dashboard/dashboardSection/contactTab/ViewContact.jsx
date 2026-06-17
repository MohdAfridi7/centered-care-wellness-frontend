import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Loader2,
  Search,
  X,
  Trash2,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  getAllContacts,
  deleteContact,
} from "../../../../api/contactRoutes";

const ITEMS_PER_PAGE = 1;

export default function ViewContact() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedContact, setSelectedContact] = useState(null);
  const [deleteContactId, setDeleteContactId] = useState(null);

  // ================= FETCH CONTACTS =================
  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);

      try {
        const res = await getAllContacts();

        const data = res?.data || [];
        setContacts(data);
        setFilteredContacts(data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // ================= SEARCH FILTER =================
  useEffect(() => {
    let result = [...contacts];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();

result = result.filter((c) => {
  return (
    c.fullName?.toLowerCase().includes(q) ||
    c.email?.toLowerCase().includes(q) ||
    c.phone?.toLowerCase().includes(q)
  );
});
    }

    setFilteredContacts(result);
    setCurrentPage(1);
  }, [searchQuery, contacts]);

  // ================= PAGINATION =================
  const totalItems = filteredContacts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalItems);

  const currentPageContacts = filteredContacts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

const getPageNumbers = () => {
  const pages = [];
  const maxNumbers = 5;

  if (totalPages <= maxNumbers) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Start pages
  if (currentPage <= 3) {
    pages.push(1, 2, 3, "...", totalPages);
  }
  // End pages
  else if (currentPage >= totalPages - 2) {
    pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
  }
  // Middle pages
  else {
    pages.push(
      1,
      "...",
      currentPage,
      "...",
      totalPages
    );
  }

  return pages;
};

  const pageNumbers = getPageNumbers();

  // ================= DELETE =================
  const openDeleteModal = (id) => setDeleteContactId(id);

  const closeDeleteModal = () => setDeleteContactId(null);

  const confirmDelete = async () => {
    try {
      await deleteContact(deleteContactId);

      toast.success("Contact deleted");

      const updated = contacts.filter((c) => c._id !== deleteContactId);

      setContacts(updated);
      setFilteredContacts(updated);
    } catch (err) {
      toast.error("Delete failed");
    } finally {
      closeDeleteModal();
    }
  };

  // ================= VIEW MODAL =================
  const openViewModal = (contact) => setSelectedContact(contact);

  const closeViewModal = () => setSelectedContact(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

        {/* SEARCH */}
        <div className="bg-white p-6 rounded-xl shadow mb-6 flex flex-col sm:flex-row gap-4 justify-between items-center">

          <p className="text-lg font-semibold">
            Total Contacts: {contacts.length}
          </p>

          <div className="relative w-full sm:w-96">
<input
  type="text"
  placeholder="Search contact..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-yellow-400 outline-none"
/>

            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-2.5"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {/* TABLE */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin w-8 h-8" />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow overflow-x-auto">

            <table className="w-full">
<thead className="bg-[#1f1b4b] text-white">
  <tr>
    <th className="p-4 text-left">Name</th>
    <th className="p-4 text-left">Email</th>
    <th className="p-4 text-left">Phone</th>
    <th className="p-4 text-center">Actions</th>
  </tr>
</thead>

<tbody>
  {currentPageContacts.map((contact) => (
    <tr key={contact._id} className="border-t hover:bg-gray-50 transition">

      <td className="p-4 font-medium text-gray-800">
        {contact.fullName}
      </td>

      <td className="p-4 text-gray-600">
        {contact.email}
      </td>

      <td className="p-4 text-gray-600">
        {contact.phone}
      </td>

      <td className="p-4 flex justify-center gap-3">

        <button
          onClick={() => openViewModal(contact)}
          className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition"
        >
          <Eye size={18} />
        </button>

        <button
          onClick={() => openDeleteModal(contact._id)}
          className="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition"
        >
          <Trash2 size={18} />
        </button>

      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        )}

        {/* VIEW MODAL */}
        {selectedContact && (

          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="bg-white rounded-xl p-6 w-[500px]"
            >

              <h2 className="text-xl font-bold mb-4">
                Contact Message
              </h2>

              <p><b>Name:</b> {selectedContact.fullName}</p>
<p><b>Email:</b> {selectedContact.email}</p>
<p><b>Phone:</b> {selectedContact.phone}</p>

<p className="mt-4"><b>Message:</b></p>

<div className="bg-gray-100 p-4 rounded-lg mt-2 text-gray-700 leading-relaxed">
  {selectedContact.message}
</div>

              <button
                onClick={closeViewModal}
                className="mt-6 bg-gray-900 text-white px-4 py-2 rounded"
              >
                Close
              </button>

            </motion.div>

          </div>

        )}

        {/* DELETE MODAL */}
        {deleteContactId && (

          <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

            <div className="bg-white p-6 rounded-xl w-[400px]">

              <h2 className="text-xl font-bold mb-4 text-red-600">
                Delete Contact
              </h2>

              <p className="mb-6">
                Are you sure you want to delete this contact?
              </p>

              <div className="flex gap-4">

                <button
                  onClick={closeDeleteModal}
                  className="flex-1 border py-2 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={confirmDelete}
                  className="flex-1 bg-red-600 text-white py-2 rounded"
                >
                  Delete
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

                  {/* PAGINATION */}
            {totalPages > 1 && (

              <div className="flex justify-between mt-5 items-center p-4 border-t">

                <p className="text-sm">
                  Showing {endIndex} of {totalItems}
                </p>

                <div className="flex gap-2">

                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft />
                  </button>

                  {pageNumbers.map((p, i) => (

                    <button
                      key={i}
                      onClick={() => typeof p === "number" && goToPage(p)}
                      className={`px-3 py-1 rounded-full text-sm ${
  p === currentPage
    ? "bg-yellow-400 text-black"
    : "bg-gray-100 hover:bg-gray-200"
}`}
                    >
                      {p}
                    </button>

                  ))}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <ChevronRight />
                  </button>

                </div>

              </div>

            )}
    </div>
  );
}