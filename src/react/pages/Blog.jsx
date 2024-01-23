import React from "react";
const Blog = () => {
  let lines = [];
  for (let i = 0; i < 40; i++) {
    lines.push(<p key={i}>Ligne {i}</p>);
  }

  return (
    <>
      <h1>Blog Articles</h1>
      {lines}
    </>
  );
};

export default Blog;
