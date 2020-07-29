import React from "react";
import { Link } from "react-router-dom";

const MyLink1 = () => {
  return (
    <div className="app" style={{ padding: "50px" }}>
      <Link to="/">Home</Link>
      <h1>My Link 1</h1>
    </div>
  );
};

export default MyLink1;
