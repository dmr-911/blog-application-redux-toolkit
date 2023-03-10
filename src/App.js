import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="py-4 border-b">
        {/* <Home /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts/:postId" element={<Post />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
