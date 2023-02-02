import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client'

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import App from "./App";
import Home from "./pages/Home";
// import Web from "./pages/Web";
// import Tutor from "./pages/Tutor";
// import Bot from "./pages/Bot";
// import Server from './pages/Server';
// import NotFound from "./pages/NotFound";
// import Product from "./pages/Product";
// import Settings from "./pages/Settings";
// import ChangeLog from "./pages/ChangeLog";

import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/web/test" element={<Web />} />
        <Route path="/web" element={<Web />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/bot" element={<Bot />} />
        <Route path="/server" element={<Server />} />
        <Route path="/product" element={<Product />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/changes" element={<ChangeLog />} />
        <Route path="*" element={<NotFound />} fallback={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
