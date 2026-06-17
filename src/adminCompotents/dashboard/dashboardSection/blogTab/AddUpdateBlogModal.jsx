// AddUpdateBlogModal.jsx
import { useEffect, useState, useRef  } from "react";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { postBlogs, updateBlogs, getBlogById } from "../../../../api/blogRoute";
import TextEditor from "../common/TextEditor";

const AddUpdateBlogModal = ({
  open,
  onClose,
  editId, // ab id pass kar rahe hain
  refresh,
  categories,
}) => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

const [form, setForm] = useState({
  title: "",
  ShortContent: "",
  subHeading: "",
  author: "",
  date: "",
  category: "",
  keywords: [],
});

const [editorContent, setEditorContent] = useState("");

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [allCategories, setAllCategories] = useState([]);
  const [isNewCategoryMode, setIsNewCategoryMode] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  const [keywordInput, setKeywordInput] = useState("");

  const fileInputRef = useRef(null);

  // Load categories
  useEffect(() => {
    if (categories?.length) {
      setAllCategories(categories.filter((c) => c !== "All"));
    }
  }, [categories]);

  // Fetch single blog for edit mode
  useEffect(() => {
    if (!open) {
      setForm({
        title: "",
        ShortContent: "",
        subHeading: "",
        fullContent: "",
        author: "",
        date: "",
        category: "",
        keywords: [],
      });
      setEditorContent("");
      setImage(null);
      setImagePreview(null);
      setIsNewCategoryMode(false);
      setNewCategory("");
      setKeywordInput("");
      return;
    }

    if (editId) {
      const fetchBlog = async () => {
        setFetching(true);
        try {
          const res = await getBlogById(editId);
          const blog = res.data;

          setForm({
            title: blog.title || "",
            ShortContent: blog.ShortContent || "",
            subHeading: blog.subHeading || "",
            fullContent: blog.fullContent || "",
            author: blog.author || "",
            date: blog.date ? new Date(blog.date).toISOString().slice(0, 10) : "",
            category: blog.category || "",
            keywords: Array.isArray(blog.keywords) ? [...blog.keywords] : [],
          });

          setEditorContent(blog.fullContent || "");

          if (blog.image?.url) {
            setImagePreview(blog.image.url);
          }
          setImage(null);
          setIsNewCategoryMode(false);
          setNewCategory("");
          setKeywordInput("");
        } catch (err) {
          toast.error("Failed to load blog data");
          console.error(err);
        } finally {
          setFetching(false);
        }
      };

      fetchBlog();
    } else {
      setForm({
        title: "",
        ShortContent: "",
        subHeading: "",
        fullContent: "",
        author: "",
        date: "",
        category: "",
        keywords: [],
      });
      setImage(null);
      setImagePreview(null);
      setIsNewCategoryMode(false);
      setNewCategory("");
      setKeywordInput("");
    }
  }, [open, editId]);

  if (!open) return null;

  if (fetching) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <p className="text-lg font-medium">Loading blog data...</p>
        </div>
      </div>
    );
  }

  const addKeyword = () => {
    if (!keywordInput.trim()) return;
    if (form.keywords.length >= 3) {
      toast.error("Maximum 3 keywords allowed");
      return;
    }
    setForm((prev) => ({
      ...prev,
      keywords: [...prev.keywords, keywordInput.trim()],
    }));
    setKeywordInput("");
  };

  const removeKeyword = (index) => {
    setForm((prev) => {
      const updated = [...prev.keywords];
      updated.splice(index, 1);
      return { ...prev, keywords: updated };
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const submit = async () => {
    try {
      setLoading(true);

      let finalCategory = form.category;
      if (isNewCategoryMode && newCategory.trim()) {
        finalCategory = newCategory.trim();
      }

      const fd = new FormData();
      fd.append("title", form.title.trim());
      fd.append("ShortContent", form.ShortContent.trim());
      fd.append("subHeading", form.subHeading.trim());
      fd.append("fullContent", editorContent);
      fd.append("author", form.author.trim());
      fd.append("date", form.date);
      fd.append("category", finalCategory.trim());
      fd.append("keywords", JSON.stringify(form.keywords));

      if (image) fd.append("image", image);

      if (editId) {
        await updateBlogs({ id: editId, data: fd });
        toast.success("Blog updated successfully");
      } else {
        await postBlogs(fd);
        toast.success("Blog created successfully");
      }

      refresh();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl custom-scrollbar w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-5 md:p-6">
          <h2 className="text-2xl font-bold mb-5 text-center">
            {editId ? "Update Blog" : "Add New Blog"}
          </h2>

          {/* Image Upload + Preview - Sabse Upar */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>

            {imagePreview && (
              <div className="mb-3">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full max-h-48 object-cover rounded-lg shadow-sm"
                />
              </div>
            )}

            <div
  onClick={() => fileInputRef.current.click()}
  className="border-2 border-dashed border-yellow-400 rounded-lg p-6 text-center cursor-pointer hover:bg-yellow-50 transition"
>
  <p className="text-sm text-gray-600 mb-2">
    {image ? image.name : "Click or drag image here (max 5MB)"}
  </p>

  <input
    ref={fileInputRef}
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="hidden"
  />
</div>
          </div>

          {/* Title */}
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="Blog Title"
            className="w-full  p-2.5 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
          />

          {/* Short Content */}
          <textarea
            value={form.ShortContent}
            onChange={(e) => setForm({ ...form, ShortContent: e.target.value })}
            placeholder="Short description (meta description ke liye)"
            className="w-full p-2.5 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 h-20 text-base resize-none"
          />

          {/* Sub Heading */}
          <input
            type="text"
            value={form.subHeading}
            onChange={(e) => setForm({ ...form, subHeading: e.target.value })}
            placeholder="Sub Heading / Secondary Title"
            className="w-full p-2.5 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
          />

          {/* Author + Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              value={form.author}
              onChange={(e) => setForm({ ...form, author: e.target.value })}
              placeholder="Author Name"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
            />
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            {!isNewCategoryMode ? (
              <>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full p-2.5 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
                >
                  <option value="">Select Category</option>
                  {allCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => {
                    setIsNewCategoryMode(true);
                    setForm({ ...form, category: "" });
                  }}
                  className="text-yellow-600 hover:text-yellow-800 text-sm font-medium"
                >
                  + Add New Category
                </button>
              </>
            ) : (
              <div>
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="New Category Name"
                  className="w-full p-2.5 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
                />
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (!newCategory.trim()) return toast.error("Category name likho");
                      setForm({ ...form, category: newCategory.trim() });
                      setIsNewCategoryMode(false);
                    }}
                    className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 text-sm"
                  >
                    Use This
                  </button>
                  <button
                    onClick={() => setIsNewCategoryMode(false)}
                    className="text-gray-600 hover:text-gray-800 text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Keywords */}
          <div className="mb-4">
            <div className="flex gap-3 mb-2">
              <input
                type="text"
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                placeholder="Add keyword (max 3)"
                className="flex-1 p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base"
              />
              <button
                onClick={addKeyword}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 text-sm"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {form.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                >
                  #{kw}
                  <button
                    onClick={() => removeKeyword(idx)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    <FaTimes size={14} />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Full Content - Last mein */}
         <div className="mb-6">
  <label className="block text-gray-700 font-medium mb-2">
    Full Blog Content
  </label>
  <TextEditor
    key={`editor-${editId || 'add'}-${open ? 'open' : 'closed'} `} // unique key har baar
    value={editorContent}
  onChange={(html) => setEditorContent(html)}
    placeholder="Start writing your full blog content here..."
    className="blog-content"
  />
</div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-100 text-sm"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              onClick={submit}
              disabled={loading}
              className={`px-8 py-2.5 rounded-lg text-white font-medium text-sm ${
                loading ? "bg-yellow-300 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-600"
              }`}
            >
              {loading ? "Saving..." : editId ? "Update Blog" : "Publish Blog"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUpdateBlogModal;