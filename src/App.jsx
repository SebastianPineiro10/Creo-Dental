import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";

// Importa usando TUS carpetas reales
import SucursalJuarez from "./pages/sucursal-juarez/Juarez";
import SucursalAmericas from "./pages/sucursal-americas/Americas";

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
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />

        {/* Sucursales -> URLs limpias */}
        <Route path="/sucursal/juarez" element={<MainLayout><SucursalJuarez /></MainLayout>} />
        <Route path="/sucursal/americas" element={<MainLayout><SucursalAmericas /></MainLayout>} />
      </Routes>
    </Router>
  );
}

export default App;