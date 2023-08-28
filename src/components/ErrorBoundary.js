// src/components/ErrorBoundary.js
import React, { useState } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, info) => {
    console.error(error, info);
    setHasError(true);
  };

  if (hasError) {
    return <h2>Something went wrong.</h2>;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
}

export default ErrorBoundary;
