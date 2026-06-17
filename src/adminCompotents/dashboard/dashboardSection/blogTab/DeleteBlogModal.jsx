const DeleteBlogModal = ({ open,onClose,onConfirm }) => {

  if(!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">

      <div className="bg-white p-6 rounded w-[350px] text-center">

        <h3 className="text-lg font-bold mb-3">
          Confirm Delete
        </h3>

        <p className="text-gray-500 mb-4">
          Are you sure you want to delete this blog?
        </p>

        <div className="flex justify-center gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>

      </div>

    </div>
  );
};

export default DeleteBlogModal;