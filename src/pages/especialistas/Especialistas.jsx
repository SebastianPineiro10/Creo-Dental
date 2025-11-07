import "./especialistas.css";

function Especialistas() {
  return (
    <section className="especialistas-section fade-section">
      <h1 className="especialistas-title">Nuestro Equipo de Especialistas</h1>
      <p className="especialistas-subtitle">
      El <strong>Dr. Fernando Muñoz Zini</strong> y la <strong>Dra. Selene Gutiérrez Dávila</strong> comparten una misma visión: crear un espacio donde la odontología combine tecnología, calidez y confianza.
      En Creo Dental, trabajan juntos para ofrecer una atención integral y personalizada, guiando a cada paciente hacia el tratamiento ideal con un enfoque humano y resultados que transforman sonrisas.
      Su misión es simple pero profunda: que cada persona se sienta acompañada, comprendida y orgullosa de su sonrisa.
      </p>

      <div className="especialistas-grid">
        {/* Fundadores */}
        <div className="especialista-card">
          <img src="/fotos-doctores/2.jpg" alt="Dr. Fernando Muñoz Zini" />
          <h3>Dr. Fernando Muñoz Zini</h3>
          <p>
            Soy odontólogo especialista en rehabilitación oral e implantes y el encargado de acompañarte y guiarte en tu experiencia en Creo Dental. Mi objetivo es que te sientas en confianza desde el primer momento, ayudándote a encontrar el tratamiento ideal y 
            conectándote con el profesional adecuado para cada necesidad. En nuestra clínica combinamos tecnología avanzada,  calidez humana y atención personalizada para que disfrutes de una sonrisa saludable y estética.
          </p>
        </div>

        <div className="especialista-card">
          <img src="/fotos-doctores/3.jpg" alt="Dra. Selene Gutiérrez Dávila" />
          <h3>Dra. Selene Gutiérrez Dávila</h3>
          <p>
            Soy especialista en endodoncia y estética dental, y junto al Dr. Fernando Muñoz Zini lideramos el equipo clínico de Creo Dental. 
            Mi enfoque combina la precisión técnica con una mirada estética y humana, buscando siempre que cada tratamiento sea una experiencia cómoda, segura y con resultados que inspiren confianza. 
            Me apasiona devolver salud y belleza a las sonrisas, cuidando cada detalle para lograr armonía y bienestar en cada paciente.
          </p>
        </div>

        <div className="especialista-card">
          <img src="/fotos-doctores/4.jpg" alt="Dra. Chrystian Terrazas" />
          <h3>Dra. Christian Terrazas</h3>
          <p>
            Soy especialista en estética dental, dedicada a transformar sonrisas a través de tratamientos como carillas, blanqueamientos y rejuvenecimiento dental. 
            En Creo Dental busco combinar técnica, estética y cuidado personalizado para que cada paciente se sienta seguro y satisfecho con los resultados, logrando 
            sonrisas naturales y armoniosas.
          </p>
        </div>

        <div className="especialista-card">
          <img src="/fotos-doctores/6.jpg" alt="Dra. Alejandra Valenzuela" />
          <h3>Dra. Alejandra Valenzuela</h3>
          <p>
          Soy especialista en ortodoncia y formo parte del equipo de Creo Dental. Mi misión es ayudarte a lograr una sonrisa alineada, funcional y estética, combinando 
          tratamientos precisos con un acompañamiento cercano. Me apasiona guiar a cada paciente durante todo el proceso, 
          asegurando comodidad, seguridad y resultados duraderos.
          </p>
        </div>

        {/* Equipo Clínico */}
        <div className="especialista-card">
          <img src="/fotos-doctores/5.jpg" alt="Dra. Paulina Morlet" />
          <h3>Dra. Paulina Morlet</h3>
          <p>
          Soy odontóloga general y formo parte del equipo de Creo Dental. Mi objetivo es brindar una atención integral, cuidando cada detalle 
          para que tu experiencia sea cómoda, segura y con resultados duraderos. Me apasiona acompañar a los pacientes en cada etapa de su tratamiento, 
          ayudándolos a mantener una sonrisa saludable y llena de confianza.
          </p>
        </div>

        <div className="especialista-card">
          <img src="/fotos-doctores/1.jpg" alt="Dra. Stephanie Ávalos" />
          <h3>Dra. Stephanie Ávalos</h3>
          <p>
            Soy odontóloga general y formo parte del equipo de Creo Dental. Mi enfoque está en brindar una atención integral, cuidando tu salud bucal desde la prevención 
            hasta los tratamientos restaurativos,siempre con calidez y dedicación. Me gusta que cada paciente se sienta acompañado, seguro y confiado en cada paso de su tratamiento.
          </p>
        </div>
      </div>     
    </section>
  );
}

export default Especialistas;