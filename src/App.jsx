import "./App.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopSection from "./components/TopSection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import PageNotFound from "./pages/PageNotFound";
import Teams from "./pages/Teams";
import Inquiry from "./pages/Inquiry";
import ServiceDetails from "./pages/ServiceDetails";
import Jobs from "./pages/Jobs";
import Pricing from "./pages/Pricing";
import { useState } from "react";

function App() {
  const [popup, setPopup] = useState(true);

  return (
    <>
      <TopSection />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/price" element={<Pricing />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />

      <ScrollToTop
        smooth
        color="white"
        width="40px"
        border-radius="50%"
        style={{ background: "purple", color: "white", borderRadius: "50%" }}
      />

      {popup && (
        <>
          <div className="fixed top-0  w-[100vw] flex justify-center items-center  z-[200] h-[100vh]  border border-black bg-[#000000A7]">
            <div className="relative">
              <img src="https://images.template.net/wp-content/uploads/2021/07/Notice-to-Terminate-Tenancy-At-Will-by-Tenant-Template.jpeg" alt="" className="h-[70vh] w-100%"/>
              <button
                className="absolute top-0 right-0  w-16  h-16 translate-x-1/2 -translate-y-1/2 rounded-full text-white bg-red-700"
                onClick={() => setPopup(false)}
              >
                X
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
