import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <p>Page not found :( </p>
      <p>
        Please, go <Link to="/">Home</Link>
      </p>
    </div>
  );
};

export default Error;
