import React from "react";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div>
      <h2>404 Error - Page Not Found</h2>
      <Link to="/">Return to Home Page</Link>
    </div>
  );
}
