import { useEffect, useRef } from "react";
import "./services.css";

const servicesData = [
  {
    title: "Computer-guided dental implants",
    description:
      "Restore your smile with millimetric precision using 3D digital planning technology. Computer-guided implants allow for precise, safe, and minimally invasive placement, reducing surgical time and improving patient recovery.",
  },
  {
    title: "All on 4, 6 & X",
    description:
      "Complete solutions to replace all teeth with fixed prosthetics supported by 4, 6, or more implants. This advanced protocol provides a functional and aesthetic smile in less time, ideal for patients with total or advanced tooth loss.",
  },
  {
    title: "Digitally designed crowns, veneers, and prosthetics",
    description:
      "We use CAD/CAM technology to design and manufacture highly aesthetic and precise restorations. Digital crowns, veneers, and prosthetics ensure a perfect fit, maximum durability, and natural results in harmony with your face.",
  },
  {
    title: "Orthodontics",
    description:
      "Personalized treatments to correct dental alignment and achieve a functional and balanced smile. We combine traditional and modern techniques, prioritizing aesthetics and patient comfort throughout the entire process.",
  },
  {
    title: "Invisible aligners",
    description:
      "An aesthetic and removable orthodontic system that discreetly and progressively aligns teeth. Custom-made with 3D technology, invisible aligners provide a comfortable, hygienic, and virtually imperceptible treatment.",
  },
  {
    title: "Smile design",
    description:
      "A fusion of art, technology, and aesthetic dentistry to create a unique smile that reflects your personality. Through facial analysis, digital photography, and prior simulations, we plan a harmonious and natural result.",
  },
  {
    title: "Teeth whitening",
    description:
      "Professional treatment to lighten tooth shade and restore natural brightness. We use safe clinical agents and cold-light technology to achieve visible results from the first session, without sensitivity or enamel damage.",
  },
  {
    title: "Pediatric dentistry",
    description:
      "Specialized care for children with a warm and preventive approach. We teach healthy habits from an early age and offer adapted treatments to ensure a positive experience without fear of the dentist.",
  },
  {
    title: "Endodontics",
    description:
      "Advanced procedure to preserve damaged or internally infected teeth. Using rotary instruments and digital control, we eliminate infection, preserve dental structure, and restore functionality with precision and comfort.",
  },
  {
    title: "Digital radiology and 3D tomography",
    description:
      "High-precision diagnosis with state-of-the-art three-dimensional imaging. 3D tomography allows safe treatment planning, bone structure evaluation, and pathology detection with minimal radiation exposure.",
  },
  {
    title: "3D intraoral scanning",
    description:
      "We replace traditional impressions with fast, comfortable, and accurate digital scanning. This 3D model allows us to design restorations, orthodontics, and prosthetics with total precision and no patient discomfort.",
  },
];

function ServicesUsa() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const cards = document.querySelectorAll(".service-item");

    // --- Card animation ---
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

    // --- Header animation ---
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
        <h2>Our Services</h2>
        <p>
          We offer high-quality treatments focused on elegance,
          precision, and professionalism.
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

export default ServicesUsa;
