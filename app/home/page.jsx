"use client";
import React, { useEffect, useState } from "react";
import { parseFromString } from "dom-parser";
import parse from "html-react-parser";

function MyComponent({ htmlString }) {
  return <div>{parse(htmlString)}</div>;
}

const page = () => {
  const [data, setData] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/content");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const { status, data, message } = await response.json();

        if (status === "success") {
          const arr = data.map((item) => ({
            id: item.id,
            content: item.body.content,
          }));

          setData(arr);
          console.log(arr);
        } else {
          console.warn(message);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {data &&
        isMounted &&
        data.map((item) => (
          <div key={item.id}>
            <MyComponent htmlString={item.content.body} />
          </div>
        ))}
    </div>
  );
};

export default page;
