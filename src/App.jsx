import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
// react-toastify
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from "react-router-dom"
import "./App.css"
// journal pages
import Dashboard from "./Pages/Dashboard";
import Trading_Journal from "./Pages/Trading_Journal";
import Journal_Create from "./Components/Journal/Journal_Create";
import Update from "./Components/Journal/Update";
import Single from "./Components/Journal/Single";

import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Money_Management from "./Pages/Money_Management";
import Candlestick_Patterns from "./Pages/Candlestick_Patterns";
import Chart_Patterns from "./Pages/Chart_Patterns";
import Features from "./Pages/Features";

import Currency_Pairs from "./Pages/Currency_Pairs";
import Currency_Pair_Create from "./Components/Currency_Pair/Currency_Pair_Create";
import Currency_Pair_Update from "./Components/Currency_Pair/Currency_Pair_Update";
import Currency_Pair_View from "./Components/Currency_Pair/Currency_Pair_View";


const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trading-journal" element={<Trading_Journal />} />
        <Route path="/trading-journal/create" element={<Journal_Create />} />
        <Route path="/trading-journal/update/:id" element={<Update />} />
        <Route path="/trading-journal/view/:id" element={<Single />} />
        <Route path="/currency-pairs" element={<Currency_Pairs />} />
        <Route path="/currency-pairs/create" element={<Currency_Pair_Create />} />
        <Route path="/currency-pairs/update/:id" element={<Currency_Pair_Update />} />
        <Route path="/currency-pairs/view/:id" element={<Currency_Pair_View />} />
        <Route path="/money-management" element={<Money_Management />} />
        <Route path="/candlestick-patterns" element={<Candlestick_Patterns />} />
        <Route path="/chart-patterns" element={<Chart_Patterns />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/features" element={<Features />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App