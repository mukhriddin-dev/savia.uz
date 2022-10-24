import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./pages/Modal";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () =>
{
  return (
    <>
      <Navbar />
      <Modal/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
