import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from '../components/testpage/Start';
import Contact from '../components/testpage/Contact';
import Footer from '../components/testpage/Footer';
import QrCode from '../components/reusables/qrCode/QrCode';
export default function RouterTest() {
  return (
    <BrowserRouter>
      <div>
        <QrCode />
        <Routes>
          <Route path="/routertest" element={<Start />} />
          <Route path="/routertest/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
