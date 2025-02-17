"use client";
import React, { useState, useEffect } from "react";
import { useQuill } from "react-quilljs";
// or const { useQuill } = require('react-quilljs');

import "quill/dist/quill.snow.css";
const page = () => {
  const { quill, quillRef } = useQuill({ placeholder: "123" });
  const [formData, setFormData] = useState({
    contentType: "",
    content: {
      heading: "",
      body: "",
    },
  });

  useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setFormData({
          ...formData,
          content: {
            ...formData.content,
            body: quillRef.current.firstChild.innerHTML,
          },
        });
      });
    }
  }, [quill]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Page added successfully!");
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-10 flex flex-col justify-center gap-10 items-center"
    >
      <div className="flex flex-col items-start ">
        <label htmlFor="input">Content Type</label>
        <input
          type="text"
          placeholder="Content Type"
          value={formData.contentType}
          onChange={(e) =>
            setFormData({ ...formData, contentType: e.target.value })
          }
          required
          className="input border-2 border-slate-300 p-2 rounded-md"
        />
      </div>
      <div className="flex flex-col items-start py-5">
        <label htmlFor="input">Heading</label>
        <textarea
          placeholder="Heading"
          value={formData.content.heading}
          onChange={(e) =>
            setFormData({
              ...formData,
              content: { ...formData.content, heading: e.target.value },
            })
          }
          required
          className="textarea border-2 border-slate-300 p-2 rounded-md"
        />
      </div>
      <div className="flex gap-5">
        <label htmlFor="textarea">Body</label>
        <div>
          <div ref={quillRef} required />
        </div>
      </div>
      {/* Add fields for links and tags */}
      <button type="submit" className="btn">
        Submit
      </button>
    </form>
  );
};

export default page;
