import React from "react";

const page = ({ params }) => {
  const { articleId } = params;
  return <div>{articleId}</div>;
};

export default page;
