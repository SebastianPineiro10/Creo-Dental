import "./especialistas.css";

function EspecialistasUsa() {
  return (
    <section className="especialistas-section fade-in">
      <h1 className="especialistas-title">Our Team of Specialists</h1>

      <p className="especialistas-subtitle">
        <strong>Dr. Fernando Muñoz Zini</strong> and <strong>Dr. Selene Gutiérrez Dávila</strong> share the same vision: to create a space where dentistry combines technology, warmth, and trust.
        At Creo Dental, they work together to offer comprehensive and personalized care, guiding every patient toward the ideal treatment with a human approach and results that transform smiles.
        Their mission is simple but profound: for every person to feel supported, understood, and proud of their smile.
      </p>

      <div className="especialistas-grid">
        {/* Founders */}
        <div className="especialista-card">
          <img src="/fotos-doctores/2.jpg" alt="Dr. Fernando Muñoz Zini" />
          <h3>Dr. Fernando Muñoz Zini</h3>
          <p>
            I am a dentist specialized in oral rehabilitation and implants, and I am responsible for accompanying and guiding you throughout your experience at Creo Dental.
            My goal is to help you feel confident from the very first moment, helping you find the ideal treatment and connecting you with the right professional for every need.
            In our clinic, we combine advanced technology, human warmth, and personalized care so you can enjoy a healthy and aesthetic smile.
          </p>
        </div>

        <div className="especialista-card">
          <img src="/fotos-doctores/3.jpg" alt="Dr. Selene Gutiérrez Dávila" />
          <h3>Dr. Selene Gutiérrez Dávila</h3>
          <p>
            I am a specialist in endodontics and dental aesthetics, and together with Dr. Fernando Muñoz Zini, we lead the clinical team at Creo Dental.
            My approach combines technical precision with an aesthetic and human perspective, always seeking for each treatment to be a comfortable, safe experience with results that inspire confidence.
            I am passionate about restoring health and beauty to smiles, taking care of every detail to achieve harmony and well‑being in every patient.
          </p>
        </div>

        <div className="especialista-card">
          <img src="/fotos-doctores/4.jpg" alt="Dr. Chrystian Terrazas" />
          <h3>Dr. Christian Terrazas</h3>
          <p>
            I am a specialist in dental aesthetics, dedicated to transforming smiles through treatments such as veneers, whitening, and dental rejuvenation.
            At Creo Dental, I seek to combine technique, aesthetics, and personalized care so that every patient feels confident and satisfied with the results, achieving natural and harmonious smiles.
          </p>
        </div>

        <div className="especialista-card">
          <img src="/fotos-doctores/6.jpg" alt="Dr. Alejandra Valenzuela" />
          <h3>Dr. Alejandra Valenzuela</h3>
          <p>
            I am a specialist in orthodontics and part of the Creo Dental team. My mission is to help you achieve an aligned, functional, and aesthetic smile,
            combining precise treatments with close support. I am passionate about guiding each patient throughout the entire process,
            ensuring comfort, safety, and long‑lasting results.
          </p>
        </div>

        {/* Clinical Team */}
        <div className="especialista-card">
          <img src="/fotos-doctores/5.jpg" alt="Dr. Paulina Morlet" />
          <h3>Dr. Paulina Morlet</h3>
          <p>
            I am a general dentist and part of the Creo Dental team. My goal is to provide comprehensive care, taking care of every detail so that your experience is comfortable,
            safe, and with long‑lasting results. I am passionate about accompanying patients at every stage of their treatment, helping them maintain a healthy and confident smile.
          </p>
        </div>

        <div className="especialista-card">
          <img src="/fotos-doctores/1.jpg" alt="Dr. Stephanie Ávalos" />
          <h3>Dr. Stephanie Ávalos</h3>
          <p>
            I am a general dentist and part of the Creo Dental team. My focus is on providing comprehensive care, taking care of your oral health from prevention to restorative treatments,
            always with warmth and dedication. I like each patient to feel supported, safe, and confident in every step of their treatment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EspecialistasUsa;
