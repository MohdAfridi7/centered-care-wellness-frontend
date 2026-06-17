import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaCalendarAlt, FaUser, FaFolderOpen } from "react-icons/fa";
import { getBlogById, getCardsBlogsData } from "../../api/blogRoute";
import "quill/dist/quill.snow.css";
// import setSeo from "../utils/setSeo";
// import { getSeoMeta } from "../api/seoRoutes";


const BlogDetails = () => {

  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(id);

        if (res.success) {
          const currentBlog = res.data;
          setBlog(currentBlog);

          const allBlogs = await getCardsBlogsData();

          if (allBlogs.success) {
            const blogs = allBlogs.data;

            // 🔥 Current blog remove
            const others = blogs.filter(
              (b) => b._id.toString() !== currentBlog._id.toString()
            );

            // 🔥 Recent Posts
            setRecentPosts(others.slice(0, 5));

            // 🔥 Related Posts (same category)
            const related = others
              .filter((b) => b.category === currentBlog.category)
              .slice(0, 3);

            setRelatedPosts(related);
          }
        }
      } catch (error) {
        console.error("Blog detail error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

//   useEffect(() => {

//   const applySeo = async () => {

//     try {

//       const res = await getSeoMeta();

//       const seo = res.data.find(item => item.page === "blog-detail");

//       if (seo && blog) {

//         setSeo({
//           title: `${blog.title} | ${seo.title}`,
//           description: seo.description,
//           keywords: seo.keywords,
//           ogTitle: blog.title,
//           ogDescription: seo.ogDescription,
//           ogUrl: window.location.href
//         });

//       }

//     } catch (err) {
//       console.log("SEO error", err);
//     }

//   };

//   applySeo();

// }, [blog]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const cleanContent = (html) => {
  return html
    .replace(/<p><br><\/p>/g, "") // empty p remove
    .replace(/(<br\s*\/?>\s*)+$/g, "") // ending br remove
    .trim();
};

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading Blog...
      </div>
    );
  }

  if (!blog) {
    return <h2 className="text-center mt-20">Blog Not Found</h2>;
  }

  return (
    <div className="bg-white min-h-screen py-12 mt-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{blog.title}</h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-gray-500 mb-6 text-sm">
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
            className="w-full md:h-[400px] object-cover rounded-lg mb-6"
          />

          {/* Subheading */}
          <h2 className="text-xl font-semibold mb-4">{blog.subHeading}</h2>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.keywords?.map((keyword, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded"
              >
                #{keyword}
              </span>
            ))}
          </div>

          {/* Content */}
<div
  className="prose max-w-none blog-content"
  dangerouslySetInnerHTML={{ __html: cleanContent(blog.fullContent) }}
/>

          {/* 🔥 RELATED POSTS */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-8 border-b-2 border-yellow-500 pb-2">
                Related Posts
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <Link
                    key={post._id}
                    to={`/blogs/${post._id}`}
                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4"
                  >
                    <img
                      src={post.image?.url}
                      alt={post.title}
                      className="h-40 w-full object-cover rounded-lg"
                    />

                    <h3 className="text-lg font-semibold mt-4 hover:text-yellow-600 transition">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm mt-2">
                      {post.ShortContent?.split(" ").slice(0, 10).join(" ")}...
                    </p>

                    <div className="flex text-sm mt-2 items-center gap-2">
                      <FaFolderOpen className="text-yellow-600" />
                      <span>{post.category}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-[110px]">
            <h2 className="text-2xl font-semibold mb-6 border-b-2 border-yellow-500 pb-2">
              Recent Posts
            </h2>

            <div>
              {recentPosts.map((post) => (
                <Link
                  key={post._id}
                  to={`/blogs/${post._id}`}
                  className="flex gap-4 group border-b border-gray-200 py-3"
                >
                  <img
                    src={post.image?.url}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <h3 className="text-sm font-medium text-black group-hover:text-yellow-600 transition">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetails;