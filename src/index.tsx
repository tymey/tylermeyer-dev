import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import App from "./App";

const container = document.getElementById("root");
const root = container ? createRoot(container) : null;

if (root) {
  root.render(<App />);
} else {
  throw new Error("No element exists with name: root");
}
