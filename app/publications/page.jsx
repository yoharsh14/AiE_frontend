"use client";
import React from "react";
import Card from "./components/Card";

const page = () => {
  const publications = [
    {
      title: "From the pages of Mook Nayak",
      summary:
        "The following is the first editorial (translated from Marathi) written by Babasaheb Ambedkar for the very first issue of Mook Nayak published in January 1920! This translation was first published in July 2010 by",
      imgUrl: "images/slideImages/img1.jpg",
    },

    {
      title: "From the pages of Mook Nayak",
      summary:
        "The following is the first editorial (translated from Marathi) written by Babasaheb Ambedkar for the very first issue of Mook Nayak published in January 1920! This translation was first published in July 2010 by",
      imgUrl: "images/slideImages/img1.jpg",
    },

    {
      title: "From the pages of Mook Nayak",
      summary:
        "The following is the first editorial (translated from Marathi) written by Babasaheb Ambedkar for the very first issue of Mook Nayak published in January 1920! This translation was first published in July 2010 by",
      imgUrl: "images/slideImages/img1.jpg",
    },
  ];
  return (
    <div className="my-20">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight text-center">
        Publications
      </h1>
      <div className="flex p-10 justify-between">
        {publications.map((pub, key) => (
          <Card key={key} pub={pub} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default page;
