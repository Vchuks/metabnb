import React from "react";

const Content = ({ className, children }) => {
  return (
    <div className={className}>
      <p>{children}</p>
    </div>
  );
};

export default Content;
