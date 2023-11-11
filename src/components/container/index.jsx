import React from "react";

const Container = ({ children, sectionClass, mainClass }) => {
  return (
    <section className={`container ${sectionClass}`}>
      <div className={`mainContent ${mainClass}`}>{children}</div>
    </section>
  );
};

export default Container;
