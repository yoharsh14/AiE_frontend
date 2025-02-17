"use client";
function htmlRender({ htmlString }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
export default htmlRender;
