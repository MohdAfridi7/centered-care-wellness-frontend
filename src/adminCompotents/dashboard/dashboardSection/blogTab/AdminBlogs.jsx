import { useEffect, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { FaEdit, FaTrash, FaCalendarAlt, FaUser, FaFolderOpen, FaRegCommentDots } from "react-icons/fa";
import AddUpdateBlogModal from "./AddUpdateBlogModal";
import DeleteBlogModal from "./DeleteBlogModal";
import { getBlogsData, deleteBlogs } from "../../../../api/blogRoute";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const [openModal, setOpenModal] = useState(false);
  const [editId, setEditId] = useState(null);

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // FETCH BLOGS
  const fetchBlogs = async () => {
    try {
      const res = await getBlogsData();
      console.log("data", res);
      setBlogs(res.data || []);
      setCategories(["All", ...(res.categories || [])]);
    } catch (err) {
      toast.error("Failed to load blogs");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // FILTER BLOGS
  const filteredBlogs = useMemo(() => {
    return selectedCategory === "All"
      ? blogs || []
      : (blogs || []).filter((b) => b.category === selectedCategory);
  }, [selectedCategory, blogs]);

  // PAGINATION
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLast = currentPage * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfLast - blogsPerPage, indexOfLast);

  // DELETE CONFIRM
  const confirmDelete = async () => {
    try {
      await deleteBlogs(deleteId);
      toast.success("Blog deleted");
      setDeleteModal(false);
      fetchBlogs();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-6 mt-10">
      {/* TOP BAR */}
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Blogs</h2>

        <button
          onClick={() => {
            setEditId(null);
            setOpenModal(true);
          }}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          + Add Blog
        </button>
      </div>

      {/* CATEGORY FILTER */}
      <div className="flex gap-3 overflow-x-auto mb-8">
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedCategory(cat);
              setCurrentPage(1);
            }}
            className={`whitespace-nowrap px-4 py-1 text-sm rounded border transition ${
              selectedCategory === cat
                ? "bg-yellow-500 text-white border-yellow-500"
                : "bg-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* BLOG GRID – exact same layout as your example */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {currentBlogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col border border-yellow-100 relative"
          >


            {/* Meta (date + author) */}
            <div className="flex items-center justify-around gap-4 text-sm text-gray-500 mb-3">
              <div className="flex text-[12px] items-center gap-2">
                <FaCalendarAlt className="text-yellow-600 text-sm" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>

              <div className="flex text-[12px] items-center gap-2">
                <FaUser className="text-yellow-600 text-sm" />
                <span>{blog.author}</span>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
                          {/* EDIT + DELETE ICONS – top right, same style */}
            <div className="absolute top-3 right-3 flex gap-2 z-10">
              <button
                onClick={() => {
                  setEditId(blog._id);
                  setOpenModal(true);
                }}
                className="bg-white p-2 rounded shadow hover:bg-gray-100 transition"
                title="Edit Blog"
              >
                <FaEdit className="text-yellow-500 text-lg" />
              </button>

              <button
                onClick={() => {
                  setDeleteId(blog._id);
                  setDeleteModal(true);
                }}
                className="bg-white p-2 rounded shadow hover:bg-gray-100 transition"
                title="Delete Blog"
              >
                <FaTrash className="text-red-500 text-lg" />
              </button>
            </div>
            <img
              src={blog.image?.url}
              alt={blog.title}
              className="h-60 w-full object-cover rounded-lg"
            />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {blog.title}
            </h2>

            {/* Excerpt */}
            <p className="text-gray-500 text-sm mt-2 flex-grow">
              {blog.ShortContent?.length > 100
                ? blog.ShortContent.substring(0, 100) + "..."
                : blog.ShortContent}
            </p>

            {/* Keywords */}
            <div className="mt-4 flex flex-wrap gap-2">
              {blog.keywords?.map((keyword, index) => (
                <span
                  key={index}
                  className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded hover:bg-yellow-500 hover:text-white transition cursor-pointer"
                >
                  #{keyword}
                </span>
              ))}
            </div>

            {/* Bottom Meta */}
            <div className="mt-4 pt-4 border-t border-yellow-100 flex flex-wrap items-center justify-around gap-6 text-sm text-gray-600">
              {/* Category */}
              <div className="flex text-[12px] items-center gap-2">
                <FaFolderOpen className="text-yellow-600" />
                <span>{blog.category}</span>
              </div>

              {/* Leave a Comment */}
              <div className="flex text-[12px] items-center gap-2 cursor-pointer hover:text-yellow-600 transition">
                <FaRegCommentDots className="text-yellow-600" />
                <span>Leave a comment</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION – exact same */}
      <div className="flex flex-row justify-center items-center mt-12 gap-4">
        {/* Prev */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-4 py-2 border rounded md:w-auto sm:w-auto disabled:opacity-50"
        >
          Prev
        </button>

        {/* Numbers */}
        <div className="flex justify-center gap-2 flex-wrap">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-2 rounded text-sm ${
                currentPage === i + 1
                  ? "bg-yellow-500 text-white"
                  : "bg-white border"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-4 py-2 border rounded md:w-auto sm:w-auto disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* MODALS */}
      <AddUpdateBlogModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        editId={editId}
        refresh={fetchBlogs}
        categories={categories}
      />

      <DeleteBlogModal
        open={deleteModal}
        onClose={() => setDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default AdminBlogs;