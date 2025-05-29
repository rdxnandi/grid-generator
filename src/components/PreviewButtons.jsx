const PreviewButtons = ({ previewActiveTab, setPreviewActiveTab }) => {
  return (
    <div className="dark:bg-gray-900 bg-white shadow p-5 pb-0 rounded-md">
      <div className="flex items-center gap-5">
        <button
          onClick={() => setPreviewActiveTab("normal")}
          className={`dark:text-white text-lg text-gray-700 font-semibold dark:hover:bg-gray-800 hover:bg-gray-200 px-4 py-3 cursor-pointer ${
            previewActiveTab === "normal"
              ? "border-b-2 border-blue-600 text-blue-600 dark:hover:bg-transparent hover:bg-transparent"
              : ""
          }`}
        >
          Normal Grid
        </button>
        <button
          onClick={() => setPreviewActiveTab("customize")}
          className={`dark:text-white text-lg text-gray-700 font-semibold dark:hover:bg-gray-800 hover:bg-gray-200 px-4 py-3 cursor-pointer ${
            previewActiveTab === "customize"
              ? "border-b-2 border-blue-600 text-blue-600 dark:hover:bg-transparent hover:bg-transparent"
              : ""
          }`}
        >
          Customize Grid
        </button>
      </div>
    </div>
  );
};

export default PreviewButtons;
