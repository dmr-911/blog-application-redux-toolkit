import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="py-4 border-b">
        {/* <Home /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blogs/:blogId" element={<Blog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
