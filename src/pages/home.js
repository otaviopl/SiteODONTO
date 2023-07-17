import React from 'react';
import Sobre from '../pages/sobre';
import '../styles/homestyle.css';
import Contato from '../components/contato';

const ModernPage = () => {
  const handleAgendarClick = () => {
    const whatsappNumber = '5518997770098';
    const message = 'Olá, quero agendar uma consulta.';

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappLink;
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="container">
      <div className="background-limit">
        <header>
          <h1 className="titulo">Laurindo Odontologia</h1>
          <nav className="navbar">
            <ul>
              <li>
                <button className="nav-button" onClick={() => scrollToSection('home')}>
                  Home
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => scrollToSection('sobre')}>
                  Sobre
                </button>
              </li>
              <li>
                <button className="nav-button" onClick={() => scrollToSection('contato')}>
                  Contato
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <section id="home">
            <h2 className="welcome">Bem-vindo(a) à Laurindo Odontologia</h2>
            <p className="text-come">
            Na Laurindo Odontologia, oferecemos um novo conceito em Odontologia Especializada, focado em transformar sorrisos e realizar sonhos. Nossa equipe qualificada e apaixonada está comprometida em oferecer um atendimento excepcional, garantindo que cada paciente receba o cuidado e a atenção que merece.

Nossos serviços abrangem diversas áreas, como Implantes Dentários, que visam repor dentes perdidos, proporcionando uma aparência natural, além de restaurar a funcionalidade e a confiança. Também trabalhamos com Lentes de Contato Dentais, uma solução inovadora para melhorar a estética do sorriso. Com essas finas camadas de porcelana, corrigimos imperfeições, como manchas, espaços e até mesmo o formato dos dentes, criando um sorriso harmonioso e radiante.

Além disso, oferecemos serviços de Harmonização Facial, uma área em crescimento que busca equilibrar e realçar os traços faciais por meio de procedimentos não cirúrgicos. Nossa equipe especializada está pronta para ajudá-lo a alcançar uma aparência harmoniosa e rejuvenescida.

Acreditamos que cada sorriso é único e especial, por isso nossa abordagem é personalizada para atender às necessidades individuais de cada paciente. Com profissionais dedicados, estamos empenhados em garantir sua satisfação e proporcionar uma jornada odontológica transformadora.

Venha nos visitar e descubra como podemos ajudá-lo a alcançar o sorriso e a harmonia facial dos seus sonhos. Estamos ansiosos para recebê-lo e cuidar da sua saúde bucal e estética.
            </p>
            <strong>
              <p>Agende sua consulta conosco</p>
            </strong>
            <button className="agendar-button" onClick={handleAgendarClick}>
              Agendar Consulta
              <div className="button-hover"></div>
              <div className="button-shine"></div>
            </button>
          </section>
          <section id="sobre">
            <Sobre />
          </section>
          <section id="contato">
            <Contato />
          </section>
        </main>
        <footer>
          <p>&copy; 2023 Laurindo Odontologia Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default ModernPage;
