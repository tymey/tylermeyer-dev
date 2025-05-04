import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Hello from "./Hello";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
