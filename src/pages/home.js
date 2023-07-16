import React from 'react';
import Sobre from '../pages/sobre'
import '../styles/homestyle.css'

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
      <header>
        <h1>Laurindo Odontologia</h1>
      </header>
      <nav className='navbar'>
        <ul>
          <li>
            <button onClick={() => scrollToSection('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('sobre')}>Sobre</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contato')}>Contato</button>
          </li>
        </ul>
      </nav>
      <main>
        <section id="home">
          <h2>Bem-vindo(a) à Laurindo Odontologia</h2>
          <p>
            
Na Laurindo Odontologia, estamos trazendo um novo conceito em Odontologia Especializada. Nossa equipe altamente qualificada e apaixonada está empenhada em transformar sorrisos e construir sonhos.

Oferecemos serviços de Implantes Dentários, uma solução eficaz para repor dentes perdidos, proporcionando não apenas uma aparência natural, mas também a funcionalidade e confiança restauradas.

Além disso, trabalhamos com as modernas Lentes de Contato Dentais, um recurso inovador para melhorar a estética do seu sorriso. Com essas finas camadas de porcelana, corrigimos imperfeições, como manchas, espaços e até mesmo o formato dos dentes, criando um sorriso harmonioso e radiante.

Na Laurindo Odontologia, acreditamos que cada sorriso é único e especial. Nossa abordagem personalizada garante que cada paciente receba o cuidado e a atenção que merece. Nossos profissionais dedicados estão comprometidos em oferecer um atendimento excepcional e garantir sua satisfação.

Venha nos visitar e descubra como podemos ajudá-lo a alcançar o sorriso dos seus sonhos. Estamos ansiosos para recebê-lo e iniciar uma jornada odontológica transformadora juntos.
          </p>
          <strong><p>Agende sua consulta conosco</p></strong>
          <button onClick={handleAgendarClick}>Agendar</button>
        </section>
        <section id="sobre">
         <Sobre></Sobre>
        </section>
        <section id="contato">
          <h2>Contato</h2>
          <p>Informações de contato...</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Laurindo Odontologia Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default ModernPage;
