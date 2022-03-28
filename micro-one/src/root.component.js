import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TestOne } from "./components/TestOne";

export default function Root(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/one" component={TestOne} />
        </Routes>
      </BrowserRouter>
      <div>Showing micro-one micronfrontend</div>
    </>
  );
}