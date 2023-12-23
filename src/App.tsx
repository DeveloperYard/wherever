import React, { useEffect } from "react";
import Layout from "./components/layout/Layout";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import TripPage from "./components/trip/TripPage";
import Home from "./Home";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/trip-search" element={<TripPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
