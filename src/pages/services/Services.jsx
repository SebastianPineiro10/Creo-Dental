import { useEffect, useRef } from "react";
import "./services.css";

const servicesData = [
  { title: "Implantes dentales guiados por computadora", description: "Rehabilita tu sonrisa con precisión milimétrica mediante tecnología de planificación digital 3D. Los implantes guiados por computadora permiten una colocación exacta, segura y mínimamente invasiva, reduciendo el tiempo quirúrgico y mejorando la recuperación del paciente." },
  { title: "All on 4, 6 & X", description: "Soluciones completas para reemplazar todos los dientes mediante prótesis fijas soportadas por 4, 6 o más implantes. Este protocolo avanzado ofrece una sonrisa funcional y estética en menor tiempo, ideal para pacientes con pérdida dental total o avanzada." },
  { title: "Coronas, carillas y prótesis diseñadas digitalmente", description: "Utilizamos tecnología CAD/CAM para diseñar y fabricar restauraciones altamente estéticas y precisas. Las coronas, carillas y prótesis digitales garantizan un ajuste perfecto, máxima durabilidad y resultados naturales en armonía con tu rostro." },
  { title: "Ortodoncia", description: "Tratamientos personalizados para corregir la posición dental y lograr una sonrisa funcional y equilibrada. Combinamos técnicas tradicionales y modernas, priorizando la estética y la comodidad del paciente durante todo el proceso." },
  { title: "Alineadores invisibles", description: "Sistema ortodóntico estético y removible que alinea los dientes de forma discreta y progresiva. Fabricados a medida con tecnología 3D, los alineadores invisibles permiten un tratamiento cómodo, higiénico y prácticamente imperceptible." },
  { title: "Diseño de sonrisa", description: "Fusión de arte, tecnología y odontología estética para crear una sonrisa única que refleje tu personalidad. A través de análisis facial, fotografías digitales y simulaciones previas, planificamos un resultado armónico y natural." },
  { title: "Blanqueamiento", description: "Tratamiento profesional para aclarar el tono de los dientes y devolverles su luminosidad natural. Utilizamos agentes clínicos seguros y tecnología de luz fría para obtener resultados visibles desde la primera sesión, sin sensibilidad ni daño al esmalte." },
  { title: "Odontopediatra", description: "Atención especializada para los más pequeños con un enfoque cálido y preventivo. Enseñamos hábitos saludables desde la infancia y ofrecemos tratamientos adaptados para garantizar una experiencia positiva y sin miedo al dentista." },
  { title: "Endodoncia", description: "Procedimiento avanzado para conservar dientes dañados o con infección interna. A través de equipos rotatorios y control digital, eliminamos la infección, preservamos la estructura dental y devolvemos la funcionalidad con precisión y confort." },
  { title: "Radiología digital y tomografía 3D", description: "Diagnóstico de alta precisión con imágenes tridimensionales de última generación. La tomografía 3D permite planificar tratamientos con seguridad, evaluar estructuras óseas y detectar patologías con una dosis mínima de radiación." },
  { title: "Escaneo intraoral 3D", description: "Sustituimos las impresiones tradicionales por un escaneo digital rápido, cómodo y exacto. Este modelo 3D nos permite diseñar restauraciones, ortodoncia y prótesis con total precisión y sin molestias para el paciente." },
];

function Services() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const cards = document.querySelectorAll(".service-item");

    // --- Animación de tarjetas ---
    const cardObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => cardObserver.observe(card));

    // --- Animación del título ---
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            header.classList.add("visible");
            headerObserver.unobserve(header);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (header) headerObserver.observe(header);

    return () => {
      cardObserver.disconnect();
      headerObserver.disconnect();
    };
  }, []);

  return (
    <section className="services">
      <div className="services-header" ref={headerRef}>
        <h2>Nuestros Servicios</h2>
        <p>
          Ofrecemos tratamientos de calidad con enfoque en elegancia,
          precisión y profesionalismo.
        </p>
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