import "./Home.css";

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-container">
          <h1 className="fade-in arch-title">
            SONRISAS QUE <br /> INSPIRAN CONFIANZA
          </h1>
          <p className="fade-in delay-1 arch-subtitle">
            Clínica de Rehabilitación Estética Oral. Tratamientos para niños y adultos en un ambiente cálido y profesional.
          </p>
          <a
            href="https://wa.me/524420000000?text=Hola,%20quiero%20agendar%20una%20cita%20en%20Creo%20Dental"
            className="btn-gold fade-in delay-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGENDAR CITA
          </a>
        </div>
      </section>

    <section className="mvv-section">
      <div className="mvv-header">
        <h2>FILOSOFÍA</h2>
        <div className="mvv-divider"></div>
        <p>
          En Creo Dental unimos ciencia, precisión y estética para crear una 
          experiencia odontológica moderna. Nuestra filosofía se centra en 
          brindar atención humana, resultados excepcionales y un ambiente 
          donde la confianza y la belleza natural se encuentran.
        </p>
      </div>

      <div className="mvv-grid">
        <div className="mvv-card">
          <h3>MISIÓN</h3>
          <p>
            Brindar atención odontológica integral con excelencia, precisión y calidez humana, combinando tecnología de vanguardia con un enfoque personalizado para crear sonrisas saludables, estéticas y duraderas. 
            En Creo Dental, transformamos la visita al dentista en una experiencia cómoda, confiable y de alto nivel.
          </p>
        </div>

        <div className="mvv-card">
          <h3>VISIÓN</h3>
          <p>
            Ser la clínica dental de referencia en Ciudad Juárez y el norte de México por nuestra calidad profesional, innovación tecnológica y trato humano, consolidándonos como el estándar premium en odontología moderna y el lugar donde los pacientes confían plenamente en el cuidado de su sonrisa.
          </p>
        </div>

        <div className="mvv-card">
          <h3>VALORES</h3>
          <ul>
            <li><strong>Excelencia:</strong> Buscamos la perfección en cada detalle, desde el diagnóstico hasta el resultado final.</li>
            <li><strong>Innovación:</strong> Adoptamos la más alta tecnología digital y radiológica para ofrecer tratamientos precisos y cómodos.</li>
            <li><strong>Ética y confianza:</strong> Actuamos con transparencia, responsabilidad y respeto hacia cada paciente.</li>
            <li><strong>Calidez humana:</strong> Tratamos a cada persona con empatía, atención genuina y cuidado personalizado.</li>
            <li><strong>Estética y bienestar:</strong> Creemos que una sonrisa sana y bella transforma la confianza y la vida de nuestros pacientes.</li>
            <li><strong>Trabajo en equipo:</strong> Unimos talentos y especialidades para lograr los mejores resultados clínicos y humanos.</li>
          </ul>
        </div>
      </div>
    </section>
    </>
  );
}

export default Home;