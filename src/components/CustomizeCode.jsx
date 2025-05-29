import React, { useState } from "react";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const responsivePrefix = {
  all: "",
  sm: "sm:",
  md: "md:",
  lg: "lg:",
  xl: "xl:",
};

const responsiveMedia = {
  all: null,
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
};

const CustomizeCode = ({ columns, rows, gap, responsive, selected }) => {
  const [activeTab, setActiveTab] = useState("tailwind");
  const [copy, setCopy] = useState("");
  const totalCells = columns * rows;

  const prefix = responsivePrefix[responsive] || "";

  const tailwindCode =
    `<div class="grid ${prefix}grid-cols-${columns} ${prefix}gap-${gap}">\n` +
    [...Array(totalCells)]
      .map((_, i) => {
        if (!selected.includes(i)) return "";
        const col = (i % columns) + 1;
        const row = Math.floor(i / columns) + 1;
        return `   <div class="bg-blue-200 p-4 col-start-${col} row-start-${row}">${
          selected.indexOf(i) + 1
        }</div>`;
      })
      .filter(Boolean)
      .join("\n") +
    `\n</div>`;

  const htmlCode =
    `<div class="grid-container">\n` +
    selected
      .map((_, i) => {
        return `   <div class="grid-item div${i + 1}">${i + 1}</div>`;
      })
      .join("\n") +
    `\n</div>`;

  const baseGridItem = `\n.grid-item {\n  background-color: #dbeafe;\n  border: 1px solid #8ec5ff;\n  border-radius: 0.375rem;\n  padding: 1rem;\n}\n`;

  const selectedDivStyles = selected
    .map((i, idx) => {
      const col = (i % columns) + 1;
      const row = Math.floor(i / columns) + 1;
      return `.div${
        idx + 1
      } {\n  grid-column-start: ${col};\n  grid-row-start: ${row}\n}\n`;
    })
    .join("\n");

  let cssCode = "";

  if (responsive === "all") {
    cssCode = `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(${columns}, 1fr);\n  gap: ${
      gap * 4
    }px;\n}
    ${selected.length > 0 ? `${baseGridItem} \n${selectedDivStyles}` : ""}`;
  } else {
    cssCode = `.grid-container {\n  display: grid;\n  grid-template-columns: repeat(${columns}, 1fr);\n  gap: ${
      gap * 4
    }px;\n}\n\n${
      responsiveMedia[responsive]
    } {\n  .grid-container {\n    grid-template-columns: repeat(${columns}, 1fr);\n    gap: ${
      gap * 4
    }px;\n  }\n}
    ${selected.length > 0 ? `${baseGridItem} \n${selectedDivStyles}` : ""}`;
  }

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopy(type);
      setTimeout(() => setCopy(""), 2000);
    });
  };

  return (
    <div className="dark:bg-gray-900 bg-white shadow rounded-lg px-5 py-6 lg:w-[900px]">
      <div className="border-b dark:border-gray-800 border-gray-200 flex items-center gap-5 mb-4">
        <button
          onClick={() => setActiveTab("tailwind")}
          className={`dark:text-white text-lg text-gray-700 font-semibold dark:hover:bg-gray-800 hover:bg-gray-200 px-4 py-3 cursor-pointer ${
            activeTab === "tailwind"
              ? "border-b-2 border-blue-600 text-blue-600 dark:hover:bg-transparent hover:bg-transparent"
              : ""
          }`}
        >
          Tailwind CSS
        </button>
        <button
          onClick={() => setActiveTab("html")}
          className={`dark:text-white text-lg text-gray-700 font-semibold dark:hover:bg-gray-800 hover:bg-gray-200 px-4 py-3 cursor-pointer ${
            activeTab === "html"
              ? "border-b-2 border-blue-600 text-blue-600 dark:hover:bg-transparent hover:bg-transparent"
              : ""
          }`}
        >
          Regular CSS
        </button>
      </div>

      {activeTab === "tailwind" && (
        <>
          <div className="mb-2">
            <div className="font-medium flex items-center justify-between">
              <h3 className="text-lg text-gray-600">
                HTML with Tailwind Classes
              </h3>
              <button
                onClick={() => handleCopy(tailwindCode, "tailwind")}
                className="bg-blue-500 text-white px-3 rounded-md py-1 flex gap-1 items-center hover:bg-blue-600 cursor-pointer"
              >
                <Copy size={15} />
                {copy === "tailwind" ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <SyntaxHighlighter
            language="jsx"
            style={oneDark}
            wrapLines
            showLineNumbers
          >
            {tailwindCode}
          </SyntaxHighlighter>
        </>
      )}

      {activeTab === "html" && (
        <>
          <div>
            <div className="mb-2">
              <div className="font-medium flex items-center justify-between">
                <h3 className="text-lg text-gray-600">HTML</h3>
                <button
                  onClick={() => handleCopy(htmlCode, "html")}
                  className="bg-blue-500 text-white px-3 rounded-md py-1 flex gap-1 items-center hover:bg-blue-600 cursor-pointer"
                >
                  <Copy size={15} />
                  {copy === "html" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <SyntaxHighlighter
              language="html"
              style={oneDark}
              wrapLines
              showLineNumbers
            >
              {htmlCode}
            </SyntaxHighlighter>
          </div>

          <div className="mt-5">
            <div className="mb-2">
              <div className="font-medium flex items-center justify-between">
                <h3 className="text-lg text-gray-600">CSS</h3>
                <button
                  onClick={() => handleCopy(cssCode, "css")}
                  className="bg-blue-500 text-white px-3 rounded-md py-1 flex gap-1 items-center hover:bg-blue-600 cursor-pointer"
                >
                  <Copy size={15} />
                  {copy === "css" ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <SyntaxHighlighter
              language="jsx"
              style={oneDark}
              wrapLines
              showLineNumbers
            >
              {cssCode}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomizeCode;
