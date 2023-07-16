import React from 'react';
import '../styles/sobrestyle.css';


const Sobre = () => {
  const professionals = [
    {
      name: 'Dr. Gustavo Pereira Lopes',
      photo: '/../../gu.jpeg',
      description: 'O Dr. Gustavo é especializado em implantes dentários e possui ampla experiência na área. Ele é conhecido por seu cuidado e atenção aos pacientes, sempre buscando o melhor resultado estético e funcional.'
    },
    {
      name: 'Dr. Murilo César Júnior',
      photo: '../../murilo.jpeg',
      description: 'O Dr. Murilo é especialista em odontologia estética e lentes de contato dentais. Ele é reconhecido por sua habilidade em transformar sorrisos, proporcionando resultados naturais e harmoniosos.'
    }
  ];

  return (
    <div className="container">
      <h2>Conheça Nossos Profissionais</h2>
      <div className="professionals-container">
        {professionals.map((professional, index) => (
          <div className="card" key={index}>
            <img src={professional.photo} alt={professional.name} />
            <h3>{professional.name}</h3>
            <p>{professional.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sobre;
