import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../view/pages/MainLayout';
import Home from '../view/pages/Home'
import AboutUs from '../view/pages/AboutUs'
import Careers from '../view/pages/Careers';
import Portfolio from '../view/pages/Portfolio';
import Blogs from '../view/pages/Blogs';
import NoPage from '../view/pages/NoPage404';
import Footer from "../components/Footer"
import Pricing from '../view/pages/Pricing';
function routes() {
  return (
    <div className='mx-auto w-[100%] overflow-x-hidden max-w-full'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
  </div>
  )
}

export default routes