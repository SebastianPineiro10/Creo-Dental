import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import WhatsappFloat from "./components/WhatsappFloat/WhatsappFloat.jsx";

// Sucursales
import SucursalJuarez from "./pages/sucursal-juarez/Juarez";
import SucursalAmericas from "./pages/sucursal-americas/Americas";

// Especialistas
import Especialistas from "./pages/especialistas/Especialistas.jsx";

// Aseguranzas
import Aseguranzas from "./pages/aseguranzas/aseguranzas.jsx";

import PhoneFloat from "./components/PhoneCallButton/PhoneCallButton.jsx";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}



function App() {
  return (
    <Router>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
              <WhatsappFloat phone="526563116130" />
              <PhoneFloat phone="+19187439500" />
            </MainLayout>
          }
        />

        {/* SERVICIOS */}
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />

        {/* CONTACTO */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* SUCURSAL JUAREZ */}
        <Route
          path="/sucursal/juarez"
          element={
            <MainLayout>
              <SucursalJuarez />
              <WhatsappFloat
                phone="526563116130"
                message="Hola, me interesa agendar cita en la sucursal Juárez."
              />
            </MainLayout>
          }
        />

        {/* SUCURSAL AMERICAS */}
        <Route
          path="/sucursal/americas"
          element={
            <MainLayout>
              <SucursalAmericas />
              <WhatsappFloat
                phone="6564189051"
                message="Hola, me interesa agendar cita en la sucursal Américas."
              />
            </MainLayout>
          }
        />

        {/* ESPECIALISTAS */}
        <Route
          path="/especialistas"
          element={
            <MainLayout>
              <Especialistas />
              <WhatsappFloat
                phone="526563116130"
                message="Hola, me gustaría agendar una cita con un especialista."
              />
            </MainLayout>
          }
        />

        {/*  ASEGURANZAS */}
        <Route
          path="/aseguranzas"
          element={
            <MainLayout>
              <Aseguranzas />
              <WhatsappFloat
                phone="526563116130"
                message="Hola, quisiera validar mi aseguranza dental."
              />
            </MainLayout>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;

