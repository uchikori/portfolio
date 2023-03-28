import * as React from "react";
export const Main = (props) => {
  const { content } = props;

  return (
    <main className="flex-item nine-column bg-white">
      <div
        className="singleContents"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </main>
  );
};
