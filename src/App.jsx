import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import WhatsappFloat from "./components/WhatsappFloat/WhatsappFloat.jsx";
import { Link } from "react-router-dom";

// Sucursales
import SucursalJuarez from "./pages/sucursal-juarez/Juarez";
import SucursalAmericas from "./pages/sucursal-americas/Americas";

// Layout base que todos usan
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
        {/* HOME -> sí muestra botón */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
              <WhatsappFloat phone="526563116130" />
            </MainLayout>
          }
        />

        {/* 🔴 SERVICES -> sin botón */}
        <Route
          path="/services"
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          }
        />

        {/* 🔴 CONTACT -> sin botón */}
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />

        {/* 🟢 SUCURSAL JUÁREZ -> muestra botón */}
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

        {/* 🟢 SUCURSAL AMÉRICAS -> muestra botón */}
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
      </Routes>
    </Router>
  );
}

export default App;