// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, Suspense } from "react";
import { LanguageContext } from "./context/LanguageContext";

// Componentes globales
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import WhatsappFloat from "./components/WhatsappFloat/WhatsappFloat";
import PhoneFloat from "./components/PhoneCallButton/PhoneCallButton";
import LanguageSwitchFloat from "./components/LanguageSwitchFloat/LanguageSwitchFloat";

// Páginas ES
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import SucursalJuarez from "./pages/sucursal-juarez/Juarez";
import Especialistas from "./pages/especialistas/Especialistas";
import Aseguranzas from "./pages/aseguranzas/aseguranzas";

// Páginas EN
import HomeUsa from "./pages/home/HomeUsa";
import ServicesUsa from "./pages/services/ServicesUsa";
import ContactUsa from "./pages/contact/ContactUsa";
import SucursalJuarezUsa from "./pages/sucursal-juarez/JuarezUsa";
import EspecialistasUsa from "./pages/especialistas/EspecialistasUsa";
import AseguranzasUsa from "./pages/aseguranzas/AseguranzasUsa";

// Reviews (ES/EN)
import Reviews from "./components/reviews/Reviews";
import ReviewsUsa from "./components/reviews/ReviewsUsa";

function AppContent() {
  const { language } = useContext(LanguageContext);
  const isSpanish = language === "es";

  return (
    <>
      <Navbar />

      <LanguageSwitchFloat />
      <PhoneFloat phone="+19187439500" />
      <WhatsappFloat phone="526563116130" />

      <main className="main-content">
        <Suspense fallback={<p>Cargando...</p>}>
          <Routes>
            <Route path="/" element={isSpanish ? <Home /> : <HomeUsa />} />
            <Route path="/services" element={isSpanish ? <Services /> : <ServicesUsa />} />
            <Route path="/contact" element={isSpanish ? <Contact /> : <ContactUsa />} />
            <Route path="/sucursal/juarez" element={isSpanish ? <SucursalJuarez /> : <SucursalJuarezUsa />} />
            <Route path="/especialistas" element={isSpanish ? <Especialistas /> : <EspecialistasUsa />} />
            <Route path="/aseguranzas" element={isSpanish ? <Aseguranzas /> : <AseguranzasUsa />} />
            <Route path="/reviews" element={isSpanish ? <Reviews /> : <ReviewsUsa />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
