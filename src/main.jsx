import React from "react";
import { createRoot } from "react-dom/client";
import FaeCounter from "./FaeCounter3.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FaeCounter />
  </React.StrictMode>
);
