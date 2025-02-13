import { useState } from "react";
import Header from "./components/Header/Header"
import Welcome from "./pages/Welcome/Welcome"
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Forgot from "./pages/Forgot/Forgot";
import Verify from "./pages/Verify/Verify";
import PasswordReset from "./pages/PasswordReset/PasswordReset";
import Protocols from "./pages/Protocols/Protocols";
import Cards from "./pages/Cards/Cards";
import { observer } from "mobx-react-lite";
import Wallet from "./pages/Wallet/Wallet";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


export default observer(() => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className='App_content'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/Welcome" element={<Welcome />} />


            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/Verify" element={<Verify />} />
            <Route path="/PasswordReset" element={<PasswordReset />} />


            <Route path="/Protocols" element={<Protocols />} />
            <Route path="/Cards" element={<Cards />} />
            <Route path="/Wallet" element={<Wallet />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
})
