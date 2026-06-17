import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUser,
  FaFolderOpen,
  FaRegCommentDots,
} from "react-icons/fa";
import heroImg from "../../assets/banner.jpg";
import { getCardsBlogsData } from "../../api/blogRoute"; // 👈 apna path check kar lena
import { updateSEO } from "../../utils/seo";
import { getSeoMetaByPage } from "../../api/seoRoutes";

const BlogPage = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

useEffect(() => {

  const loadSeo = async () => {

    try {

      const res = await getSeoMetaByPage("blogs");

      if (res.success) {
        updateSEO(res.data);
      }

    } catch (error) {

      console.error("SEO Error:", error);

    }

  };

  loadSeo();

}, []);




  const blogsPerPage = 9;

  // 🔥 API CALL
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getCardsBlogsData();

        if (res.success) {
          setBlogsData(res.data);

          // Backend se categories aa rahi hain
          setCategories(["All", ...res.categories]);
        }
      } catch (error) {
        console.error("Blog fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // 🔥 Latest First Sorting
  const sortedBlogs = useMemo(() => {
    return [...blogsData].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, [blogsData]);

  // 🔥 Category Filter
  const filteredBlogs =
    selectedCategory === "All"
      ? sortedBlogs
      : sortedBlogs.filter((b) => b.category === selectedCategory);

  // 🔥 Pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading Blogs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <div
        className="relative bg-cover bg-center bg-no-repeat h-100 flex items-end text-white py-20 px-6 md:px-20"
        style={{ backgroundImage: `url('https://img.magnific.com/premium-photo/top-view-with-copy-space-medical-equipment-stethoscope-syringes-pills-scissors-edge_339391-50680.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-6xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Explore Our Latest <span className="text-yellow-400">Blogs</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
            Discover premium quality articles and expert Centered Care Wellness insights.
          </p>
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="py-16 px-6 md:px-16">

        {/* Category Filter */}
        <div className="mb-10 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-1 text-sm rounded border transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-yellow-500 text-white border-yellow-500"
                  : "bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {currentBlogs.map((blog) => (
            <Link
              to={`/blogs/${blog._id}`}
              key={blog._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 flex flex-col border border-yellow-100"
            >
              {/* Meta */}
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-yellow-600" />
                  <span>{formatDate(blog.date)}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FaUser className="text-yellow-600" />
                  <span>{blog.author}</span>
                </div>
              </div>

              {/* Image */}
              <img
                src={blog.image?.url}
                alt={blog.title}
                className="h-60 w-full object-cover rounded-lg"
                loading="lazy"
              />

              {/* Title */}
              <h2 className="text-xl font-semibold mt-4 text-gray-800">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-500 text-sm mt-2 flex-grow">
                {blog.ShortContent}
              </p>

              {/* Keywords */}
              <div className="mt-4 flex flex-wrap gap-2">
                {blog.keywords?.map((keyword, index) => (
                  <span
                    key={index}
                    className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-4 pt-4 border-t border-yellow-100 flex justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <FaFolderOpen className="text-yellow-600" />
                  <span>{blog.category}</span>
                </div>

                <div className="flex items-center gap-2 cursor-pointer hover:text-yellow-600 transition">
                  <FaRegCommentDots className="text-yellow-600" />
                  <span>Leave a comment</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="font-medium">
            {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;