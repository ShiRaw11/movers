import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login";

import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";
import CompanyDetails from "./pages/CompanyDetails";
import BankDetails from "./pages/BankDetails";
import ManagementDetails from "./pages/ManagementDetails";
import CompanyDashboard from "./pages/CompanyDashboard";
import UserDashboard from "./pages/UserDashboard";
import CompanySignUp from "./pages/CompanySignUp";
import PhoneVerification from "./pages/PhoneVerification";
import EmailVerification from "./pages/EmailVerification";

import CompanyLogin from "./pages/CompanyLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/phoneVerification" element={<PhoneVerification />} />
      <Route path="/emailVerification" element={<EmailVerification />} />
      <Route path="/CompanySignUp" element={<CompanySignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CompanyLogin" element={<CompanyLogin />} />
      <Route path="/CompanyDetails" element={<CompanyDetails />} />
      <Route path="/BankDetails" element={<BankDetails />} />
      <Route path="/ManagementDetails" element={<ManagementDetails />} />
      <Route path="/CompanyDashboard" element={<CompanyDashboard />} />
      <Route path="/UserDashboard" element={<UserDashboard />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
