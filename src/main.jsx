// src/index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./assets/Components/SignUp";
import MovieDetail from "./assets/Components/MoviesDetail";
import Home from "./assets/Components/Home";
import Login from "./assets/Components/Login";
import { AuthProvider } from "./assets/Context/AuthContext"; // Import the AuthProvider
import ProtectedRoute from "./assets/Components/ProtectedRoute"; // Import ProtectedRoute

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/movie/:id"
            element={<ProtectedRoute element={<MovieDetail />} />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
