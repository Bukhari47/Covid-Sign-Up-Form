import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainLayout from "./containers/layout/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
