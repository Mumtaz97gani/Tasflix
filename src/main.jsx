import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "./assets/Components/SignUp";

import MovieDetail from "./assets/Components/MoviesDetail";
import Home from "./assets/Components/Home";
import Login from "./assets/Components/Login";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
