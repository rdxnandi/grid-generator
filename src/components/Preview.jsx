import PreviewButtons from "./PreviewButtons";

const Preview = ({
  columns,
  rows,
  gap,
  selected,
  setSelected,
  previewActiveTab,
  setPreviewActiveTab,
}) => {
  const items = Array.from({ length: columns * rows }, (_, i) => i + 1);

  const handleSelect = (idx) => {
    setSelected(
      (prev) =>
        prev.includes(idx)
          ? prev.filter((i) => i !== idx) // Deselect if already selected
          : [...prev, idx] // Select if not selected
    );
  };

  return (
    <>
      <PreviewButtons
        previewActiveTab={previewActiveTab}
        setPreviewActiveTab={setPreviewActiveTab}
      />

      {previewActiveTab === "normal" && (
        <div className="dark:bg-gray-900 bg-white shadow rounded-lg px-5 py-6 lg:w-[900px] w-[300px]">
          <h1 className="font-semibold text-xl mb-5 dark:text-white">
            Normal Preview
          </h1>
          <div className="overflow-x-auto">
            <div
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                gap: `${gap * 4}px`, // Tailwind gap-1 = 0.25rem = 4px
              }}
              className="border dark:border-gray-800 border-gray-200 p-4 rounded-md grid min-w-[400px]"
            >
              {items.map((item) => (
                <button
                  key={item}
                  className="bg-blue-200 border border-blue-400 rounded-md p-4 text-center text-blue-700 text-lg cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {previewActiveTab === "customize" && (
        <div className="dark:bg-gray-900 bg-white shadow rounded-lg px-5 py-6 lg:w-[900px] w-[300px]">
          <h1 className="font-semibold text-xl mb-5 dark:text-white">
            Custom Preview
          </h1>
          <div className="overflow-x-auto">
            <div
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
                gap: `${gap * 4}px`, // Tailwind gap-1 = 0.25rem = 4px
              }}
              className="border dark:border-gray-800 border-gray-200 p-4 rounded-md grid min-w-[400px]"
            >
              {items.map((item, idx) => {
                const selectedIndex = selected.indexOf(idx);

                return (
                  <button
                    key={item}
                    onClick={() => handleSelect(idx)}
                    className={`bg-blue-200 border border-blue-400 rounded-md p-4 text-center text-blue-700 text-lg cursor-pointer ${
                      selectedIndex !== -1 ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    {selectedIndex !== -1 ? selectedIndex + 1 : "+"}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => setSelected([])}
              className="dark:text-white dark:border-gray-100 text-gray-600 border border-gray-500 rounded-md px-4 py-1 mt-5 cursor-pointer"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;
