import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout.jsx";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
