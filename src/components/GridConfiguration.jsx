import React, { useState } from "react";
import Preview from "./Preview";
import NormalCode from "./NormalCode";
import CustomizeCode from "./CustomizeCode";

const GridConfiguration = () => {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(4);
  const [responsive, setResponsive] = useState("all");
  const [selected, setSelected] = useState([]);
  const [previewActiveTab, setPreviewActiveTab] = useState("normal");

  return (
    <div className="min-h-screen flex items-center justify-center gap-6 my-7">
      <div className="lg:w-[900px] w-[300px] flex flex-col gap-6">
        <div className="dark:bg-gray-900 bg-white shadow rounded-lg px-5 py-6">
          <div>
            <div className="flex items-center gap-5">
              <div className="w-full">
                <h3 className="text-gray-600 font-semibold mb-2">Columns</h3>
                <input
                  className="w-full"
                  type="range"
                  min={1}
                  max={12}
                  step={1}
                  value={columns}
                  onChange={(e) => setColumns(e.target.value)}
                />
                <div className="flex items-center justify-between text-gray-500">
                  <span>1</span>
                  <span>{columns}</span>
                  <span>12</span>
                </div>
              </div>
              <div className="w-full">
                <h3 className="text-gray-600 font-semibold mb-2">Rows</h3>
                <input
                  className="w-full"
                  type="range"
                  min={1}
                  max={8}
                  step={1}
                  value={rows}
                  onChange={(e) => setRows(e.target.value)}
                />
                <div className="flex items-center justify-between text-gray-500">
                  <span>1</span>
                  <span>{rows}</span>
                  <span>8</span>
                </div>
              </div>
            </div>
            <div>
              <div className="w-1/2">
                <h3 className="text-gray-600 font-semibold mb-2">Gap</h3>
                <input
                  className="w-full"
                  type="range"
                  min={0}
                  max={8}
                  step={1}
                  value={gap}
                  onChange={(e) => setGap(e.target.value)}
                />
                <div className="flex items-center justify-between text-gray-500">
                  <span>0</span>
                  <span>{gap}</span>
                  <span>8</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-gray-600 font-semibold mb-2 mt-6">
                Responsive Behavior
              </h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setResponsive("all")}
                  className={`px-3 py-1 rounded-md font-medium cursor-pointer ${
                    responsive === "all"
                      ? "text-blue-700 bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  All Screens
                </button>
                <button
                  onClick={() => setResponsive("sm")}
                  className={`px-3 py-1 rounded-md font-medium cursor-pointer ${
                    responsive === "sm"
                      ? "text-blue-700 bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  SM (640px+)
                </button>
                <button
                  onClick={() => setResponsive("md")}
                  className={`px-3 py-1 rounded-md font-medium cursor-pointer ${
                    responsive === "md"
                      ? "text-blue-700 bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  MD (768px+)
                </button>
                <button
                  onClick={() => setResponsive("lg")}
                  className={`px-3 py-1 rounded-md font-medium cursor-pointer ${
                    responsive === "lg"
                      ? "text-blue-700 bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  LG (1024px+)
                </button>
                <button
                  onClick={() => setResponsive("xl")}
                  className={`px-3 py-1 rounded-md font-medium cursor-pointer ${
                    responsive === "xl"
                      ? "text-blue-700 bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  XL (1280px+)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview */}
        <Preview
          columns={columns}
          rows={rows}
          gap={gap}
          selected={selected}
          setSelected={setSelected}
          previewActiveTab={previewActiveTab}
          setPreviewActiveTab={setPreviewActiveTab}
        />

        {previewActiveTab === "normal" && (
          <NormalCode
            columns={columns}
            rows={rows}
            gap={gap}
            responsive={responsive}
          />
        )}

        {previewActiveTab === "customize" && (
          <CustomizeCode
            columns={columns}
            rows={rows}
            gap={gap}
            responsive={responsive}
            selected={selected}
          />
        )}
      </div>
    </div>
  );
};

export default GridConfiguration;
