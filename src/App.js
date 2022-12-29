import React, { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [uploadedImg, setUploadedImg] = useState(null);

  // creates an object url for the image
  const handlePaste = (e) => {
    e.preventDefault();
    // get the items
    const items = e.clipboardData.items;
    // find a first image and set it
    for (let item of items) {
      console.log(item.type);
      if (item.type.startsWith("image/")) {
        console.log("image data", item);
        let imgBlob = item.getAsFile();
        console.log("image data", imgBlob);
        let imgUrl = URL.createObjectURL(imgBlob);
        console.log("img url", imgUrl);
        setUploadedImg(imgUrl);
        break;
      }
    }
  };

  // a different way to do it using drag and drop and file reader
  // first, we need to prevent the drag behavior from opening the file so the drop event can take over
  const blockDragOver = (e) => e.preventDefault();
  const blockDrop = (e) => e.preventDefault();
  // on drop, use file reader to set uploaded image
  const handleDrop = (e) => {
    e.preventDefault();
    const items = e.dataTransfer.files;
    for (let item of items) {
      if (item.type.startsWith("image/")) {
        console.log("image data", item);
        // create a reader
        const reader = new FileReader();
        // tell it to set image after loading stuff
        reader.onloadend = () => {
          console.log("img data url", reader.result);
          setUploadedImg(reader.result);
        };
        // tell reader to load item as url
        reader.readAsDataURL(item);
        break;
      }
    }
  };

  const renderPlaceholder = () => {
    return (
      <div className="relative" onDrop={handleDrop} onDragOver={blockDragOver}>
        <div className="absolute w-full h-full flex justify-center flex-wrap content-center">
          <p>Drag and Drop Image Here</p>
        </div>
        <svg
          className="h-64 w-full rounded border-2 border-dashed border-gray-300 bg-white text-gray-200"
          preserveAspectRatio="none"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          <path
            vectorEffect="non-scaling-stroke"
            strokeWidth="2"
            d="M0 0l200 200M0 200L200 0"
          ></path>
        </svg>
      </div>
    );
  };

  const renderImg = () => {
    return (
      <div className="relative">
        <img src={uploadedImg} alt="Uploaded Image" />
      </div>
    );
  };

  return (
    <div className="App h-screen" onDragOver={blockDragOver} onDrop={blockDrop}>
      {/* container */}
      <div className="h-full mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col justify-center">
        {/* card */}
        <div
          className="overflow-hidden rounded-lg bg-white shadow px-4 py-5 sm:p-6"
          onPaste={handlePaste}
        >
          {/* card content */}
          {uploadedImg ? renderImg() : renderPlaceholder()}
        </div>
      </div>
    </div>
  );
}

export default App;
