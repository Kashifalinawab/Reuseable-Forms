import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../components/Form";
import HomePage from "../pages/HomePage";
import useStateContext from "../hooks/useStateContext";

function RoutingPage(props) {
  const { formData } = useStateContext();
  // console.log("route");
  // console.log(formData[0]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={"/detialspage/:id"} element={<Form data={formData} />} />
        <Route path={"/detialspage"} element={<Form/>} />
      </Routes>
    </div>
  );
}

export default RoutingPage;
