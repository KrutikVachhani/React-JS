import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Bus from "./Bus";
import BusDetail from "./BusDetail";
import AddBus from "./AddBus";
import EditBus from "./EditBus";
import Home from "./home";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="Bus" element={<Bus />}></Route>
          <Route path="/Bus/:id" element={<BusDetail />}></Route>
          <Route path="/Bus/add" element={<AddBus />}></Route>
          <Route path="/Bus/edit/:id" element={<EditBus />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
