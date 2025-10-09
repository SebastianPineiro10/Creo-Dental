import "./Services.css";

const servicesData = [
  { title: "Limpieza Dental", description: "Eliminamos placa y sarro cuidando de tus encías." },
  { title: "Blanqueamiento", description: "Aclarado profesional para una sonrisa brillante." },
  { title: "Ortodoncia", description: "Alineadores estéticos, brackets personalizados." },
  { title: "Implantes Dentales", description: "Reemplazo duradero con los mejores materiales." },
  { title: "Carillas Dentales", description: "Mejora estética de dientes frontales." },
  { title: "Odontología General", description: "Revisiones, extracciones y tratamientos preventivos." },
];

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Nuestros Servicios</h2>
        <p>Ofrecemos tratamientos de calidad con enfoque en elegancia y profesionalismo.</p>
      </div>
      <div className="services-list">
        {servicesData.map((serv, i) => (
          <div className="service-item" key={i}>
            <h3>{serv.title}</h3>
            <p>{serv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;